

function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    console.log(key);
    if(!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add("playing");
    
}


function removeTransition(ev) {
    if(ev.propertyName !== "transform") return;
    ev.target.classList.remove("playing");
    
}

function init() {
    const keys = Array.from(document.querySelectorAll(".key"));
    console.log("KEYS : ", keys);
    keys.forEach((key) => key.addEventListener("transitionend", removeTransition))
    window.addEventListener("keydown", playSound);
}
init();

