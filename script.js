var originalDocumentTitle;
window.onload = function () {
  overlay = document.getElementsByClassName("overlay");

  if (
    window.location.hostname == "localhost" ||
    window.location.hostname == "127.0.0.1"
  ) {
    originalDocumentTitle = document.title;
    document.title = "[LOCAL] " + document.title;
  }
};

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
