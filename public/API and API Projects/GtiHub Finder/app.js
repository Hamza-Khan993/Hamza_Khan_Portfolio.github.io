const github = new GitHub;

const ui = new UI;

const searchProfile = document.getElementById("searchUser");

searchProfile.addEventListener('keyup', (e) => {
    const userText = e.target.value;
    if (userText !== ''){
        
        github.getUser(userText)
        .then(data => {
            if (data.profile.message === 'Not Found') {
                //Show Alert
                ui.showAlert('User not found', 'alert alert-danger')
            } else {
                console.log(data.profile)
                //Show Profile
                ui.showProfile(data.profile)
            }
        })
    } else{
        //Clear Profile
        ui.clearProfile()
    }
})