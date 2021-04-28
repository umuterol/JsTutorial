const translate = new Translate();
const ui = new UI();



addEventListeners();
function addEventListeners() {

	document.getElementById("translate-form").addEventListener("submit", submitForm);
	document.getElementById("language").onchange = () => {
		ui.changeImage();
		ui.changeLanguage();
	}

}


function submitForm(e) {

	translate.setTranslate(document.getElementById("word").value, document.getElementById("language").value);
	translate.translateWord(response => ui.displayTranslate(response));

	e.preventDefault();
}





