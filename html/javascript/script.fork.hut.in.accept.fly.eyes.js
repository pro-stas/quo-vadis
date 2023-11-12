var Die = function() {
    localStorage.setItem("died","Wleciałeś w wieżę. Nie lata się z zamkniętymi oczami.");
    window.location.replace("index.died.html");
}



var seconds = 8;

var timer = setInterval(() => {
    seconds--;
    console.log()
    if (seconds <= 0) {
        Die();
    }
}, 1000);