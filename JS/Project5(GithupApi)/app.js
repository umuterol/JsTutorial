const searchForm = document.getElementById("github-form");
const githubName = document.getElementById("githubname");
const clearBtn=document.getElementById("clear-last-users");

const github = new Github();
const ui = new UI();



addEventListeners();
function addEventListeners() {

    searchForm.addEventListener("submit", showUsers);
    document.addEventListener("DOMContentLoaded",()=>{
        ui.showLastUsers();
    })
    clearBtn.addEventListener("click",()=>{
        ui.clearAllSearchedUsersFromUI();
        Storage.clearAllSearchedUsersFromStorage();
    })

}




function showUsers(e) {
    
    github.getUser(githubName.value.trim())
        .then(response => {
            if (response.user.message === "Not Found") {
                console.log("Not Found");
                ui.showError("Kullanıcı Bulunamadı");
            }
            else {
                ui.showUserInfo(response.user);
                ui.showRepoInfo(response.repo);
                Storage.addUserToStorage(response.user);
            }

        })
        .catch(err => console.log(err));

    ui.clearInput();    
    e.preventDefault();

}





