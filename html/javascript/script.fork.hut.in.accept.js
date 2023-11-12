var Fly = function() {
    window.location.replace("index.fork.hut.in.accept.fly.html");
}

var seconds = 2;

var timer = setInterval(() => {
    seconds--;
    console.log()
    if (seconds <= 0) {
        Fly();
    }
}, 1000);