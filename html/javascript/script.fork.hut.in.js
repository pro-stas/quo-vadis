localStorage.setItem("title","Quo Vadis ➡️🛖🧙‍♂️");

var Accept = function() {
    window.location.replace("index.fork.hut.in.accept.html");
}

var Ask = function() {
    window.location.replace("index.fork.hut.in.ask.html");
}

var Policeman = function() {
    window.location.replace("index.fork.hut.in.policeman.html");
}

var Home = function() {
    if (confirm("Czy jesteś pewien że chcesz wrócić na początek? Twója próba przejścia zostanie usunięta.")) {
        window.location.replace("index.home.html");
    }
}

var Achievements = function () {
    window.location.replace("index.achievements.html");
}