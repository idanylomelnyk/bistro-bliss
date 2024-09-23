const bookingFormOpenBtnEl = document.querySelector(".js-nav-booking");
const bookingFormOverlayEl = document.querySelector(".js-booking-form");
const bookingFormEl = document.querySelector(".booking-form");
const bookingFormCloseBtnEl = document.querySelector(
  ".js-booking-form__close-button"
);
const bookingFormBookBtnEl = document.querySelector(".js-booking-form__button");
const dateInputEl = document.querySelector(".js-date-input");
const timeInputEl = document.querySelector(".js-time-input");

const handleOpenBookingForm = () => {
  bookingFormOverlayEl.classList.remove("booking-form-is-hide");
};

const handleCloseBookingForm = () => {
  bookingFormOverlayEl.classList.add("booking-form-is-hide");
};

bookingFormOpenBtnEl.addEventListener("click", handleOpenBookingForm);
bookingFormCloseBtnEl.addEventListener("click", handleCloseBookingForm);

bookingFormOverlayEl.addEventListener("click", (e) => {
  if (e.currentTarget === e.target) {
    handleCloseBookingForm();
  }
});

window.addEventListener("keydown", (e) => {
  if (e.code === "Escape") {
    handleCloseBookingForm();
  }
});

bookingFormEl.addEventListener("submit", (e) => {
  e.preventDefault();

  const data = {
    date: bookingFormEl.elements.date.value,
    time: bookingFormEl.elements.time.value,
    name: bookingFormEl.elements.name.value,
    tel: bookingFormEl.elements.tel.value,
    total: bookingFormEl.elements.total.value,
    booking: new Date(),
  };

  bookingFormBookBtnEl.textContent =
    "Thank you! Your reservation is confirmed!";
  bookingFormBookBtnEl.style.backgroundColor = "#708238";

  setTimeout(() => {
    handleCloseBookingForm();
    bookingFormEl.reset();
    dateInputEl.value = dateInputEl.min;
    timeInputEl.value = "09:00";

    bookingFormBookBtnEl.textContent = "Book a table";
    bookingFormBookBtnEl.style.backgroundColor = "#ad343e";
  }, 3000);

  console.log(data);

  return data;
});
