console.log("Your index.js file is loaded correctly!");

var x = document.getElementById("hover");
x.addEventListener("mouseover", myFunction);

function myFunction() {
  document.getElementById("expand").style.fontSize = "50px";
  console.log("You hovered on My UX Skills")
}

var y = document.getElementById("mouseover");
y.addEventListener("mouseover", mySecondFunction);

function mySecondFunction() {
  document.getElementById("grow").style.fontSize = "60px";
  console.log("You hovered on My Work")
}