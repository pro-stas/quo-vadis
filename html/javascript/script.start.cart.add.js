localStorage.setItem("title","Quo Vadis 👁️‍🗨️🖥️💲");

var Travel = function() {
    window.location.replace("index.start.cart.add.travel.html");
}

var Start = function () {
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

let vid
vid = document.getElementById("add"); 
var number;
number = 10;
const skip = document.querySelector('#continue');
var timer;


vid.play();
if (number == 10) {
    document.getElementById("num").innerHTML = "🔟"; 
}

    timer = setInterval(() => {
        number--;
        switch (number) {
            case 10:
                vid.play();
                document.getElementById("num").innerHTML = "🔟";
                break;
            
            case 9:
                document.getElementById("num").innerHTML = "9️⃣";
                break;
        
            case 8:
                document.getElementById("num").innerHTML = "8️⃣";
                break;
    
            case 7:
                document.getElementById("num").innerHTML = "7️⃣";
                break;

            case 6:
                document.getElementById("num").innerHTML = "6️⃣";
                break;

            case 5:
                document.getElementById("num").innerHTML = "5️⃣";
                break;

            case 4:
                document.getElementById("num").innerHTML = "4️⃣";
                break;

            case 3:
                document.getElementById("num").innerHTML = "3️⃣";
                break;

            case 2:
                document.getElementById("num").innerHTML = "2️⃣";
                break;

            case 1:
                document.getElementById("num").innerHTML = "1️⃣";
                break;
            default:
                skip.style.visibility = "visible";
                document.getElementById("wait").innerHTML = "";
                document.getElementById("num").innerHTML = "";
                break;
        }
    }, 1500);

