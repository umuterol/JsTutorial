//function ' ların yazılışındaki yenilikler

//Arrow Function

var merhaba=()=>{
    console.log("merhaba");
}
//merhaba();


var merhaba=()=>console.log("merhaba");
//merhaba();

//tek parametre alınca () ' e gerek duymaz
var merhaba=world=>console.log(`merhaba ${world}`);
//merhaba("umut");


//tek islem oldugundan return kullanmayabiliriz
var cube=x=>{
    return  x*x*x;
}

var cube=x=>x*x*x;

console.log(cube(4));

//toplama
var toplam=(x=0,y=0)=>x+y;
console.log(toplam(3));