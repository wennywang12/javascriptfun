var myP = document.getElementById("myP");
var myDiv = document.getElementById("myDiv");
var myP2 = document.getElementById("myP2");
var myDiv2 = document.getElementById("myDiv2");

myP.addEventListener("click", function(){ myDiv.style.background = "lightblue" });

myP.addEventListener("click", changeText);

function changeText() {
    myP.textContent = "Surprise!"
};

myDiv2.addEventListener("mouseover", function(){ myDiv2.style.background = "darkkhaki" });

myDiv2.addEventListener("mouseover", changeText2);

function changeText2() {
    myDiv2.textContent = "I can change the color"
};
