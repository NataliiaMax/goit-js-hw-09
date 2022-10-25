import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

btnStart = document.querySelector('button');

let now = Date.now();
console.log(now);

const selectedDates = [];

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
      }
      btnStart !== 'disabled';
    });
  },
};

flatpickr('#datetime-picker', options);

btnStart.addEventListener('click', onClickBtn);

function onClickBtn() {
    timerId = setInterval(() => {
        let ms = date - now;
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
        };
    }, 1000);

    selectedDates.forEach(selectedDate => {
        if (selectedDate.getTime() - now <= 0)
        {
            clearInterval(timerId)
            }
    })
};

function addLeadingZero(value) { padStart() };


