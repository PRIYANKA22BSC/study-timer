let timer;
let isPaused = false;
let timeLeft = 25 * 60; 

const display = document.getElementById('timer-display');
const strtBtn = document.getElementById('strt-btn');
const pauseBtn = document.getElementById('pause-btn');
const resetBtn = document.getElementById('reset-btn');

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes < 10 ? '0' + minutes : minutes}:${remainingSeconds < 10 ? '0' + remainingSeconds : remainingSeconds}`;
}

function strtTimer() {
    if (isPaused) {
        isPaused = false;
    } else {
        timer = setInterval(() => {
            if (timeLeft > 0) {
                timeLeft--;
                display.textContent = formatTime(timeLeft);
            } else {
                clearInterval(timer);
                alert("Time's up!");
            }
        }, 1000);
    }
    strtBtn.disabled = true;  
    pauseBtn.disabled = false;
    resetBtn.disabled = false; 
}

function pauseTimer() {
    clearInterval(timer);
    isPaused = true;
    strtBtn.disabled = flase;  
    pauseBtn.disabled = true;   
}

function resetTimer() {
    clearInterval(timer);
    timeLeft = 25 * 60; 
    display.textContent = formatTime(timeLeft);
    strtBtn.disabled = false; 
    pauseBtn.disabled = true;  
    resetBtn.disabled = true;  
}

strtBtn.addEventListener('click', strtTimer);
pauseBtn.addEventListener('click', pauseTimer);
resetBtn.addEventListener('click', resetTimer);

pauseBtn.disabled = true;  
resetBtn.disabled = true;
