//butona tıklandığında
// document.getElementById("change").addEventListener("click", change);



// function change() {

//     const xhr = new XMLHttpRequest();

//     xhr.open("GET", "https://api.exchangeratesapi.io/latest");



//     xhr.onload = function () {
//         if (this.status == 200) {
//             const response=JSON.parse(this.responseText);
           
//             const rate= response.rates.TRY;
//             const amount=Number(document.getElementById("amount").value);
//             console.log(amount*rate);
            
//             document.getElementById("tl").value=amount*rate;

         
//         }

//     }



//     xhr.send();

// }








//inputa girildiğinde

document.getElementById("amount").addEventListener("keyup",change);

function change(e){
    
    const xhr=new XMLHttpRequest();
    xhr.open("GET","https://api.exchangeratesapi.io/latest");


    xhr.onload=function(){

        const response=JSON.parse(xhr.responseText);
        
        const rate=response.rates.TRY;
        const amount=Number(e.target.value);


        document.getElementById("tl").value=rate*amount;
    }


    xhr.send();


}

