//sayfa yüklenmesi bitince oluşan event
document.addEventListener("DOMContentLoaded",load);
function load(e){
    console.log("sayfa yüklendi");
}




//input elementleri
let filter=document.getElementById("filter");

//focus
//filter.addEventListener("focus",run);

//focustan çıkınca
//filter.addEventListener("blur",run);

//paste
//filter.addEventListener("paste",run);

//copy
//filter.addEventListener("copy",run)


//cut
//filter.addEventListener("cut",run)

//select
filter.addEventListener("select",run)

function run(e){
 console.log(e.type);
}