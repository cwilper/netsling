function netsling(event) {
    if (event.ctrlKey && event.charCode == 32) {
        window.openDialog("chrome://netsling/content/popup.xul", "netsling", "chrome,centerscreen");
    }
}

var urls = new Array();

window.addEventListener("keypress", netsling, false);
