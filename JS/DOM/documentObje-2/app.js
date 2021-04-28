let value;

//Scriptler
value=document.scripts;
value=document.scripts.length;
value=document.scripts[0];


//linkler
value=document.links;
value=document.links[document.links.length-1].getAttribute("href");
value=document.links[document.links.length-1].getAttribute("class");
value=document.links[document.links.length-1].className;
value=document.links[document.links.length-1].classList;


//formlar
value=document.forms;
value=document.forms[0];
value=document.forms["testForm"]; //form'un name'i olması gerekiyor
value=document.forms[0].id;
value=document.forms[0].getAttribute("id");
value=document.forms[0].name;


value=document.forms[0].method;


console.log(value);