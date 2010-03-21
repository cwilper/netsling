function netsling(event) {
    if (event.ctrlKey && (event.charCode == 32 || event.charCode == 110)) {
        window.openDialog("chrome://netsling/content/netsling.xul", "netsling", "chrome,centerscreen");
    }
}

var prefs = Components.classes["@mozilla.org/preferences-service;1"].
                    getService(Components.interfaces.nsIPrefService).
                    getBranch("extensions.netsling.");

var firstRun = prefs.getBoolPref("firstRun");
if (firstRun) {
    alert("Thanks for installing NetSling!\n\nRemember: The hotkey is CTRL-SPACE, or CTRL-N for Mac.");
    prefs.setBoolPref("firstRun", false);
}

var urls = new Array();

window.addEventListener("keypress", netsling, false);
