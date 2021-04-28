//Session storage - key ve value


const deleteBtn=document.querySelector(".delete");
const insertBtn=document.querySelector(".insert");
const clearBtn=document.querySelector(".clear");

const txtKey=document.getElementById("txtKey");
const txtValue=document.getElementById("txtValue");
const deleteKey=document.getElementById("deleteKey");


insertBtn.addEventListener("click",addItem);
deleteBtn.addEventListener("click",deleteItem);
clearBtn.addEventListener("click",clearItem)

function addItem(key){
    //session ekleme
 sessionStorage.setItem(txtKey.value,txtValue.value);
 //aynı key'e karşılık gelen session'a tekrar ekleme yapılırsa deger güncellenir
}


function deleteItem(key){
//session silme
sessionStorage.removeItem(deleteKey.value);

}


function clearItem(key){
//sesssion silme
sessionStorage.clear();

}