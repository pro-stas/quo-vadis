var Die = function() {
    localStorage.setItem("died","Umarłeś na zawał. Następnym razem przeczytaj etykitkę PRZED wypiciem.");
    window.location.replace("index.died.html");
}

var seconds = 15;

var timer = setInterval(() => {
    seconds--;
    console.log()
    if (seconds <= 0) {
        Die();
    }
}, 1000);