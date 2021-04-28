//Setler - Kümeler

const mySet=new Set();

//aynı değerler birdaha eklenmez
mySet.add(100);
mySet.add(100);
mySet.add(true);
mySet.add(false);
mySet.add(true);
mySet.add([1,2,3]);


// //Size
// console.log(mySet.size);

// const mySet2=new Set([1,1,1,1,1,1,2,2,2,2,2,3]);
// console.log(mySet2);
// console.log(mySet2.size);


// //delete
// mySet2.delete(5);//5 olmadıgından birşey silinmez
// console.log(mySet2)

// mySet2.delete(2);

// console.log(mySet2);


// //Has - Deger var mı ?
// console.log(mySet.has(false)); 
// console.log(mySet2.has(5));
// //referans oldugu icin false döner
// console.log(mySet.has([1,2,3]));



// //For Each

// mySet.forEach(function(value){
//     console.log(value);
// })



// //For Of
// for(let value of mySet){
//     console.log(value);
// }




//Setlerden Array olusturma
const array=Array.from(mySet);
console.log(array);
