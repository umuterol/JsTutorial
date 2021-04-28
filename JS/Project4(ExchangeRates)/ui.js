class UI {

  constructor() {

    this.firstCurrency = document.getElementById("firstCurrency");
    this.secondCurrency = document.getElementById("secondCurrency");

    this.outputFirst = document.getElementById("outputFirst");
    this.outputSecond = document.getElementById("outputSecond");
    this.outputResult = document.getElementById("outputResult");

    this.amount = document.getElementById("amount");

  }


  displayFirstCurrency() {

    this.outputFirst.innerHTML = this.firstCurrency.value;

  }


  displaySecondCurrency() {

    this.outputSecond.innerHTML = this.secondCurrency.value;

  }

  displayResult(total) {

    this.outputResult.value = total;

  }


}





