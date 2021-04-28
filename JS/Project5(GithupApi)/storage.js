class Storage {



    static addUserToStorage(user) {

        const github = this.getUserFromStorage();


        // var olanı tekrar eklememek için
        github.forEach((value, index) => {

            if (value.id == user.id)
                github.splice(index, 1);

        })




        github.push(user);

        localStorage.setItem("github", JSON.stringify(github));


    }




    static getUserFromStorage() {

        let github;
        if (localStorage.getItem("github") == null) {
            return [];
        }
        else {
            return JSON.parse(localStorage.getItem("github"));
        }

    }


    static clearAllSearchedUsersFromStorage() {
        localStorage.removeItem("github");
    }


}