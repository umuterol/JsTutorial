//Mapler Key(Anahtar) - Value(Deger)


// let myMap=new Map();
// console.log(myMap);

// const key1="Umut";
// const key2={a:10,b:20};
// const key3=()=>-1;


// //set

// myMap.set(key1,"String Deger");
// myMap.set(key2,"Object Literal deger");
// myMap.set(key3,"function deger");


// //get

// console.log(myMap.get(key1));
// console.log(myMap.get(key2));
// console.log(myMap.get(key3));

// console.log(myMap);



//map boyutu

// console.log(myMap.size);




// const cities=new Map();

// cities.set("Ankara",5);
// cities.set("İstanbul",15);
// cities.set("İzmir",4);

// //For Each

// cities.forEach(function(value,key){
//     console.log(key,value);
// });


//for of

// for(let [key,value] of cities){
//     console.log(key,value);
// }


// //Map Keys
// for(let key of cities.keys()){
//     console.log(key);
// }


// //Map Values
// for(let value of cities.values()){
//     console.log(value);
// }


// //Arraylerden map oluşturma
// const array=[ ["key1","value1"] , ["key2","value2"] ];
// const lastMap=new Map(array);

// console.log(lastMap);




//Map'lerden array oluşturma

const cities=new Map();

cities.set("Ankara",5);
cities.set("İstanbul",15);
cities.set("İzmir",4);

const array=Array.from(cities);
console.log(array);


