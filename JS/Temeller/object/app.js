
const programmer={

    name:"umut can",
    age:"20",
    email:"waapsitee@gmail.com",
    langs:"php,c++,c#,java",

    address :{
        city:"adana",
        street:"özal"
    },
    work : function(){
        console.log("programcı çalışıyor");
    }
}
let value;


value=programmer;

value=programmer.email;

value=programmer["email"];

value=programmer.address.city;

programmer.work();






console.log(value);