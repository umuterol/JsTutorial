function UI() {

}
UI.prototype.addFilmToUI = function (newFilm) {

    /*
    <tr>
    <td><img src="" class="img-fluid img-thumbnail"></td>
    <td></td>
    <td></td>
   <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
                                              </tr>
    */

    const tbodyElement = document.querySelector("#films");

    //    const img=document.createElement("img");
    //    img.src=newFilm.url;
    //    img.setAttribute("class","img-fluid img-thumbnail");
    //    img.width="250";
    //    img.height="250";

    //    const tdUrl=document.createElement("td");
    //    tdUrl.appendChild(img);


    //    const tdTitle=document.createElement("td");
    //    tdTitle.textContent=newFilm.title;

    //    const tdDirector=document.createElement("td");
    //    tdDirector.textContent=newFilm.director;
    //    console.log(tdDirector);


    //    const tr=document.createElement("tr");


    //    tr.appendChild(tdUrl);
    //    tr.appendChild(tdTitle);
    //    tr.appendChild(tdDirector);


    //    tbodyElement.appendChild(tr);



    // veya direkt
    tbodyElement.innerHTML += `

<tr>
    <td><img src="${newFilm.url}" class="img-fluid img-thumbnail"></td>
    <td>${newFilm.title}</td>
    <td>${newFilm.director}</td>
   <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
                                              </tr>

`


}

UI.prototype.clearInputs = function (inputs) {
    for (value of inputs) {
        value.value = "";
    }

}

UI.prototype.displayMessages = function (message, type) {
    const cardBody = document.querySelector(".card-body");
    //Alert divini oluşturma
    const div = document.createElement("div");
    div.className = `alert alert-${type}`;
    div.textContent = message;

    cardBody.appendChild(div);

    setTimeout(function () {
        div.remove();
    }, 2000);


    cardBody.classList.add(`alert-${type}`);
    setTimeout(function () {
        cardBody.classList.remove(`alert-${type}`)
    }, 2000);

}




UI.prototype.deleteFilmFromUI = function (element) {
element.remove();
}



UI.prototype.clearFilmsUI= function(){
    const tbodyElement = document.querySelector("#films");

    // tbodyElement.innerHTML="";
    //VEYA
    while(tbodyElement.firstElementChild !== null){
        tbodyElement.firstElementChild.remove();
    }

}