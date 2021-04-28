const form = document.getElementById("employee-form");
const nameInput = document.getElementById("name");
const salaryInput = document.getElementById("salary");
const departmentInput = document.getElementById("department");
const employeeList = document.getElementById("employees")
const updateBtn = document.getElementById("update");


let updateState = null; //employee guncellemede kullanilacak

import { Request } from './request.js';
import UI from './ui.js'


const request = new Request("http://localhost:3000/employees");
const ui = new UI();





addEventListeners();
function addEventListeners() {

    form.addEventListener("submit", addEmployee);
    document.addEventListener("DOMContentLoaded", getAllEmployees);
    employeeList.addEventListener("click", tableEvents);
    updateBtn.addEventListener("click", updateEmployee);

}





function addEmployee(e) {

    const employeeName = nameInput.value.trim();
    const employeeDepartment = departmentInput.value.trim();
    const employeeSalary = Number(salaryInput.value.trim());



    if (employeeName === "" || employeeDepartment === "" || employeeSalary === "") {
        alert("Lütfen Tüm Alanları Doldurun");
    }
    else {
        request.post(
            {
                name: employeeName,
                department: employeeDepartment,
                salary: employeeSalary

            }
        )
            .then(response => {
                ui.addEmployeeToUI(response);
                ui.clearInputs();
            })
            .catch(err => console.log(err));
    }

    e.preventDefault();

}




function getAllEmployees() {
    request.get()
        .then(response => ui.addAllEmployeesToUI(response))
        .catch(err => console.log(err));
}



function tableEvents(e) {

    if (e.target.id === "delete-employee") {

        deleteEmployee(e.target);

    }
    else if (e.target.id === "update-employee") {

        updateEmployeeController(e.target.parentElement.parentElement);

    }



}


function deleteEmployee(btn) {

    const id = btn.parentElement.previousElementSibling.previousElementSibling.textContent;

    request.delete(id)
        .then(() => {
            ui.deleteEmployeeFromUI(btn.parentElement.parentElement);
        })
        .catch(err => console.log(err));
}



function updateEmployeeController(targetEmployee) {

    ui.toggleUpdateButton(targetEmployee);

    if (updateState) {
        updateState = null;
    }
    else {
        updateState = {
            updateId: targetEmployee.children[3].textContent,
            updateParent: targetEmployee
        }
    }


}



function updateEmployee() {

    if (updateState) {

        request.put(updateState.updateId, {
            name: nameInput.value.trim(),
            department: departmentInput.value.trim(),
            salary: salaryInput.value.trim()
        })
        .then(response=>{
            ui.updateEmployeeOnUI(response,updateState.updateParent);
        })
        .catch(err=>console.log(err));

    }

}