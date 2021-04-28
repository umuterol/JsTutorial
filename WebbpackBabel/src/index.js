//CommonJs Modulleri

// const app=require("module1"); node_modules icinde arar

// const app=require("./module1"); // burada arar

// console.log(app);







//ES6 Modules

//tek tek almak istersek

// import {test,Person,employee} from "./module1";

// Person.Test();
// test();
// console.log(employee.name);



//hepsini almak istersek

// import * as module1 from "./module1";

// console.log(module1);




//export default

// import {Deneme} from "./module1"; //default degilken

// import Deneme from "./module1"; //Default

// Deneme.deneme();




//default ile baska isim ilede cagrilabilir
import test from "./module1";
console.log(test);