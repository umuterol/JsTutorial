class Currency {

    constructor() {

        this.xhr = new XMLHttpRequest();
        this.amount = null;
        this.firstCurrency = null;
        this.secondCurreny = null;

    }


    setFirstCurrency(firstCurrency) {

        this.firstCurrency = firstCurrency;

    }


    setSecondCurrency(secondCurrency) {

        this.secondCurrency = secondCurrency;

    }

    setAmount(amount) {
        this.amount = amount;
    }

    result() {


        return new Promise((resolve, reject) => {

            fetch(`https://api.exchangeratesapi.io/latest?base=${this.firstCurrency}`)
                .then(response => response.json())
                .then(data => {

                    const rate = data.rates[this.secondCurrency];
                    const total = Number(this.amount) * rate; //amout inputtan alınan değer string onu number'a çeviriyoruz
                    resolve(total);

                })
                .catch(err=>reject(err));


        })

    }





}






// Currency.prototype.getResult = function (callback) {

//     this.xhr.open("GET", `https://api.exchangeratesapi.io/latest?base=${this.firstCurrency}`);


//     this.xhr.onload = () => {//arrow funcyion otomatik this'i bind eder

//         if (this.xhr.status == 200) {

//             const rate = JSON.parse(this.xhr.responseText).rates[this.secondCurreny];

//             callback(rate);

//         }


//     }



//     this.xhr.send();

// }

