//CommonJs Modulleri
//bu sekilde sadece tek bir veri export edilir
// module.exports = function test1() {

//     console.log("test 1");
// }

// module.exports = function test2() {

//     console.log("test 2");
// }




//bu şekilde hepsi export edilir

// module.exports.test1 = function () {

//     console.log("test 1");
// }

// module.exports.test2 = function () {

//     console.log("test 2");
// }


//veya direkt objemizi biz olusturarak expor edebiliriz

// module.exports = {
//     name: "umut",
//     test1: function () {
//         console.log("Test 1");
//     },
//     Person: {
//         name: "person",
//         mail: "test@gmail.com"
//     }

// }








//ES6 Modules


export const name = "Umut";

export function test() {
    console.log("Test Fonksiyonu");
}

export class Person {
    static Test() {
        console.log("Person Test");
    }
}



export const employee = {
    name: "umut",
    age: "yas"
}



// export default class Deneme {
//     static deneme() {
//         console.log("Default Deneme");
//     }

// }


//Sonradan export etme
//default sadece 1 tane verilebilir

const denemeVal = "Deneme Degeri";

export default denemeVal;