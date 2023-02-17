/* ==========================================*/
const s = document.getElementById('seconds')
const h = document.getElementById('hours')
const m = document.getElementById('minutes')
/* ==========================================*/

setInterval(initClocker, 1000) // run this every 1 second


function initClocker() {

    /* ===========================*/
    let date = new Date()
    let seconds = date.getSeconds() / 60
    let minutes = (seconds + date.getMinutes()) / 60
    let hours = date.getHours() / 60
    /* ===========================*/

    updatePointerLocation(s, seconds)
    updatePointerLocation(h, hours)
    updatePointerLocation(m, minutes)

}

// update all pointers
function updatePointerLocation(e, r) {
    e.style.setProperty('--rotate', r * 360)
}