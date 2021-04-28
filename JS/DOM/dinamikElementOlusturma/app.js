
//Yeni element oluşturma
const newBtn=document.createElement("button");
let div=document.querySelectorAll("div")[1];



newBtn.id="clear";
newBtn.style.backgroundColor="pink";
newBtn.appendChild(document.createTextNode("append test"));
div.appendChild(newBtn);







//text ekleme
let list=document.querySelector("#ulId");
//list.textContent="test";//bu şekilde ekleme yapılırsa herşey gider
let newText=document.createTextNode("test");
list.appendChild(newText);




let newDiv=document.createElement("div");
let newH1=document.createElement("h1");
let newHr=document.createElement("hr");
let newP=document.createElement("p");


newH1.textContent="BAŞLIK";
newP.textContent="test paragraf";

div.appendChild(newH1);
div.appendChild(newHr);
div.appendChild(newP);


document.querySelector("body").appendChild(newDiv);