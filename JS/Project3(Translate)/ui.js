function UI() {

    this.outputImage = document.getElementById("outputImage");
    this.outputLangueage = document.getElementById("outputLanguage");
    this.outputWord = document.getElementById("outputWord");

    this.langueageList = document.getElementById("language");

}



UI.prototype.changeImage = function () {

    this.outputImage.src = `images/${this.langueageList.value}.png`;

}


UI.prototype.changeLanguage = function () {
   
  this.outputLangueage.innerHTML=this.langueageList.options[this.langueageList.selectedIndex].innerHTML;

}


UI.prototype.displayTranslate=function(word){
    this.outputWord.innerHTML=word;
}