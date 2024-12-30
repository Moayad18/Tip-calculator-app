let bill = document.querySelector(".bill-section .bill input");
let tips = document.querySelectorAll(".tip-buttons button");
let customTip = document.querySelector(".tip-buttons input");
let numPeople = document.querySelector(".bill-section .people input");
let tipAmount = document.querySelector(".tip-amount p.dollar");
let totalAmount = document.querySelector(".total-amount p.dollar");
let reset = document.querySelector(".results-section button");
let msgError = document.querySelector(".bill-section .people span");
let billValue, peopleValue, tipValue, totalValue, tip, total;

bill.addEventListener("input", function () {
  billValue = parseFloat(bill.value);
  reset.classList.add("show");
  calculateTip();
});

tips.forEach(function (tip) {
  tip.addEventListener("click", function () {
    tips.forEach(function (tip) {
      tip.classList.remove("active");
    });
    tip.classList.add("active");
    tipValue = parseFloat(tip.textContent) / 100;
    calculateTip();
  });
});
customTip.addEventListener("click", function () {
  tips.forEach(function (tip) {
    tip.classList.remove("active");
  });
  customTip.addEventListener("input", function () {
    tipValue = parseFloat(customTip.value) / 100;
    calculateTip();
  });
});
numPeople.addEventListener("input", function () {
  peopleValue = parseFloat(numPeople.value);
  if (peopleValue === 0) {
    numPeople.classList.add("error");
    msgError.classList.add("error");
  } else {
    numPeople.classList.remove("error");
    msgError.classList.remove("error");
  }
  calculateTip();
});

reset.addEventListener("click", function () {
  bill.value = "";
  customTip.value = "";
  numPeople.value = "";
  tipAmount.textContent = "$0.00";
  totalAmount.textContent = "$0.00";
  reset.classList.remove("show");
  tips.forEach(function (tip) {
    tip.classList.remove("active");
  });
});
function calculateTip() {
  if (billValue && tipValue && peopleValue) {
    let tip = (billValue * tipValue) / peopleValue;
    let total = (billValue * tipValue + billValue) / peopleValue;
    tipAmount.textContent = "$" + tip.toFixed(2);
    totalAmount.textContent = "$" + total.toFixed(2);
  }
}
