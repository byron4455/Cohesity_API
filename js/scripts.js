
var generateBtn = document.getElementById('generateSP');


userNameCred = [];
userPassCred = [];
userClusterCred = [];

const submitLogin = function() {
    userName = document.getElementById("inputUser").value;
    userNameCred.push(userName);
    userPass = document.getElementById("inputPassword").value;
    userPassCred.push(userPass);
    userCluster = document.getElementById("inputCluster").value;
    userClusterCred.push(userCluster);
    console.log(userNameCred);
    console.log(userClusterCred);
    console.log(userPassCred);
    
};

generateBtn.addEventListener('click', submitLogin);



const getToken = async () => {
    const response = await fetch("https://" + userClusterCred + "/irisservices/api/v1/public/accessTokens" , {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: {
            "domain": "Local",
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