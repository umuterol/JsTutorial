// //async function lar otomatik olarak promise döner
// //data promise resolve(data) diye gönderirlir.
// async function test(data) {

//     //await sadece async fonksiyonlarda kullanılır
//     //await işlem bitmeden diğer işleme geçmez
//     let promise = await new Promise((resolve, reject) => {

//         setTimeout(() => {
//             resolve("beklemeli işlem");
//             console.log("bekliyor")
//         }, 3000);

//     })


//     //await ile promise atama yaptığımız için
//     //direkt olarak resolve degeri yazdı
//     console.log(promise);

//     //promise şuan bir string ifade
//      console.log(typeof promise)






//      let promise2 = new Promise((resolve, reject) => {

//         setTimeout(() => {
//             resolve("Promise 2");
//         }, 3000);

//     })

//     //promise2 obje response string
//     let response=await promise2;
//     console.log(response);



//     return data;
// }








// test("test datası")
//     .then(response => console.log(response))
//     .catch(err => console.log(err));













// async function testPromise(data){

//     const promise=new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             if(data % 2 == 1)
//                 resolve(data);
//             else
//                 reject(new Error("is not one"));


//         }, 3000);

//     })

//     const response=await promise;

//     return response;

// }



// testPromise(7)
// .then(response=>console.log(response))
// .catch(err=>console.error(err))












async function getCurrency(url) {


    const response=await fetch(url);
    const data=await response.json();

    return data;
    


}



getCurrency("https://api.exchangeratesapi.io/latest")
.then(response=>console.log(response))
.catch(err=>console.error(err));
