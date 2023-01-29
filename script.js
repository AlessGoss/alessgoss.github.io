if (
  window.location.hostname == "localhost" ||
  window.location.hostname == "127.0.0.1"
) {
  var originalDocumentTitle = document.title;
  document.title = "[LOCAL] " + document.title;
}
