function Storage() {

}

Storage.prototype.addFilmToStorage = function (newFilm) {
    let films = this.getFilmsFromStorage();
    films.push(newFilm);
    localStorage.setItem("films", JSON.stringify(films));
}

Storage.prototype.getFilmsFromStorage = function () {
    let films;
    if (localStorage.getItem("films") === null) {
        films = [];
    }
    else {
        films = JSON.parse(localStorage.getItem("films"));
    }

    return films;

}




Storage.prototype.deleteFilmFromStorage = function (title) {

    // films=JSON.parse(localStorage.getItem("films"));
    let films = this.getFilmsFromStorage();

    films.forEach((film, index) => {
        if (film.title === title)
            films.splice(index, 1);

    })

    localStorage.setItem("films", JSON.stringify(films));


}




Storage.prototype.clearFilmsStorage = function () {
localStorage.removeItem("films");

}