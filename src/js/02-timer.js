import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const timerDays = document.querySelector('span[data-days]');
const timerHours = document.querySelector('span[data-hours]');
const timerMinutes = document.querySelector('span[data-minutes]');
const timerSeconds = document.querySelector('span[data-seconds]');
const startBtn = document.querySelector('button[data-start]');
localStorage.setItem('idTimer', '');
localStorage.setItem('dateSelectUser', '');

startBtn.disabled = true;

startBtn.addEventListener('click', onClick);

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  dateFormat: 'Y-m-d',

  onClose(selectedDates) {
    dateSelectUser = selectedDates[0].getTime();
    localStorage.setItem('dateSelectUser', JSON.stringify(dateSelectUser));
    const dateCurrent = new Date().getTime();
    const result = dateSelectUser - dateCurrent;

    if (result > 0) {
      startBtn.disabled = false;
      timerDays.closest('div').classList.remove('activ');
      timerHours.closest('div').classList.remove('activ');
      timerMinutes.closest('div').classList.remove('activ');
      timerSeconds.closest('div').classList.remove('activ');
    } else {
      Notiflix.Notify.failure('Please choose a date in the future');
      const idTimer = Number(localStorage.getItem('idTimer'));
      clearInterval(idTimer);
      timerDays.textContent = '00';
      timerHours.textContent = '00';
      timerMinutes.textContent = '00';
      timerSeconds.textContent = '00';
      timerDays.closest('div').classList.remove('activ');
      timerHours.closest('div').classList.remove('activ');
      timerMinutes.closest('div').classList.remove('activ');
      timerSeconds.closest('div').classList.remove('activ');
    }
  },
};

flatpickr('#datetime-picker', options);

function onClick() {
  const dateSelectUser = Number(localStorage.getItem('dateSelectUser'));

  const idTimer = setInterval(() => {
    localStorage.setItem('idTimer', JSON.stringify(idTimer));

    const dateChange = Number(localStorage.getItem('dateSelectUser'));

    const dateCurrent = new Date().getTime();
    const result = dateSelectUser - dateCurrent;

    if (result > 0 && dateSelectUser === dateChange) {
      startBtn.disabled = true;

      timerDays.textContent = convertMs(result)
        .days.toString()
        .padStart(2, '0');
      timerHours.textContent = convertMs(result)
        .hours.toString()
        .padStart(2, '0');
      timerMinutes.textContent = convertMs(result)
        .minutes.toString()
        .padStart(2, '0');
      timerSeconds.textContent = convertMs(result)
        .seconds.toString()
        .padStart(2, '0');
      timerDays.closest('div').classList.add('activ');
      timerHours.closest('div').classList.add('activ');
      timerMinutes.closest('div').classList.add('activ');
      timerSeconds.closest('div').classList.add('activ');
    } else {
      clearInterval(idTimer);
      timerDays.textContent = '00';
      timerHours.textContent = '00';
      timerMinutes.textContent = '00';
      timerSeconds.textContent = '00';
      timerDays.closest('div').classList.remove('activ');
      timerHours.closest('div').classList.remove('activ');
      timerMinutes.closest('div').classList.remove('activ');
      timerSeconds.closest('div').classList.remove('activ');
    }
  }, 1000);
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
