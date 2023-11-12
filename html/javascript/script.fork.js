var ForkHut = function() {
    window.location.replace("index.fork.hut.html");
}

var ForkLeft = function() {
    window.location.replace("index.fork.left.html");
}

var ForkRight = function() {
    window.location.replace("index.fork.right.html");
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