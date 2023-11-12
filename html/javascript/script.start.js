localStorage.setItem("title","Quo Vadis 🛣️🛞🪑");

var Fork = function() {
    window.location.replace("index.fork.html");
}

var Cart = function() {
    localStorage.setItem("last-page",window.location.href)
    window.location.replace("index.start.cart.html");
}

var Home = function() {
    if (confirm("Czy jesteś pewien że chcesz wrócić na początek? Twója próba przejścia zostanie usunięta.")) {
        window.location.replace("index.home.html");
    }
}

var Achievements = function () {
    localStorage.setItem("last-page",window.location.href)
    window.location.replace("index.achievements.html");
}