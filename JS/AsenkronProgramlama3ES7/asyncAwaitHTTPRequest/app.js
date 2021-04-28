class Request {


    async get(url) {


        const response = await fetch(url);
        //response.json promise döner
        const data = await response.json();

        return data;


    }

    async post(url, data) {

        const response = await fetch(url, {

            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        });

        const value = await response.json();


        return value;

    }


    async put(url, data) {

        const response = await fetch(url, {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        });

        const value=await response.json();

        console.log(response)
        
        return value;

    }



    async delete(url){
        
        const response=await fetch(url,{method:'DELETE'});
        const data=await response.json();

        return data;


        //testt
//  const response=await fetch(url,{method:'DELETE'});
//     return response.json()
//     .then(()=>"başarılı")
//     .catch(()=>"başarısız")


    
    }


}



const request = new Request();

// request.get("https://jsonplaceholder.typicode.com/albums")
//     .then(response => console.log(response))



// request.post("https://jsonplaceholder.typicode.com/albums",{
//     userId:1,
//     title:"UMUT EROL"
// })
// .then(response=>console.log(response))
// .catch(err=>console.error(err));



// request.put("https://jsonplaceholder.typicode.com/albums/15",{
//     userId: 15,
//     title: "Umut"
// })
// .then(response=>console.log(response))
// .catch(err=>console.error(err))




request.delete("https://jsonplaceholder.typicode.com/albums/15")
.then(response=>console.log(response))
.catch(err=>console.log(err));


