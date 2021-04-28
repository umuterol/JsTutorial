const firstCurrency = document.getElementById("firstCurrency");
const secondCurrency = document.querySelector("#secondCurrency");
const amount = document.querySelector("#amount");
const curreny = new Currency();
const ui = new UI();


addEventListeners();
function addEventListeners() {

    amount.addEventListener("input", exchangeCurrency);



    firstCurrency.onchange = () => {

        ui.displayFirstCurrency();
        exchangeCurrency();

    }

    secondCurrency.onchange = () => {

        ui.displaySecondCurrency();
        exchangeCurrency();

    }


}



function exchangeCurrency() {


    curreny.setFirstCurrency(firstCurrency.value);
    curreny.setSecondCurrency(secondCurrency.value);
    curreny.setAmount(amount.value);


    curreny.result()
        .then(response => ui.displayResult(response))
        .catch(err => console.error(err));


}





