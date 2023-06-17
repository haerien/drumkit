function playSound(event){
    const audio = document.querySelector(`audio[data-key="${event.code}"]`);
    const key = document.querySelector(`.key[data-key="${event.code}"]`);  
    const header = document.querySelector("h1");
    if(!audio) return;
    audio.currentTime = 0; //rewind to the start to play a key without waiting
    audio.play();
    key.classList.add("playing");//adds transition animation
    header.innerText = "";
}

function removeTransition(event){
    if(event.propertyName !== "transform") return;
    this.classList.remove("playing"); //removes transition animation
}


const keys = document.querySelectorAll(".key");
keys.forEach(key => key.addEventListener("transitionend",removeTransition));
window.addEventListener("keydown", playSound);


