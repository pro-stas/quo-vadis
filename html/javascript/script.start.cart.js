localStorage.setItem("title","Quo Vadis 🛞🪑🏚️");

var Add = function() {
    window.location.replace("index.start.cart.add.html");
}

var Start = function() {
    window.location.replace(localStorage.getItem("last-page"));
}

var Home = function() {
    if (confirm("Czy jesteś pewien że chcesz wrócić na początek? Twója próba przejścia zostanie usunięta.")) {
        window.location.replace("index.home.html");
    }
}

var Achievements = function () {
    window.location.replace("index.achievements.html");
}