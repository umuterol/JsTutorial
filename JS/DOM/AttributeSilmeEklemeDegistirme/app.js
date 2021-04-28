const todoInput=document.getElementById("todo");
let element;





element=todoInput;
element=todoInput.classList;

//iki şekilde de class eklenebilir
todoInput.className+=" testClass";
todoInput.classList.add("testClass2");
//class'ı çıkarmak 
todoInput.classList.remove("testClass2");

todoInput.placeholder="Birşeyler girin";
todoInput.setAttribute("placeholder","test");

//Bir attribute eklemek
todoInput.setAttribute("title","Input");
element=todoInput;

//attribute kontrolü var mı 
element=todoInput.hasAttribute("required");
element=todoInput.hasAttribute("title");
element=todoInput.hasAttribute("name");


//attribute kaldırmak
todoInput.removeAttribute("name");
element=todoInput;



console.log(element);