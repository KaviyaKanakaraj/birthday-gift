const downloadBtn = document.getElementById('download-btn');
const popup = document.getElementById('popup');
const submitBtn = document.getElementById('submit-btn');
const message = document.getElementById('message');
const dobInput = document.getElementById('dob-input');

const LOG_ENDPOINT = "https://script.google.com/macros/s/AKfycbxW50MJYfyrYYn5QWwG6kWQ_xj-9-SlVa5o8HpYlAgb_JR4U4UVhu2fAj64ws6EIARE/exec";

downloadBtn.addEventListener('click', () => {
  popup.classList.remove('hidden');
  message.textContent = "";
});

submitBtn.addEventListener('click', async () => {
  const dob = dobInput.value;
  const timestamp = new Date().toISOString();

  if (!dob) {
    message.textContent = "enter your birthday before submitting dumbass";
    return;
  }

  try {
    await fetch(LOG_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ dob, timestamp })
    });
  } catch (err) {
    console.error("Error logging data:", err);
  }

  message.textContent = "-_- i know that's not your birthday, try again.";
  dobInput.value = "";
});