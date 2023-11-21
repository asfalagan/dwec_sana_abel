let milisegundos = 0;
let segundos = 0;
let minutos = 0;
let totalMils = 0;
let interval;
let running = false;
    
function updateTime(){
    totalMils += 100;
    let milis = (totalMils % 1000).toFixed(0).padStart(3, '0');
    let secs = ((totalMils/1000)%60).toFixed(0).padStart(2, '0');
    let mins = ((totalMils/1000)/60).toFixed(0).padStart(2, '0');
    document.getElementById('mins').textContent = mins;
    document.getElementById('secs').textContent = secs;
    document.getElementById('milis').textContent = milis;
}

document.getElementsByClassName('start')[0]
        .addEventListener('click', e => {
            if(!running){
                interval = setInterval(updateTime, 100);
                running = true;
            }
        });
document.getElementsByClassName('stop')[0]
        .addEventListener('click', e => {
            clearInterval(interval);
            running = false;
});
document.getElementsByClassName('reset')[0]
        .addEventListener('click', e => {
            totalMils = 0;
});