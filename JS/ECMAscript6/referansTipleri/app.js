// let a="umut";
// let b="umut";

// if(a===b){
//     console.log("eşit");
// }

// let array1=[1,2,3,4,5];
// let array2=[1,2,3,4,5];

// if(array1===array2){
//     console.log("eşit");
// }
// else{
//     console.log("eşit değil");
// }






// let myMap=new Map();
// myMap.set("ADANA",1);
// myMap.set({name:"umut"},"umut can erol");

// //"ADANA" STRİNG primity deger oldugundan içindekiler kıyaslanıyor 
// //ve degeri bulup getiriyor.
// console.log(myMap.get("ADANA"));

// //{name:"umut"} object (referans veri tipi olduğundan)
// //adresler kıyaslanıyor ve bu veriyi getiremiyor
// console.log(myMap.get({name:"umut"}));


// const myObj={
//     name:"erol"
// }
// myMap.set(myObj,"obje");
// //keyi burada const myObj degiskenimiz ile olusturup
// //oyle sorguladımızda gelir cunku referansları aynı
// console.log(myMap.get(myObj));



let obj={
    name:"umut"
};
let obj2={
    name:"umut"
};

console.log(JSON.stringify(obj));
console.log(JSON.stringify(obj2));

if(JSON.stringify(obj) === JSON.stringify(obj2)){
    console.log("eşit");
}
else{
    console.log("eşit değil");
}