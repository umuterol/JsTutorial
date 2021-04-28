const express = require("express");
const { accessControl } = require("./middleWare");



const users = [
    { id: 1, name: "umut", place: "Iskenderun" },
    { id: 2, name: "umut can", place: "Adana" }
]

const app = express();
const PORT = 5000;

//json request alabilmek icin
app.use(express.json());


//next gelirse devam edecek uygulama katmanli kontrol
// app.use(accessControl);


//Get Request
//localhost:5000/users
app.get("/users", (request, response, next) => {

    // //Text döner
    //response.send("<center><h1>Hello Express</h1></center>");

    //Json
    response.json(users);

})



//Get Request
//localhost:5000/users
app.get("/products", accessControl, (request, response, next) => {

    //Text döner
    response.send("<center><h1>Hello Welcome ,these are the new products</h1></center>");

});




app.post("/users", (req, res, next) => {

    users.push(req.body);
    res.json(
        {
            success: true,
            data: "Post Request"
        }
    )

})


app.put("/users/:id", (req, res, next) => {


     let id=parseInt(req.params.id);

    for (let i = 0; i < users.length; i++) {

        if (users[i].id === id) {
            users[i] = {
                ...users[i],
                ...req.body

            }
        }

    }

    res.json(
        {
            success: true,
            data: users
        }
    )

})






app.delete("/users/:id", (req, res, next) => {


   

   for (let i = 0; i < users.length; i++) {

       if (users[i].id == req.params.id) {
          users.splice(i,1);
       }

   }

   res.json(
       {
           success: true,
           data: users
       }
   )

})






app.listen(PORT, () => {
    console.log("Server Started");
})