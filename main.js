function goBack(){
    if (window.history.length > 1) {
        window.history.back();
    } else {
        alert("Back requires previous pages in history.");
    }
}

function goForward(){
    alert("Forward requires previous pages in history.");
    window.history.forward();
}



function getBrowserInfo() {   
    let info = navigator.userAgent;
    document.getElementById("browserInfo").innerText = info;
}

function getNewTab(){
    window.open("https://www.google.com", "_blank");
}

function displayUrl(){
    let currentUrl = window.location.href;
    document.getElementById("displayUrlinfo").innerText = currentUrl;
}

function checkOnlineStatus(){
    let check = navigator.onLine;
    let statusDiv = document.getElementById("statusInfo");
    statusDiv.innerText = check ? "Online" : "Offline";
    statusDiv.className = check ? "output status-online" : "output status-offline";
}