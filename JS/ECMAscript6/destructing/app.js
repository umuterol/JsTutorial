

// let number1,number2;

// arr=[100,200,300,400];

// number1=arr[0];
// number2=arr[1];



//Destructing

// [number1,number2]=arr;
// const [number1,number2]=arr;

// console.log(number1,number2);


const numbers={
    a:10,
    b:20,
    c:30,
    d:40,
    e:50
}
//objelerde aynı isimleri vererek alabilirz
// const {a,c,e}=numbers;
// console.log(a,c,e);



//Function Destructing

// const getLangs=()=>["Python","Java","C++"];

// const [lang1,lang2,lang3]=getLangs();

// console.log(lang1,lang2,lang3);






//Obje

const person={
    name:"umut can",
    year:1993,
    salary:3000,
    showInfos : () => console.log("bilgiler gosteriliyor.....")
}

const {name:isim,year:yil,salary:maas,showInfos:bilgileriGoster}=person;

console.log(isim,yil,maas);
bilgileriGoster();
