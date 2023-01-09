const helloWorld = "Hello World";

let i = 0;

function typeText() {
    if (i < helloWorld.length) {
        document.getElementById("hello-world").innerHTML += helloWorld.charAt(i);
        i++;
        setTimeout(typeText, 100);
    }
}
typeText();

let isVisible = true;
setInterval(function(){
    if(isVisible){
        document.getElementById("underscore").style.visibility = "hidden";
    isVisible = false;
    } else {
        document.getElementById("underscore").style.visibility = "visible";
        isVisible = true;
    }
}, 500); 