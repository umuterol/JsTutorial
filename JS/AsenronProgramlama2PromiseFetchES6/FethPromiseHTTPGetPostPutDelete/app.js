class Request {


    get(url) {

        return new Promise((resolve, reject) => {

            fetch(url)
                .then(response => response.json())
                .then(data => resolve(data))
                .catch(err => reject(err));

        })

    }


    post(url, data) {
        return new Promise((resolve, reject) => {

            fetch(url, {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            })
                .then(response => response.json())
                .then(data => resolve(data))
                .catch(err => reject(err));

        })
    }



    put(url, data) {

        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'PUT',
                body: JSON.stringify(data),
                headers: {
                    "content-type": "application/json; charset=UTF-8"
                }
            })
            .then(response=>response.json())
            .then(data=>resolve(data))
            .catch(err=>reject(err));
        })


    }



    delete(url){

        return new Promise((resolve,reject)=>{

            fetch(url,{
                method: 'DELETE'
            })
            .then(response=>resolve("Silme Başarılı " + response.json()))
            .catch(err=>reject(err+" Silme Başarısız"));

        })

    }

}





const request = new Request();



//GET
// request.get("https://jsonplaceholder.typicode.com/albums")
// .then(albums=>{
//     console.log(albums);
// })
// .catch(err=>console.log(arr));





//POST
// request.post("https://jsonplaceholder.typicode.com/albums", { userId: 1, title: "Umut Can Erol" })
//     .then(album => console.log(album))
//     .catch(err => console.log(err));




//PUT
// request.put("https://jsonplaceholder.typicode.com/albums/15",{userId:1,title:"Umut"})
// .then(album=>console.log(album))
// .catch(err=>console.error(err));












//DELETE
request.delete("https://jsonplaceholder.typicode.com/albums/1")
.then(album=>console.log(album))
.catch(err=>console.log(err));