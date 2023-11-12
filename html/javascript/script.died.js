

if ( !( ((localStorage.getItem("achievement")) == undefined) || ((localStorage.getItem("achievement")) == undefined) ) ) {
    var achievements = [];
    achievements = localStorage.getItem("achievements");
    achievements = JSON.parse(achievements)
    if ( ( !(achievements.includes( JSON.parse(localStorage.getItem("achievement")) ))) ) {
        achievements.push(JSON.parse(localStorage.getItem("achievement")));
        achievements = JSON.stringify(achievements);
        localStorage.setItem("achievements",achievements);
    }
    localStorage.removeItem("achievement");

}


if (localStorage.getItem("died")=="won") {
    var title;
    document.getElementById("tooltip").innerHTML = '<h1>Vincis!!!</h1><span class="tooltiptext">Wygrałeś!!!</span>';
    document.getElementById("text").innerHTML = '<a onclick="Home()">ZAGRAJ</a> jeszcze raz!';
    title = 'Quo Vadis 🏁🏆';
    document.querySelector('title').textContent = title;

    alert(localStorage.getItem("won"));
    localStorage.removeItem("won");

} else {
    alert(localStorage.getItem("died"));
}

localStorage.removeItem("died");

var Home = function() {
    window.location.replace("index.home.html");
}

var Achievements = function () {
    localStorage.setItem("last-page",window.location.href)
    window.location.replace("index.achievements.html");
}