
//window object
let value;
value=document;
value=document.all;
value=document.all.length;
value=document.all[0];
value=document.all[document.all.length-1];




// const elements=document.all;
// for(let i=0; i < document.all.length ; i++)
// console.log(elements[i]);





//foreach kullanılmıyor kullanmak için array'e çevirilmeli
// let elements=document.all;
// console.log(elements);

// elements.array.forEach(
// function(f){console.log(f);}
// );




//array'e çevirme
// let collections=Array.from(document.all);
// console.log(typeof collections);

// collections.forEach(
//     function(key){
//         console.log(key);
//     }
// )


value=document.all[6];
value=document.body;
value=document.head;
value=document.location;
value=document.location.hostname;
value=document.location.port;

//veya
value=document.URL;

value=document.characterSet;


console.log(value);