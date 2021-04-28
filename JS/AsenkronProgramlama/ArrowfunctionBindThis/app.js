const person={
    
    age:25,
    
    // tellAge : function(){

    //     //this-Person
    //     console.log(this);
    //     console.log(this.age);
    // }.bind(this)


    


    //Arrow function direkt this'i window alır.
    tellAge: ()=>{
        console.log(this);
        console.log(this.age);
    }


    //this - Window

 


}


person.tellAge();