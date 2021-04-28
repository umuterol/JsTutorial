// function getData(data){// Promise Objesi Döndüren Fonksiyon

//     return new Promise(function(resolve,reject){

//         setTimeout(() => {

//             resolve("Olumlu Sonuc");

//         }, 10000);

//     });

// }

// console.log(getData("Merhaba"));










class tPromise {

    constructor(fonk) {


        fonk(this.tamam.bind(this), this.no.bind(this));



    }

    tamam(cevap) {

        this.cevap = cevap;
    }

    no(hata) {
        this.hata = hata;
    }


    kontrol(newFunction) {
        let cevap, hata;
        if (!this.hata) {
            cevap = newFunction(this.cevap);
        }
        else {
            cevap = null;
        }

        hata = this.hata;

        return new tPromise(function (tamam, no) {
            tamam(cevap);
            no(hata);
        })

    }

    yakala(newFunction) {
        if (this.hata) {
            newFunction(this.hata);
        }

    }

}







const test = new tPromise(function (tamam, no) {

    tamam("başarılı");

});





test.kontrol((response) =>response+"2")
.kontrol((response) => console.log(response))
    .yakala((err) => console.log(err));














// class SozVer{
//     constructor(fonk){ // constructorla callback fonksiyon aliyorum
//         fonk(this.cozmek.bind(this), // bu foknsiyonun parametresine resolve ve
//              this.reddetmek.bind(this)); // reject fonksiyonlarini ekleyib, calistiriyorum
//              // bind yazmamin sebebi this'i objenin kendisi olarak gorup, cevap ve hata
//              // propertileri eklemesi
//     }
//     cozmek(cevap){
//         this.cevap = cevap // burada objeye cevap adli property ekliyorum
//     }
//     reddetmek(hata){
//         this.hata = hata // burada objeye hata adli property ekliyorum
//     }

//     sonra(yeniFonk){ // then metodunun benzerini olusturuyorum
//         // Asagida eger hata yoksa yani reject edilmediyse then parametresine
//         // yazilan callback'i calistir ve return edilen degeri al diyorum. Hata var ise null al
//         const yeniCevap = !this.hata ? yeniFonk(this.cevap) : null
//         const hata = this.hata // this'ler karismasin diye hatayi burada aliyorum
//         return new SozVer(function(cozmek, reddetmek){ // kendimin tanimladigi sozveri (promis'i) return ediyorum
//             cozmek(yeniCevap);
//             reddetmek(hata);
//         })
//     }
//     yakala(yeniFonk){ // catch metodunun benzerini olusturuyorum
//         if (this.hata) // eger hata varsa callback'a hata'yi parametre olarak verip calistiriyorum
//             yeniFonk(this.hata);
//     }
// }




// const test=new SozVer(function(resolve,reject){

//     resolve("Herşey Yolunda");
//     reject("Sıkıntı Büyük");

// });



// test.sonra(function (response) {
//     console.log(response);
// }).yakala((err)=>console.log(err));