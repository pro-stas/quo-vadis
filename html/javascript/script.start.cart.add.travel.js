localStorage.setItem("title","Quo Vadis 🚗🛞🌍");

var Won = function() {
    localStorage.setItem("died","won")
    localStorage.setItem("won","Przejechałeś cały świat. Mam nadzieje, że znałeś angielski")
    window.location.replace("index.died.html");
}

var Home = function() {
    if (confirm("Czy jesteś pewien że chcesz wrócić na początek? Twója próba przejścia zostanie usunięta.")) {
        window.location.replace("index.home.html");
    }
}

var Achievements = function () {
    window.location.replace("index.achievements.html");
}

const cont = document.querySelector('.paragrapth');
const video = document.querySelector('#add');
var vid;
vid = document.getElementById("add"); 
var seconds = 47;
var timer;

vid.play();
    
    clearInterval(timer);
    timer = setInterval(() => {
        seconds--;
        if (seconds <= 0) {
            Won();
        }
        console.log(seconds);
    }, 1000);
