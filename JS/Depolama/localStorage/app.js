// //Local Storage

// localStorage.setItem("testKey","testValue");
// localStorage.setItem("tekrar",50);



// //Get Item

// const value=localStorage.getItem("tekrar");
// console.log(value);
// console.log(typeof value);


// //Clear Local Storage
// localStorage.clear();


// //localStorage veri sorgulama

// localStorage.setItem("testKey","testValue");
// localStorage.setItem("tekrar",50);


// console.log(localStorage.getItem("sport"));

// if(localStorage.getItem("sport")===null){
//     console.log("veri bulanamadı");
// }
// else{
// console.log("veri bulunuyor")
// }





//Local Storage - Array Yazma

const todos = ["todo1", "todo2", "todo3"];

//Bu şekilde array içindeki değerleri toplayarak bir localStorage yazdı "todo1,todo2,todo3" şeklinde
//localStorage.setItem("todos",todos);


// localStorage.setItem("todos",JSON.stringify(todos));

// const value=JSON.parse(localStorage.getItem("todos"));
// console.log(value);




 //localStoage ' a inputtan array ekleme uygulaması
 let todoForm=document.getElementById("todo-form");
 let todo=document.getElementById("todo");

 todoForm.addEventListener("submit",addArray);
 function addArray(key){
    let todos;
    if(localStorage.getItem("todos")===null)
    todos=[];
    else
    todos=JSON.parse(localStorage.getItem("todos"));

    todos.push(todo.value);
    
    localStorage.setItem("todos",JSON.stringify(todos));

    //submit'in default değerleri kaldırmak
    key.preventDefault();

 }


 localStorage.removeItem("todos"); //belirli storage silme