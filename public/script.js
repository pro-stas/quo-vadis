var userId;
var userRef;
var userEmail;

function changeToRegister() {
    document.getElementById("log").style.visibility = "hidden";
    document.getElementById("register").style.visibility = "hidden";
    document.getElementById("reg").style.visibility = "visible";
}

function changeToLogin() {
    document.getElementById("log").style.visibility = "visible";
    document.getElementById("register").style.visibility = "visible";
    document.getElementById("reg").style.visibility = "hidden";
}

function ImportLocalStorage() {
    
}

function ExportLocalStorage() {
    
}

var tick = setInterval(() => {
    


}, 1);

document.addEventListener("DOMContentLoaded", event => {
    
    const app = firebase.app();
    console.log(app);


})