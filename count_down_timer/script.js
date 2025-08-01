let countdownInterval;

function startCountdown() {
  clearInterval(countdownInterval);
  const target = new Date(document.getElementById("datetime").value).getTime();
  const message = document.getElementById("message");

  if (isNaN(target)) {
    message.textContent = "Please select a valid date and time.";
    return;
  }

  countdownInterval = setInterval(() => {
    const now = new Date().getTime();
    const difference = target - now;

    if (difference <= 0) {
      clearInterval(countdownInterval);
      document.getElementById("days").textContent = "00";
      document.getElementById("hours").textContent = "00";
      document.getElementById("minutes").textContent = "00";
      document.getElementById("seconds").textContent = "00";
      message.textContent = "🎉 Countdown Completed!";
      return;
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = formatTime(days);
    document.getElementById("hours").textContent = formatTime(hours);
    document.getElementById("minutes").textContent = formatTime(minutes);
    document.getElementById("seconds").textContent = formatTime(seconds);
    message.textContent = "";
  }, 1000);
}

function formatTime(time) {
  return time < 10 ? "0" + time : time;
}
