
// //Event bubbling

// let todoKart=document.querySelector(".kart");
// let todoUl=document.querySelector(".kart ul");
// let todoDelete=document.getElementsByClassName("delete")[0];


// todoKart.addEventListener("click",function(e){
//     console.log("kart");
// })
// todoUl.addEventListener("click",function(e){
//     console.log("ul");
// })
// todoDelete.addEventListener("click",function(e){
//     console.log("Delete");
// })





//Event Capturing

let todoKart=document.querySelector(".kart");
todoKart.addEventListener("click",run);

function run(e){
   if(e.target.type==="submit")
   e.target.style.backgroundColor="red";
   
   console.log(e.target.style);
}


