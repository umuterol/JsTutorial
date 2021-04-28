let value;



list=document.querySelector("ul");



//Child Nodes - Text Dahil
value=list.childNodes;


//Children - text yok sadece elementler
value=list.children;
value=list.children[1];
value=list.children[0].textContent="test1";



let div=document.querySelector("div");
//ilk çocuk
value=div.firstElementChild;
//son cocuk
value=div.lastElementChild;


value=div.lastElementChild.children[1].style.color="red";
value=div.lastElementChild.lastElementChild.textContent="JS TARAFINDAN DUZELTME YAPILDI";


//lenght dışında çocuk sayısı hesaplama
value=div.childElementCount;


//ebeveyn
value=div.parentElement;


//element kardeşleri

value=list.previousElementSibling;
value=div.nextElementSibling;
value=div.nextElementSibling.nextElementSibling;

console.log(value);