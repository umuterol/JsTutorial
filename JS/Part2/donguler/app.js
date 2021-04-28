let person=[
{name:"umut",age:20},
{name:"umut can",age:22}
];

let names=person.map(function(i){
    return i["name"];
})

console.log(names);


let temp={
    name:"umut",
    age:20
}


for(let key in temp)
console.log(key,temp[key]);