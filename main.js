function playSound(event){
    const audio = document.querySelector(`audio[data-key="${event.code}"]`);
    const key = document.querySelector(`.key[data-key="${event.code}"]`);  

    if(!audio) return;
    audio.currentTime = 0; //rewind to the start to play a key without waiting
    audio.play();
    key.classList.add("playing");//adds transition animation
}

function removeTransition(event){
    if(event.propertyName !== "transform") return;
    this.classList.remove("playing"); //removes transition animation
}

function rmHeader(event){
    header.innerText = "";
}

const keys = document.querySelectorAll(".key");
keys.forEach(key => key.addEventListener("transitionend",removeTransition));
const header = document.querySelector("h1");
window.addEventListener("keydown", rmHeader, {once: true});
window.addEventListener("keydown", playSound);




