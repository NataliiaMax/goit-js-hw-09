import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const btnStart = document.querySelector('button');
const daysRef = document.querySelector('[data-days]');
const hoursRef = document.querySelector('[data-hours]');
const minutesRef = document.querySelector('[data-minutes]');
const secondsRef = document.querySelector('[data-seconds]');

let now = Date.now();
let timerId = null;

btnStart.setAttribute('disabled', false);
btnStart.addEventListener('click', onClickBtn);

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,

  onClose(selectedDates) {
    selectedDates.forEach(selectedDate => {
      let date = selectedDate.getTime();
      if (now - date > 0) {
        Notiflix.Notify.info('Please choose a date in the future');
      } else {
        btnStart.removeAttribute('disabled');
      }
    });
  },
};

const calendar = flatpickr('#datetime-picker', options);

function onClickBtn() {
  timer.start();
}

const timer = {
  start() {
    timerId = setInterval(() => { 
        const ms = calendar.selectedDates[0] - Date.now();
    if (
        //  ms <= 0)
        daysRef.innerHTML === '00' &&
        hoursRef.innerHTML === '00' &&
        minutesRef.innerHTML === '00' &&
        secondsRef.innerHTML === '01')
       {
        clearInterval(timerId);
        btnStart.setAttribute('disabled', false);
        Notiflix.Notify.info('Time is over');
    }
      const { days, hours, minutes, seconds } = convertMs(ms);
      daysRef.innerHTML = days;
      hoursRef.innerHTML = hours;
      minutesRef.innerHTML = minutes;
      secondsRef.innerHTML = seconds;
    }, 1000);
  },
};

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}
