//element degistirme

const todoDiv=document.querySelector("div");

const newElement=document.createElement("h5")
newElement.className="display-5";
newElement.id="header";
newElement.textContent="BAŞLIK JS İLE DEĞİŞTİ";



//Eski Element
const oldElement=todoDiv.children[1];

todoDiv.replaceChild(newElement,oldElement);



