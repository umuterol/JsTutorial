const element=document.querySelector("#lorem");

//Element özellikleri

// console.log(element.id);
// console.log(element.className);
// console.log(element.classList);
// console.log(element.classList[0]);
// //sadece text kısımlarını veriyor
// console.log(element.textContent);

// console.log(element.innerHTML);


//console.log(element.style);


//Style ve element özelliklerini değiştirme
element.className="testChange";
element.style.color="red";
element.style.marginLeft="50px";


//link verme ve linki YENİ SEKMEDE açma
document.querySelector("a").href="https://umuterol.site";
document.querySelector("a").target="_blank";

document.querySelector("#clear").style.backgroundColor="red";


element.textContent="silin";
element.textContent="<span>silin</span>";
element.innerHTML="<big style='color:blue'>sil<big>";




let element2=document.querySelector("li:first-child");
element2=document.querySelector("li:nth-child(2)");
element2=document.querySelector("li:nth-child(3)");
element2=document.querySelector("li:last-child");
//tek sayıya denk gelen çocukları alır
element2=document.querySelectorAll("li:nth-child(odd)");
//çift
element2=document.querySelectorAll("li:nth-child(even)");


element2.forEach(
       function(key){
           key.style.color="red";
           key.style.backgroundColor="#ccc";
            
       }
)




//Tüm li taglarıyla işlem yapmak
// let liste=document.querySelectorAll("li");
// liste.forEach(
//     function(key){
//         key.style.color="red";
//         key.style.background="black";
//     }
// )




console.log(element2);
//console.log(element);