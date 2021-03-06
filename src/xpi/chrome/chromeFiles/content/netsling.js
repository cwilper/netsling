function netsling(event) {
    if (event.ctrlKey && event.charCode == 77) {
        window.openDialog("chrome://netsling/content/netsling.xul", "netsling", "chrome,centerscreen");
    }
}

var prefs = Components.classes["@mozilla.org/preferences-service;1"].
                    getService(Components.interfaces.nsIPrefService).
                    getBranch("extensions.netsling.");

var firstRun = prefs.getBoolPref("firstRun");
if (firstRun) {
    alert("Thanks for installing NetSling!\n\nRemember: The hotkey is CTRL-n");
    prefs.setBoolPref("firstRun", false);
}

var urls = new Array();

window.addEventListener("keypress", netsling, false);
