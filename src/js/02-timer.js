import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const inputDate = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('button[data-start]');
const daysField = document.querySelector('[data-days]');
const hoursField = document.querySelector('[data-hours]');
const minutesField = document.querySelector('[data-minutes]');
const secondsField = document.querySelector('[data-seconds]');

startBtn.addEventListener('click', onStart);
startBtn.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    onCloseInput(selectedDates);
  },
};

const fp = flatpickr(inputDate, options);

let timerId = null;

function onStart() {
  const selectedDate = fp.selectedDates[0];
  inputDate.disabled = true;
  startBtn.disabled = true;

  timerId = setInterval(() => {
    const currentDate = Date.now();
    const currentTime = selectedDate - currentDate;
    updateClockFace(convertMs(currentTime));

    if (currentTime <= 0) {
      clearInterval(timerId);
      return;
    }
  }, 1000);
}

function onCloseInput(selectedDates) {
  if (selectedDates[0] > Date.now()) {
    startBtn.disabled = false;
  } else {
    window.alert('Please choose a date in the future');
  }
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function updateClockFace({ days, hours, minutes, seconds }) {
  daysField.textContent = addLeadingZero(days);
  hoursField.textContent = addLeadingZero(hours);
  minutesField.textContent = addLeadingZero(minutes);
  secondsField.textContent = addLeadingZero(seconds);
}
