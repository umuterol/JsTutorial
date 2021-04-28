






document.getElementById("btn").addEventListener("click",function(){



const xhr= new XMLHttpRequest();



// //readystate degistiginde calisir
// //ancak eski bir yontem
// xhr.onreadystatechange=function(){
    
//     // console.log(xhr.readyState);
//     // console.log(xhr.status);

//     if(this.status == 200 && this.readyState==4){
//         //Response Hazır
//         console.log(this.responseText);
//     }
    
// }



//readyState 3 oldugunda calisir
xhr.onprogress=function(){
    console.log("Processing......");
}

//readyState 4 oldugu anda calisir
xhr.onload=function(){

    if(this.status==200){
        document.getElementById("ajax").textContent=this.responseText;
    }

}


xhr.open("GET","example.txt",true);//true Asenkron

xhr.send();








})