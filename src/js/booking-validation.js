const dateInputEl = document.querySelector(".js-date-input");
const timeInputEl = document.querySelector(".js-time-input");
const nameInputEl = document.querySelector(".js-name-input");
const telInputEl = document.querySelector(".js-tel-input");

const date = new Date();

const year = date.getFullYear();
let month = date.getMonth() + 1;
let day = date.getDate();
let hours = date.getHours();
let minutes = date.getMinutes();

const dateInputValidation = () => {
  if (month < 10) {
    month = "0" + month;
  }

  if (day < 10) {
    day = "0" + day;
  }

  if (hours > 21) {
    day += 1;
  }

  const currentDate = `${year}-${month}-${day}`;

  dateInputEl.min = currentDate;
  dateInputEl.value = currentDate;
};

dateInputValidation();

const timeInputValidation = () => {
  let currentTime = `${hours}:${minutes}`;

  if (hours > 21) {
    currentTime = `09:00`;
  }

  timeInputEl.value = currentTime;
};

timeInputValidation();
