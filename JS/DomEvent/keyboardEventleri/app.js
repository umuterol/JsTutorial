
//klavye evenleri 


//keypress
// document.addEventListener("keypress",run);
// function run(e){
//   //hangi tusa basılıdığını öğrenmek
//   console.log(e.which);//sayı olarak
//   console.log(e.key);//harf olarak

//   console.log("Naber");  
// }



//keydown
// document.addEventListener("keydown",run);
// function run(e){
//   //hangi tusa basılıdığını öğrenmek
//   console.log(e.which);//sayı olarak
//   console.log(e.key);//harf olarak

//   console.log("Naber");  
// }



//keyup
// document.addEventListener("keyup",run);
// function run(e){
//   //hangi tusa basılıdığını öğrenmek
//   console.log(e.which);//sayı olarak
//   console.log(e.key);//harf olarak

//   console.log("Naber");  
// }



//UYGULAMA
let txtInput=document.getElementById("txt");
txtInput.addEventListener("keyup",run);
function run(e){
  
    document.querySelector("h1").innerHTML=e.target.value;

}





//BUTON HAREKET ETTİRME UYGULAMASI
/*
//w-119
//s-115
//a-97
//d-100
let x=2,y=2;
document.addEventListener("keypress",run);
function run(e){
    if(e.which==100)
    document.getElementById("btn").style.marginLeft=(x+=3)+"px";
    if(e.which==97)
    document.getElementById("btn").style.marginLeft=(x-=3)+"px";
    if(e.which==115)
    document.getElementById("btn").style.marginTop=(y+=3)+"px";
    if(e.which==119)
    document.getElementById("btn").style.marginTop=(y-=3)+"px";




  console.log("Naber");  
}


*/