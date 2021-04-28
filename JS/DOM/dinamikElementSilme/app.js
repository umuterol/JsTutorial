//Dinamik element silme

const todoHeader=document.querySelector("h1.display-1");
const todos=document.querySelectorAll("li");
const todoList=document.querySelector("ul");

//Remove Metodu 
todos[1].remove();

//Remove Child cocuklardan silme
todoList.removeChild(todoList.lastElementChild);
todoList.removeChild(todoList.firstElementChild);

todoList.removeChild(todos[2]);



console.log(todos);
