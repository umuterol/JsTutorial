
// function Test(){
//     this.name="umut";
// }

// const test= new Test();
// console.log(test);

// console.log(typeof test);






// function Obj2(year){
//     this.year=year;
//     }
    

// function Obj1(name){
//     this.name=name;
// }
// Obj1.prototype.test=function(){
//     console.log("test");
// }
// Obj2.prototype.age=function(){
//     console.log("Obj2 function");
// }
// Obj1.prototype=Object.create(Obj2.prototype);

// const n1=new Obj1("umut");
// const n2=new Obj1("umut erol");


// // console.log(n1);
// // console.log(n2);

// // console.log(n1);





// console.log(n1);








// function ClsX(x){
//     this.x=x;
// }
// function ClsY(y){
//     this.y=y;
// }
// ClsY.prototype.merhabaY=function(){
//     console.log("merhaba Y");
// }
// ClsX.prototype=Object.create(ClsY.prototype);
// ClsX.prototype.merhabaX=function (){
//    console.log("merhaba X");
// }

// const nX=new ClsX(5);
// console.log(nX);

// nX.merhabaX();








// // ECMAscript6 ONCESİ

// function Arac(name,speed=0){
// this.speed=speed;
// this.name=name;
// }
// Arac.prototype.setSpeed=function(speed){
//     this.speed=speed;
// }
// Arac.prototype.getSpeed=function (){
//     return this.speed;
// }
// console.log(new Arac());


// const arac1=new Arac("Audi",200);
// console.log(arac1.getSpeed());

// arac1.setSpeed(240);
// console.log(arac1.getSpeed());

// // ECMAscript6 ONCESİ Kalıtım

// function Ucak(name,speed){
//     Arac.call(this,name,speed);
// }
// Ucak.prototype=Object.create(Arac.prototype);
// Ucak.prototype.kalk=function (){
//     console.log("ucak kalkısa hazırlanıyor");
// }

// const u=new Ucak("F16",2000);
// console.log(u.name,u.getSpeed());

// console.log(u);










//Ecmascript6 Sonrası

class Arac{
    constructor(name,speed=0){
        this.name=name;
        this.speed=speed;
    }
    
     setSpeed(speed) {
        this.speed=speed;
    }
    
    getSpeed = () => this.speed;


}


class Ucak extends Arac {
    constructor(name,speed){
      super(name,speed);
    }
    kalk(){
        console.log("kalkışa hazır");
    }
}


// const testObje=new Arac("test");
// console.log(testObje);
// testObje.setSpeed(400);
// console.log(testObje.getSpeed());


const u=new Ucak("F16",2500);
console.log(u);
u.kalk();
console.log(u.getSpeed())
