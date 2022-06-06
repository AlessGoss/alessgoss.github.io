var buttons;
var containers;
var topnav;
var originalDocumentTitle;
window.onload = function () {
  buttons = document.getElementsByClassName("button");
  containers = document.getElementsByClassName("container");
  topnav = document.getElementsByClassName("topnav");
  overlay = document.getElementsByClassName("overlay");

  if (
    window.location.hostname == "localhost" ||
    window.location.hostname == "127.0.0.1"
  ) {
    originalDocumentTitle = document.title;
    document.title = "[LOCAL] " + document.title;
  }
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

    var l = overlay.length;
    for (i = 0; i < l; i++) {
      overlay[i].classList.add("overlay--light-mode");
    }
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

    var l = overlay.length;
    for (i = 0; i < l; i++) {
      overlay[i].classList.remove("overlay--light-mode");
    }
  }
}

function showOverlay(overlayId, showOverlay) {
  var overlay = document.getElementById(overlayId);

  if (showOverlay) {
    if (overlay.classList.contains("overlay--hide"))
      overlay.classList.remove("overlay--hide");
    overlay.classList.add("overlay--show");
  } else {
    if (overlay.classList.contains("overlay--show")) {
      overlay.classList.remove("overlay--show");
      overlay.classList.add("overlay--hide");
    }
  }
}

console.log("Do you intend to run some JavaScript?");

function yes() {
  console.log("Nice. :)");
}

function no() {
  console.log("Then, I wonder what you're doing here. :/");
}
