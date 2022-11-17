let outputEl = document.querySelector("#output");

//Die aktuelle Uhrzeit ins HTML schreiben
function startTime() {
    date1 = new Date().toLocaleTimeString("de-DE");
    outputEl.textContent = date1;
}
setInterval(startTime, 1000);


