var buttons;
var containers;
var topnav;
window.onload = function () {
  buttons = document.getElementsByClassName("button");
  containers = document.getElementsByClassName("container");
  topnav = document.getElementsByClassName("topnav");
};
var lightModeSet;
function lightMode(bool) {
  var light = bool;
  if (light) {
    var l = buttons.length;
    for (i = 0; i < l; i++) {
      buttons[i].classList.add("button-light");
    }

    var l = containers.length;
    for (i = 0; i < l; i++) {
      containers[i].classList.add("container-light");
    }

    var l = topnav.length;
    for (i = 0; i < l; i++) {
      topnav[i].classList.add("topnav-light");
    }

    document.body.style.background = "#eee";
    document.body.style.color = "#000";
    lightModeSet = true;
    document.getElementById("toggleThemeBtn").innerHTML =
      '<i class="fas fa-moon"></i> (Dark mode)';
    document
      .getElementById("toggleThemeBtn")
      .setAttribute("onclick", "lightMode(false)");
  } else {
    var l = buttons.length;
    for (i = 0; i < l; i++) {
      buttons[i].classList.remove("button-light");
    }

    var l = containers.length;
    for (i = 0; i < l; i++) {
      containers[i].classList.remove("container-light");
    }

    var l = topnav.length;
    for (i = 0; i < l; i++) {
      topnav[i].classList.remove("topnav-light");
    }

    document.body.style.background = "#111";
    document.body.style.color = "#fff";
    lightModeSet = false;
    toggleThemeBtn.innerHTML = '<i class="fas fa-sun"></i> (Light mode)';
    toggleThemeBtn.setAttribute("onclick", "lightMode(true)");
  }
}
