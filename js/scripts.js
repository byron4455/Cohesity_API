
// var generateBtn = document.getElementById('generateSP');


// userNameCred = [];
// userPassCred = [];
// userClusterCred = [];

// const submitLogin = function() {
//     userName = document.getElementById("inputUser").value;
//     userNameCred.push(userName);
//     userPass = document.getElementById("inputPassword").value;
//     userPassCred.push(userPass);
//     userCluster = document.getElementById("inputCluster").value;
//     userClusterCred.push(userCluster);
//     console.log(userNameCred);
//     console.log(userClusterCred);
//     console.log(userPassCred);
//     if (userName === '') {
//         window.alert("Please enter valid username")
//     } else {
//         window.location.href = "./dashboard.html"
//     }
// };

// generateBtn.addEventListener('click', submitLogin);

userNameCred = localStorage.getItem('username');
console.log('user: ' + userNameCred);

userClusterCred = localStorage.getItem('cluster');
console.log('cluster: ' + userClusterCred)

userPassCred = localStorage.getItem('password');
console.log('password: ' + userPassCred);
const getToken = async () => {
    const response = await fetch("https://" + userClusterCred + "/irisservices/api/v1/public/accessTokens" , {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: {
            "domain": "sre.cohesity.com",
            "password": userPassCred,
            "username": userNameCred
        }
    })
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data);
    })

}