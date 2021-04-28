document.getElementById("ajax").addEventListener("click",getAllEmployees);




function getAllEmployees(){

const xhr=new XMLHttpRequest();
xhr.open("GET","employees.json",true);

//readState 4 oldugunda
xhr.onload=function(){

    if(this.status == 200){
        
        const employees=JSON.parse(this.responseText);

        const employeesList=document.getElementById("employees");
        
        //employeesList.innerHTML=""; // Tekrar tekrar aynı verilerin yüklenmesini önlemek
        //veya daha hızlı olan
        while(employeesList.firstChild !== null){
            employeesList.firstChild.remove();
        }
       
        employees.forEach((employee)=>{
            
            employeesList.innerHTML+=`
            
            <tr>
            <td>${employee.name}</td>
            <td>${employee.departmant}</td>
            <td>${employee.salary}</td>
            </tr>
            
            `

        })
    }

}


xhr.send();


}