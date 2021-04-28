const header=document.querySelector("h1");

// //click eventi
// header.addEventListener("click",run);

// function run(){
//     header.textContent="click event"
// }



// //double click
// header.addEventListener("dblclick",dblrun);

// function dblrun(){
//     header.textContent="dblclick event"
// }




// //mouse Down
// header.addEventListener("mousedown",mdrun);

// function mdrun(){
//     header.textContent="mousedown event"
// }



// //mouse up
// header.addEventListener("mouseup",muprun);

// function muprun(){
//     header.textContent="mouseup event"
// }



// //mouse over
// header.addEventListener("mouseover",morun);

// function morun(){
//     header.textContent="mouse over event"
// }


// //mouse out
// header.addEventListener("mouseout",moutrun);

// function moutrun(){
//     header.textContent="mouse out event"
// }





/* mouseover ve mouseout özelliğinin bir ul ye 
verildiğini varsayarsak ul içindeki li lerde tekrar 
çalışacak veya dive verirsek onun içindeki elementlerde
bunu önlemek için enter ve leaver kullanılır */
const divTag=document.querySelector("div");

// divTag.addEventListener("mouseout",run);
// divTag.addEventListener("mouseover",run);

divTag.addEventListener("mouseenter",run);
divTag.addEventListener("mouseleave",run)





function run(e){
console.log(e.type);
}