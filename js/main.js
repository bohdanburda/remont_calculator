const formNumber = document.querySelector(".form__number");
const formRange = document.querySelector(".form__range");
const totalPriceElement = document.querySelector(".form__total-price");
const formCheckbox = document.querySelector(".form__checkbox");

const costOne = document.querySelector(".form__item-input-3000");
const costTwo = document.querySelector(".form__item-input-6000");
const costThree = document.querySelector(".form__item-input-9000");

const inputs = document.querySelectorAll("input");

const popUpOneBtn = document.querySelectorAll(".form__item-btn-one");
const popUpTwoBtn = document.querySelectorAll(".form__item-btn-two");
const popUpThreeBtn = document.querySelectorAll(".form__item-btn-three");

const popUpOne = document.querySelector(".pop-up-one");
const popUpTwo = document.querySelector(".pop-up-two");
const popUpThree = document.querySelector(".pop-up-three");

// const popUp = document.querySelector(".pop-up");

const closeOne = document.querySelector(".pop-up__close-one");
const closeTwo = document.querySelector(".pop-up__close-two");
const closeThree = document.querySelector(".pop-up__close-three");

formNumber.addEventListener("input", function () {
  formRange.value = formNumber.value;
});
formRange.addEventListener("input", function () {
  formNumber.value = formRange.value;
});

function calculate() {
  let totalPrice = parseInt(formNumber.value);
  let price;

  if (costOne.checked) {
    totalPrice = 3000 * totalPrice;
  }
  if (costTwo.checked) {
    totalPrice = 6000 * totalPrice;
  }
  if (costThree.checked) {
    totalPrice = 9000 * totalPrice;
  }

  if (formCheckbox.checked && formNumber.value >= 100) {
    price = (totalPrice / 100) * 20;
    totalPrice = totalPrice - price;
    document.getElementsByClassName(
      "form__total-price--checkbox"
    )[0].style.display = "flex";
  }
  if (!formCheckbox.checked) {
    document.getElementsByClassName(
      "form__total-price--checkbox"
    )[0].style.display = "none";
  }
  if (formNumber.value < 100) {
    document.getElementsByClassName(
      "form__total-price--checkbox"
    )[0].style.display = "none";
  }

  const formatter = new Intl.NumberFormat("ua");
  totalPriceElement.innerText = formatter.format(totalPrice);
}
calculate();

for (const input of inputs) {
  input.addEventListener("input", function () {
    calculate();
  });
}

popUpOneBtn.forEach((btn) => {
  btn.onclick = () => {
    popUpOne.style.display = "grid";
  };
});
popUpTwoBtn.forEach((btn) => {
  btn.onclick = () => {
    popUpTwo.style.display = "grid";
  };
});
popUpThreeBtn.forEach((btn) => {
  btn.onclick = () => {
    popUpThree.style.display = "grid";
  };
});

// close.onclick = () => {
//   popUpOne.style.display = "none";
// };

closeOne.addEventListener("click", () => closeModalOne());
function closeModalOne() {
  popUpOne.style.display = "none";
}
window.addEventListener("click", (e) => {
  if (e.target === popUpOne) {
    closeModalOne();
  }
});

closeTwo.addEventListener("click", () => closeModalTwo());
function closeModalTwo() {
  popUpTwo.style.display = "none";
}
window.addEventListener("click", (e) => {
  if (e.target === popUpTwo) {
    closeModalTwo();
  }
});

closeThree.addEventListener("click", () => closeModalThree());
function closeModalThree() {
  popUpThree.style.display = "none";
}
window.addEventListener("click", (e) => {
  if (e.target === popUpThree) {
    closeModalThree();
  }
});
