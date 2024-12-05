let timer;
let isPaused = false;
let timeLeft = 25 * 60; 

const timerDisplay = document.getElementById('timer-display');
const startBtn = document.getElementById('start-btn');
const pauseBtn = document.getElementById('pause-btn');
const stopBtn = document.getElementById('stop-btn');

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes < 10 ? '0' + minutes : minutes}:${remainingSeconds < 10 ? '0' + remainingSeconds : remainingSeconds}`;
}

function startTimer() {
    if (isPaused) {
        isPaused = false;
    } else {
        timer = setInterval(() => {
            if (timeLeft > 0) {
                timeLeft--;
                timerDisplay.textContent = formatTime(timeLeft);
            } else {
                clearInterval(timer);
                alert("Time's up!");
            }
        }, 1000);
    }
    startBtn.disabled = true;  
    pauseBtn.disabled = false;
    stopBtn.disabled = false; 
}

function pauseTimer() {
    clearInterval(timer);
    isPaused = true;
    startBtn.disabled = false;  // Enable start button to resume
    pauseBtn.disabled = true;   // Disable pause button
}

function stopTimer() {
    clearInterval(timer);
    timeLeft = 25 * 60;  // Reset time to 25 minutes
    timerDisplay.textContent = formatTime(timeLeft);
    startBtn.disabled = false;  // Enable start button
    pauseBtn.disabled = true;   // Disable pause button
    stopBtn.disabled = true;    // Disable stop button
}

startBtn.addEventListener('click', startTimer);
pauseBtn.addEventListener('click', pauseTimer);
stopBtn.addEventListener('click', stopTimer);

pauseBtn.disabled = true;  // Disable pause button initially
stopBtn.disabled = true;   // Disable stop button initially
