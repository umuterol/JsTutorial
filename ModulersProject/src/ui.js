export default class UI {

    constructor() {
        this.employeesList = document.getElementById("employees");
        this.nameInput = document.getElementById("name");
        this.salaryInput = document.getElementById("salary");
        this.departmentInput = document.getElementById("department");
        this.updateBtn = document.getElementById("update");

    }

    addAllEmployeesToUI(employees) {

        let result = "";

        employees.forEach(employee => {
            result +=
                `
        <tr>
            <td>${employee.name}</td>
            <td>${employee.department}</td>
            <td>${employee.salary}</td>
            <td>${employee.id}</td>
            <td><a href="#" id="update-employee" class="btn btn-danger">Güncelle</a></td>
            <td> <a href="#" id="delete-employee" class="btn btn-danger">Sil</a></td>
        </tr>
        `
        });

        this.employeesList.innerHTML = result;

    }

    addEmployeeToUI(employee) {

        this.employeesList.innerHTML +=
            `
        <tr>
            <td>${employee.name}</td>
            <td>${employee.department}</td>
            <td>${employee.salary}</td>
            <td>${employee.id}</td>
            <td><a href="#" id="update-employee" class="btn btn-danger">Güncelle</a></td>
            <td> <a href="#" id="delete-employee" class="btn btn-danger">Sil</a></td>
        </tr>
        `;


    }



    clearInputs() {
        this.nameInput.value = "";
        this.departmentInput.value = "";
        this.salaryInput.value = "";

    }



    deleteEmployeeFromUI(element) {
        element.remove();
    }


    toggleUpdateButton(target) {

        if (this.updateBtn.style.display === "none") {

            this.updateBtn.style.display = "block";
            this.addEmployeeInfosToInput(target);

        }
        else {
            this.updateBtn.style.display = "none";
            this.clearInputs();
        }

    }

    addEmployeeInfosToInput(target) {

        const children = target.children;

        this.nameInput.value = children[0].textContent;
        this.departmentInput.value=children[1].textContent;
        this.salaryInput.value=children[2].textContent;

    }

    updateEmployeeOnUI(employe,target){

        const children=target.children;

        children[0].textContent=employe.name;
        children[1].textContent=employe.department;
        children[2].textContent=employe.salary;

        this.clearInputs();

    }

}