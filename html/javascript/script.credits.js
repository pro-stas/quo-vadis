var Home = function() {
    window.location.replace("index.home.html");
}

var Achievements = function () {
    localStorage.setItem("last-page",window.location.href)
    window.location.replace("index.achievements.html");
}