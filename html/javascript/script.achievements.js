var Home = function() {
    if (confirm("Czy jesteś pewien że chcesz wrócić na początek? Twója próba przejścia zostanie usunięta.")) {
        
        window.location.replace("index.home.html");
    }
}

var Back = function () {
    window.location.replace(localStorage.getItem("last-page"));
}