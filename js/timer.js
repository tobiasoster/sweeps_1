const geo = countryParam.toUpperCase();
    const data = geoContent[geo];
    document.getElementById('title').innerText = data.title;
    document.getElementById('amount').innerText = data.amount;
    document.getElementById('instruction').innerText = data.instruction;
    document.getElementById('infoBtn').innerText = data.infoBtn;
    document.getElementById('cashoutBtn').innerText = data.cashoutBtn;
 let seconds = 60;
const timerElement = document.getElementById('timer');
const interval = setInterval(() => {
  if (seconds <= 0) {
    clearInterval(interval);
    timerElement.innerText = '00:00';
    return;
  }
  seconds--;
  const mins = String(Math.floor(seconds / 60)).padStart(2, '0');
  const secs = String(seconds % 60).padStart(2, '0');
  timerElement.innerText = `${mins}:${secs}`;
}, 1000);