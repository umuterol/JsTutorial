
var numbers=new Array(100,200,300,400,500,600,700);

var numbers=[100,200,300,400,500,600,700,80];

//Push
numbers.push(800);

//Pop
numbers.pop();

//Başa ekleme
numbers.unshift(50);

//Baştan Alma(Silme)
numbers.shift();


//Belirli indexleri silme
numbers.splice(0,2);//0 dan itibaren 2 tane sil

//Arrayi ters çevirme
numbers.reverse();


//sıralama
numbers.sort(); //sadece ilk rakamlara bakıyor

//kücükten büyüğe
numbers.sort(function(x,y){

    return x-y;
})

//büyükten küçüğe
numbers.sort(function(x,y){
    return y-x;
});

console.log(numbers);