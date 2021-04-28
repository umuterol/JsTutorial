//Tüm elementleri seçme
const form = document.querySelector("#todo-form");
const todoInput = document.getElementById("todo");
const todoList = document.querySelector(".list-group")
const firstCardBody = document.querySelector(".card-body");
const secondCardBody = document.querySelectorAll(".card-body")[1];
const filter = document.querySelector("#filter");
const clearButton = document.querySelector("#clear-todos");

eventListeners();

function eventListeners() {
    form.addEventListener("submit", addTodo);
    //sayfa yüklendiğinde çalışan event
    document.addEventListener("DOMContentLoaded",loadAllTodosUI);
    //todoları UI ' dan kaldırmak
    secondCardBody.addEventListener("click",deleteTodo);
    //filtreleme
    filter.addEventListener("keyup",filterTodos);


    //tüm todoları temizleme
    clearButton.addEventListener("click",ClearAllTodos);
}



function filterTodos(){

  let filterValue=filter.value.toLocaleLowerCase();//filter kelimeleri ve list ' deki kelimeleri küçük harf yapıp kıyaslıyoruz
  let listItem=document.querySelectorAll(".list-group-item");

  listItem.forEach(function(list){
    const text=list.textContent.toLocaleLowerCase();
    if( text.includes(filterValue)){
     list.setAttribute("style","display : block");//important css bunu kesinlikle yap önceden gelen emri hiçe say
    }
    else{
      list.setAttribute("style","display : none !important");
    }
  })

  
}


function deleteTodo(e){

  /*
   <li class="list-group-item d-flex justify-content-between">
                            Todo 1
                            <a href = "#" class ="delete-item">
                                <i class = "fa fa-remove"></i>
                            </a>

                        </li>
  */
  if(e.target.className === "fa fa-remove"){
    e.target.parentElement.parentElement.remove();
    deleteTodoFromStorage(e.target.parentElement.parentElement.textContent);
  }

}


function deleteTodoFromStorage(deleteTodo){
  let todos=getTodoFromStorage();
  
   todos.forEach(function(todo,index){ //index te alabiliyoruz
    if(todo===deleteTodo)
    todos.splice(index,1);

   });

  localStorage.setItem("todos",JSON.stringify(todos));
}

function loadAllTodosUI(){
  let todos=getTodoFromStorage();
  todos.forEach(function(todo){
  addTodoToUI(todo);
  });
}


function addTodo(e) {
    const newTodo = todoInput.value.trim();//trim fazla boşlukları alır
    
    if(newTodo=== "")
    firstCardBody.appendChild(showAlert("danger","lütfen bir todo girin"));
    else{
        addTodoToUI(newTodo);
        addTodoToStorage(newTodo);
        firstCardBody.appendChild(showAlert("success","todo ekleme başarılı"));
    }
     
    e.preventDefault();
}


//Todoları l localStorage'a ekleme
function getTodoFromStorage(){

  if(localStorage.getItem("todos")===null)
  return [];
  else{
    return JSON.parse(localStorage.getItem("todos"));
  }


}

function addTodoToStorage(newTodo){
 let todos=getTodoFromStorage();
 
 todos.push(newTodo);

 localStorage.setItem("todos",JSON.stringify(todos));
}




/*
<div class="alert alert-danger" role="alert">
  This is a danger alert—check it out!
</div>
*/

function showAlert(type,message){

const alert=document.createElement("div");

alert.className=`alert alert-${type}`;

alert.textContent=message;


// saniye ile işlem yaptırma 
setTimeout(function(){
  alert.remove();
},2000); //1 saniye sonra alert silinecek

return alert;

}


function addTodoToUI(newTodo){
    /*
<li class="list-group-item d-flex justify-content-between">
                            Todo 1
                            <a href = "#" class ="delete-item">
                                <i class = "fa fa-remove"></i>
                            </a>

                        </li>
    */

  //li ve a olusturuluyor                       
  const listItem=document.createElement("li");
  const newLink=document.createElement("a");
  
//link tasarlanıyor
  newLink.href="#";
  newLink.className="delete-item";
  newLink.innerHTML='<i class = "fa fa-remove"></i>';

  //li tasarlanıyor
  listItem.className="list-group-item d-flex justify-content-between";
  listItem.appendChild(document.createTextNode(newTodo));
  listItem.appendChild(newLink);
  
  //ul içine atılıyor
  todoList.appendChild(listItem);

  todoInput.value="";

  

}





//tüm todoları temizleme
function ClearAllTodos(){
  
  if(!confirm("Todollar silinsin mi ?"))
    return;
  
  


  // //Yöntem 1
  // let listItem=document.querySelectorAll(".list-group-item");
  // listItem.forEach(function(list){
  //   list.remove();
  // });


  // //Yöntem2
  // todoList.innerHTML="";  //diğer yöntemlere göre daha yavaş


  //Yöntem3
  while(todoList.firstElementChild !== null ){
    todoList.removeChild(todoList.firstElementChild);//sadece element olan child'lar silinir
  }
  

  
    localStorage.removeItem("todos");
  
}