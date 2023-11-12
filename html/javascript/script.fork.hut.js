var speach;

if ('speechSynthesis' in window) {
    var msg;
    var voices;

    speach = true;
    msg = new SpeechSynthesisUtterance();
    voices = window.speechSynthesis.getVoices();
    msg.voice = voices[10]; 
    msg.volume = 0.7; // From 0 to 1
    msg.rate = 2; // From 0.1 to 10
    msg.pitch = 0.5; // From 0 to 2
    msg.lang = 'la';
    

} else {
    speach = false;
    alert("Ta przeglądarka nie wspiera mówienia tekstu");
}

const number = document.querySelector('#timer .countdown #number');

var countdown = 6;
var full = true;
var title = 'Quo Vadis ⌛🔜🛖';
// Update the count down every 1 second

var ForkHutIn = function() {
    window.location.replace("index.fork.hut.in.html");
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


if (full) {
    title = 'Quo Vadis ⏳🔜🛖';
    full = false;
  } else {
    title = 'Quo Vadis ⌛🔜🛖';
    full = true;
  }

  document.querySelector('title').textContent = title;


  countdown = countdown - 1;
    
  if (countdown < 0) {
    localStorage.setItem("died","Ktoś cię zobaczył, więc krasnodziej cię zabił");
    window.location.replace("index.died.html");
  }

  switch (countdown) {
    case 5:
        document.getElementById("number").innerHTML = "<p>quinque</p>";
        document.getElementById("tooltipnumber").innerHTML = "pięć";
        document.getElementById("clock").innerHTML = "🕑";
        number.style.width = '810px';
        number.style.backgroundColor = 'chartreuse';
        if (speach) {
            msg.text = "quinque";
            msg.rate = 1;
            window.speechSynthesis.speak(msg);
        }
    break;
    
    case 4:
        document.getElementById("number").innerHTML = "<p>quattuor</p>";
        document.getElementById("tooltipnumber").innerHTML = "cztery";
        document.getElementById("clock").innerHTML = "🕓";
        number.style.width = '648px';
        number.style.backgroundColor = 'yellowgreen';
        if (speach) {
            msg.text = "quattuor";
            msg.rate = 1.5;
            window.speechSynthesis.speak(msg);
        }
    break;

    case 3:
        document.getElementById("number").innerHTML = "<p>tres</p>";
        document.getElementById("tooltipnumber").innerHTML = "trzy";
        document.getElementById("clock").innerHTML = "🕕";
        number.style.width = '486px';
        number.style.backgroundColor = 'yellow';
        if (speach) {
            msg.text = "tres";
            msg.rate = 1.1;
            window.speechSynthesis.speak(msg);
        }
    break;

    case 2:
        document.getElementById("number").innerHTML = "<p>duo</p>";
        document.getElementById("tooltipnumber").innerHTML = "dwa";
        document.getElementById("clock").innerHTML = "🕗";
        number.style.width = '324px';
        number.style.backgroundColor = 'orange';
        if (speach) {
            msg.text = "duo";
            msg.rate = 1;
            window.speechSynthesis.speak(msg);
        }
    break;

    case 1:
        document.getElementById("number").innerHTML = "<p>unum</p>";
        document.getElementById("tooltipnumber").innerHTML = "jeden";
        document.getElementById("clock").innerHTML = "🕙";
        number.style.width = '162px';
        number.style.backgroundColor = 'red';
        if (speach) {
            msg.text = "unum";
            msg.rate = 1.2;
            window.speechSynthesis.speak(msg);
        }
    break;
    
    default:
        document.getElementById("number").innerHTML = "<p>nimium sero!!!</p>";
        document.getElementById("text").innerHTML = "Ktoś ciebie zobaczył";
        document.getElementById("tooltipnumber").innerHTML = "za późno!!!";
        document.getElementById("clock").innerHTML = "⏰";
        number.style.width = '810px';
        number.style.backgroundColor = 'black';
        number.style.color = 'white';

        if (speach) {
            msg.text = "nimium sero";
            msg.rate = 1;
            msg.volume = 1;
            msg.pitch = 0.5; // From 0 to 2
            window.speechSynthesis.speak(msg);
        }
    break;
  }

var timer = setInterval(function() {

  if (full) {
    title = 'Quo Vadis ⏳🔜🛖';
    full = false;
  } else {
    title = 'Quo Vadis ⌛🔜🛖';
    full = true;
  }

  document.querySelector('title').textContent = title;


  countdown = countdown - 1;
    
  if (countdown < 0) {
    localStorage.setItem("died","Ktoś cię zobaczył, więc krasnodziej cię zabił");
    window.location.replace("index.died.html");
  }

  switch (countdown) {
    case 5:
        document.getElementById("number").innerHTML = "<p>quinque</p>";
        document.getElementById("tooltipnumber").innerHTML = "pięć";
        document.getElementById("clock").innerHTML = "🕑";
        number.style.width = '810px';
        number.style.backgroundColor = 'chartreuse';
        if (speach) {
            msg.text = "quinque";
            msg.rate = 1;
            window.speechSynthesis.speak(msg);
        }
    break;
    
    case 4:
        document.getElementById("number").innerHTML = "<p>quattuor</p>";
        document.getElementById("tooltipnumber").innerHTML = "cztery";
        document.getElementById("clock").innerHTML = "🕓";
        number.style.width = '648px';
        number.style.backgroundColor = 'yellowgreen';
        if (speach) {
            msg.text = "quattuor";
            msg.rate = 1.5;
            window.speechSynthesis.speak(msg);
        }
    break;

    case 3:
        document.getElementById("number").innerHTML = "<p>tres</p>";
        document.getElementById("tooltipnumber").innerHTML = "trzy";
        document.getElementById("clock").innerHTML = "🕕";
        number.style.width = '486px';
        number.style.backgroundColor = 'yellow';
        if (speach) {
            msg.text = "tres";
            msg.rate = 1.1;
            window.speechSynthesis.speak(msg);
        }
    break;

    case 2:
        document.getElementById("number").innerHTML = "<p>duo</p>";
        document.getElementById("tooltipnumber").innerHTML = "dwa";
        document.getElementById("clock").innerHTML = "🕗";
        number.style.width = '324px';
        number.style.backgroundColor = 'orange';
        if (speach) {
            msg.text = "duo";
            msg.rate = 1;
            window.speechSynthesis.speak(msg);
        }
    break;

    case 1:
        document.getElementById("number").innerHTML = "<p>unum</p>";
        document.getElementById("tooltipnumber").innerHTML = "jeden";
        document.getElementById("clock").innerHTML = "🕙";
        number.style.width = '162px';
        number.style.backgroundColor = 'red';
        if (speach) {
            msg.text = "unum";
            msg.rate = 1.2;
            window.speechSynthesis.speak(msg);
        }
    break;
    
    default:
        document.getElementById("number").innerHTML = "<p>nimium sero!!!</p>";
        document.getElementById("text").innerHTML = "Ktoś ciebie zobaczył";
        document.getElementById("tooltipnumber").innerHTML = "za późno!!!";
        document.getElementById("clock").innerHTML = "⏰";
        number.style.width = '810px';
        number.style.backgroundColor = 'black';
        number.style.color = 'white';

        if (speach) {
            msg.text = "nimium sero";
            msg.rate = 1;
            msg.volume = 1;
            msg.pitch = 0.5; // From 0 to 2
            window.speechSynthesis.speak(msg);
        }
    break;
  }
  



}, 1100);