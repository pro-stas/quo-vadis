localStorage.setItem("title","Quo Vadis 🏠");

if (localStorage.getItem(achievements)==undefined) {
    localStorage.setItem("achievements",'[]');
}

var Start = function() {
    window.location.replace("index.start.html");
}

var Credits = function() {
    window.location.replace("index.credits.html");
}

var Achievements = function () {
    localStorage.setItem("last-page",window.location.href)
    window.location.replace("index.achievements.html");
}