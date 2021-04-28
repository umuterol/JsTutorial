const filterInput=document.getElementById("filter");


//text inputuna odaklanıldığında
filterInput.onfocus=function(){
    console.log("naber");
}

//diğer yöntem
filterInput.addEventListener("focus",
function(){
    console.log("yontem 2 naber");
}
)

//obje bilgisi ile
filterInput.addEventListener("focus",
function(e){
    console.log(e);
    //event tipi
    console.log(e.type);
    //event'in nerede oluştuğu
    console.log(e.target);

    console.log(e.target.type);
    console.log(e.target.className="testClass");

    
    


    console.log("yontem 2 naber");
    
}
)


const todoForm=document.querySelector("#todoForm");

todoForm.addEventListener("submit",submitForm);
function submitForm(e){
console.log("submit eventi");


//eventin default özelliklerini engelliyor
e.preventDefault();
}







