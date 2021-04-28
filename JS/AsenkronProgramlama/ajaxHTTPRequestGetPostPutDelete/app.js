// Ajax , callback,http request

class Request {

    constructor() {
        this.xhr = new XMLHttpRequest();
    }



    // Get Request

    get(url, callback) {
        this.xhr.open("GET", url);



        //YÖNTEM 1

        // const temp = this;
        // //Burada this xhr ı gösterir
        // //XMLHttpRequest fonksiyonu oldugu icin
        // this.xhr.onload = function () {
        //     if (temp.xhr.status == 200) {
        //         console.log(temp.xhr.responseText);
        //     }
        // }


        //YÖNTEM 2

        //Burada this xhr ı gösterir
        //XMLHttpRequest fonksiyonu oldugu icin
        // this.xhr.onload = function () {
        //     if (this.status == 200) {
        //         console.log(this.responseText);
        //     }
        // }




        //YÖNTEM 3

        //Burada this xhr ı gösterir
        //XMLHttpRequest fonksiyonu oldugu icin
        // this.xhr.onload = function () {
        //     if (this.xhr.status == 200) {
        //         console.log(this.xhr.responseText);
        //     }
        // }.bind(this);//get fonksiyonun içinde olduğumuz için this Request objemizi gösterir






        //Burada this xhr ı gösterir
        //XMLHttpRequest fonksiyonu oldugu icin
        this.xhr.onload = () => { // Arrow function otomatik bind yaptığı için this Request oluyor
            if (this.xhr.status == 200) {
                callback(this.xhr.responseText, true);
            }
            else {
                callback(null, false)
            }
        }





        this.xhr.send();



    }



    //Post Request

    post(url, data, callback) {

        this.xhr.open("POST", url);
        this.xhr.setRequestHeader("content-type", "application/json");

        this.xhr.onload = function () {
            if (this.status == 201) { //201 post başarılı
                callback(null, this.responseText);
            }
            else {
                callback(this.statusText, null);
            }

        }

        //json to string
        this.xhr.send(JSON.stringify(data));


    }






    //Put Request

    put(url, data, callback) {

        this.xhr.open("PUT", url);
        this.xhr.setRequestHeader("content-type", "application/json");

        this.xhr.onload = function () {
            if (this.status == 200) {
                callback(null, this.responseText);
            }
            else {
                callback(this.statusText, null);
            }

        }

        //json to string
        this.xhr.send(JSON.stringify(data));


    }





    //Delete Request

    delete(url, callback) {
        this.xhr.open("DELETE", url);




        this.xhr.onload = function () {
            if (this.status == 200) {
                callback(this.responseText, true);
            }
            else {
                callback(null, false)
            }
        }





        this.xhr.send();



    }




}



const request = new Request();

// GET

// request.get("https://jsonplaceholder.typicode.com/albums", function (response, err) {

//     if (err) {
//         console.log(response);
//     }
//     else {
//         console.log(request.xhr.status);
//     }


// });



// POST

// request.post("https://jsonplaceholder.typicode.com/albums",{userId:15,title:"deneme"},function(err,response){
//      if(err === null){
//          console.log(response);
//      }
//      else{
//         console.log(err);
//      }
// })





// PUT

// request.put("https://jsonplaceholder.typicode.com/albums/1", { userId: 7, title: "umut" }, function (err, response) {
//     if (err === null) {
//         console.log(response);
//     }
//     else {
//         console.log(err);
//     }
// })







//DELETE

// request.delete("https://jsonplaceholder.typicode.com/albums/10001231231", function (response, err) {

//     if (err) {
//         console.log(response);
//     }
//     else {
//         console.log(request.xhr.status);
//     }


// });







