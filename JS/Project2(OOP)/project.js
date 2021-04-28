const form = document.getElementById("film-form");
const titleElement =document.getElementById("title");
const directorElement =document.getElementById("director");
const urlElement =document.getElementById("url");
const tbodyElement=document.getElementById("films");
const clearButton=document.querySelector("#clear-films")

//UI objesini Başlatma
const ui = new UI();

//Storage Objesi Üret
const storage=new Storage();

//Tüm eventleri yükleme

eventListeners();
function eventListeners() {
    form.addEventListener("submit", addFilm);
    document.addEventListener("DOMContentLoaded",loadAllFilmsUI);
    //film silme
    tbodyElement.addEventListener("click",deleteFilms);
    //tüm filmleri silme
    clearButton.addEventListener("click",clearFilms);

}




function clearFilms(){
    if(confirm("emin misin ?")){
    //UI
    ui.clearFilmsUI();
    //Local Storage
    storage.clearFilmsStorage();
    }
}


function deleteFilms(e){
    /*
    <tr>
        <td><img src="${newFilm.url}" class="img-fluid img-thumbnail"></td>
            <td>${newFilm.title}</td>
            <td>${newFilm.director}</td>
            <td><a href="#" id="delete-film" class="btn btn-danger">Filmi Sil</a></td>
                                              </tr>
 */
    if(e.target.id==="delete-film"){
        //UI ' dan Silme
        ui.deleteFilmFromUI(e.target.parentElement.parentElement);
        //LocalStorage ' dan silme
        storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);

        ui.displayMessages("silme başarılı","success");
    }
    
}






//sayfa yüklendiğinde
function loadAllFilmsUI(){
    const films=storage.getFilmsFromStorage();
    films.forEach((film)=>ui.addFilmToUI(film))
}



function addFilm(e) {

    const title = titleElement.value;
    const director = directorElement.value;
    const url = urlElement.value;

    if (title === "" || director === "" || url === ""){
        //hata
        ui.displayMessages("Tüm alanları doldurun...","danger");
    }
    else{
        //yeni film
        const newFilm=new Film(title,director,url);
        
        ui.addFilmToUI(newFilm);//arayüze film ekleme
        storage.addFilmToStorage(newFilm);
        ui.displayMessages("Film eklendi...","success");
    }

    ui.clearInputs([directorElement,titleElement,urlElement]);

        e.preventDefault();
}




document.load