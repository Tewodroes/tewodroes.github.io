window.onload = eventHandler;

let animationInterval;

function eventHandler(){
    document.getElementById("start").onclick = start;
    document.getElementById("stop").onclick = stop;
    document.getElementById("fontsize").onchange = changeFontSize;   

}

let i = 0;
let interval;
let currentAnim;

function start(){          
    clearInterval(interval);
    currentAnim = document.getElementById("animation").value;
    let eachAnim = ANIMATIONS[currentAnim].split("=====\n"); 
    i==(eachAnim.length-1) ? i=0 : i++;
    document.getElementById("text-area").innerHTML = eachAnim[i];    

    let timeInterval = document.getElementById("turbo").checked ? 50:250;
    interval =  setInterval(start, timeInterval);

    document.getElementById("start").disabled = true;
    document.getElementById("stop").disabled = false;   
  
}


function stop(){
    document.getElementById("text-area").innerHTML = ANIMATIONS[currentAnim];
    clearInterval(interval);

    document.getElementById("start").disabled = false;
    document.getElementById("stop").disabled = true;
}


function changeFontSize(){
    let size = document.getElementById("fontsize").value;
    document.getElementById("text-area").style.fontSize = size;
}