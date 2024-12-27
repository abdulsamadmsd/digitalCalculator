const hrEl = document.getElementById("hour");
const miEl = document.getElementById("minute");
const seEl = document.getElementById("seconds");
const ampmEL = document.getElementById("ampm");
function updateClock() {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "AM";
    if (h >= 12) {
        ampm = "PM";
    }
    if (h > 12) {
        h = h - 12;
    }

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;
    hrEl.innerText = h;
    miEl.innerText = m;
    seEl.innerText = s;
    ampmEL.innerText = ampm;
}
setInterval(updateClock, 1000);
updateClock();
