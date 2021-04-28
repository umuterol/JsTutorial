//Calback Fonksiyonlar

// const langs=["Python","Java","C++"];

// langs.forEach((lang)=>{
// console.log(lang);
// });




// document.getElementById("btn").addEventListener("click",function(){
// console.log("Tıkla");
// });






function process1(callback){
    setTimeout(() => {
        console.log("Process 1");
        callback();
    }, 3000);
}

function process2(){
    setTimeout(() => {
        console.log("Process 2");
    }, 2000);
}


process1(process2);

console.log("Naber");
