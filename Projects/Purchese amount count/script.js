const form = document.getElementById("budget-form");
const description = document.getElementById("description");
const amount = document.getElementById("amount");
const type = document.getElementById("type");
const budgetDisplay = document.getElementById("total-budget");

let totalAmount = 0;

function addBudget(event) {
  event.preventDefault();

  if (!description.value || !amount.value) {
    alert("Please provide description and amount");
    return;
  }

  if (type.value === "income") {
    totalAmount = totalAmount + Number(amount.value);
  } else {
    totalAmount = totalAmount - Math.abs(Number(amount.value));
  }
  budgetDisplay.textContent = totalAmount;
}
