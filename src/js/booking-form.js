const bookingFormOpenBtn = document.querySelector(".js-nav-booking");
const bookingFormOverlayEl = document.querySelector(".js-booking-form");
const bookingFormEl = document.querySelector(".booking-form");
const bookingFormCloseBtnEl = document.querySelector(
  ".js-booking-form__close-button"
);

function handleOpenBookingForm() {
  bookingFormOverlayEl.classList.remove("booking-form-is-hide");
}

function handleCloseBookingForm() {
  bookingFormOverlayEl.classList.add("booking-form-is-hide");
}

bookingFormOpenBtn.addEventListener("click", handleOpenBookingForm);
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

const data = {
  date: "",
  time: "",
  name: "",
  tel: "",
  total: "",
  booking: "",
};

bookingFormEl.addEventListener("submit", (e) => {
  e.preventDefault();

  data.date = bookingFormEl.elements.date.value;
  data.time = bookingFormEl.elements.time.value;
  data.name = bookingFormEl.elements.name.value;
  data.tel = bookingFormEl.elements.tel.value;
  data.total = bookingFormEl.elements.total.value;
  data.booking = new Date();

  bookingFormEl.reset();

  console.log(data);

  return data;
});
