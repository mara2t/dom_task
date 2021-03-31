const Email = document.querySelector(".email");
const Phone = document.querySelector(".phone");
const loginButton = document.querySelector(".btn-login");
const modal = document.querySelector(".modal");
const closeButton = document.querySelector(".close-btn");
const emailError = document.querySelector(".email-error");
const phoneError = document.querySelector(".phone-error");

const validEmail = (Email.onblur = () => {
  const normalizedEmail = Email.value.trim();
  if (normalizedEmail.length <= 5 || !normalizedEmail.includes("@")) {
    emailError.style.display = "block";
  }
});
Email.onfocus = () => {
  emailError.style.display = "none";
};

const validPhone = (Phone.onblur = () => {
  const normalizedPhone = Phone.value.trim();
  //console.log(normalizedPhone,typeof normalizedPhone)
  if (
    normalizedPhone.length < 8 ||
    !normalizedPhone.split("").every((el) => Number(el))
  )
    phoneError.style.display = "block";
});
Phone.onfocus = () => {
  phoneError.style.display = "none";
};
loginButton.addEventListener("click", () => {
  if (validEmail && validPhone) {
    modal.style.display = "block";
  }
});
closeButton.addEventListener("click", () => {
  modal.style.display = "none";
});
