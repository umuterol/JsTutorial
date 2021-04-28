class UI {

    constructor() {
        this.profile = document.getElementById("profile");
        this.repos = document.getElementById("repos");
        this.inputField = document.getElementById("githubname");
        this.searchCardBody = document.querySelector(".card-body");
        this.lastUsers = document.getElementById("last-users");
    }

    showUserInfo(user) {


        this.profile.innerHTML = `
        
        <div class="card card-body mb-3">
        <div class="row">
          <div class="col-md-4">
            <a href="${user.html_url}" target = "_blank">
             <img class="img-fluid mb-2" src="${user.avatar_url}"> </a>
             <hr>
             <div id="fullName"><strong>${user.name}</strong></div>
             <hr>
             <div id="bio">${user.bio}</div>
            </div>
          <div class="col-md-8">
                <button class="btn btn-secondary">
                      Takipçi  <span class="badge badge-light">${user.followers}</span>
                </button>
                <button class="btn btn-info">
                     Takip Edilen  <span class="badge badge-light">${user.following}</span>
                  </button>
                <button class="btn btn-danger">
                    Repolar  <span class="badge badge-light">${user.public_repos}</span>
                </button>
                <hr>
                <li class="list-group">
                    <li class="list-group-item borderzero">
                        <img src="images/company.png" width="30px"> <span id="company">${user.company}</span>
                        
                    </li>
                    <li class="list-group-item borderzero">
                        <img src="images/location.png" width="30px"> <span id = "location">${user.location}</a>
                        
                    </li>
                    <li class="list-group-item borderzero">
                        <img src="images/mail.png" width="30px"> <span id="mail">${user.email}</span>
                        
                    </li>
                    
                </div>
                   
                
          </div>
    </div> 

        `



    }


    showRepoInfo(repos) {

        this.repos.innerHTML = "";
        repos.forEach(repo => {

            this.repos.innerHTML += `
 <div class="mb-2 card-body">
        <div class="row">
            <div class="col-md-2">
                <a href="${repo.html_url}" target="_blank" id="repoName">${repo.name}</a>
            </div>
            <div class="col-md-6">
                <button class="btn btn-secondary">
                    Starlar <span class="badge badge-light" id="repoStar">${repo.stargazers_count}</span>
                </button>

                <button class="btn btn-info">
                    Forklar <span class="badge badge-light" id="repoFork">${repo.forks_count}</span>
                </button>

            </div>
        </div>

    </div>
    `
        })

    }


    showError(message) {

        this.profile.innerHTML = "<br> <h1 style='color:red;'> Not found users 404  :( <h1> <br>";

        const newDiv = document.createElement("div");

        newDiv.className = "alert alert-danger";
        newDiv.textContent = message;


        this.searchCardBody.appendChild(newDiv);

        let i = 9;
        let interval = setInterval(() => {
            if (i == 0) {
                newDiv.remove();
                clearInterval(interval);
            }

            newDiv.style.opacity = "0." + i--;
        }, 100);


    }


    clearInput() {
        this.inputField.value = "";

    }


    showLastUsers() {


        // <li class="list-group-item"> <h5 class="display-4">Umut Can Erol</h5>
        // a<img width="300" src="https://www.kazdagitur.com/blog/wp-content/uploads/2017/06/kazdagitur-foto.jpg"  alt="">a
        //</li> 

        const github = JSON.parse(localStorage.getItem("github"));

        github.reverse();//arrayi ters çevirdik son arananın ilk gelmesi için
        github.forEach((user) => {

            const newListItem = document.createElement("li");
            const newImg = document.createElement("img");
            const newLink = document.createElement("a");
            const newHeader = document.createElement("h5");

            newHeader.className = "display-4";
            newImg.width = "250";
            newListItem.className = "list-group-item";
            newLink.target = "_blank";




            newHeader.textContent = user.name;
            newImg.src = user.avatar_url;
            newLink.href = user.html_url;








            newLink.appendChild(newImg);

            newListItem.appendChild(newHeader);
            newListItem.appendChild(newLink);


            this.lastUsers.appendChild(newListItem);


        })


    }




    clearAllSearchedUsersFromUI() {
        while (this.lastUsers.firstChild !== null){
            this.lastUsers.firstChild.remove();
            //veya
            //this.lastUsers.removeChild(this.lastUsers.firstChild);
        }

    }




}