function openPopup() {
  overlay.style.display = "block";
  popup.style.display = "block";
}

function closePopup() {
  overlay.style.display = "none";
  popup.style.display = "none";
}

function showUpsell() {
  document.getElementById("step-one").style.display = "none";
  document.getElementById("step-two").style.display = "block";
}

// Exit intent trigger
document.addEventListener("mouseout", function(e) {
  if (e.clientY < 10) {
    openPopup();
  }
});

// Delay trigger fallback
setTimeout(openPopup, 8000);

function calculateMortgage() {
  const loan = parseFloat(document.getElementById("loanAmount").value);
  const rate = parseFloat(document.getElementById("interestRate").value) / 100 / 12;
  const years = parseFloat(document.getElementById("loanTerm").value) * 12;

  if (!loan || !rate || !years) return;

  const payment =
    loan * (rate * Math.pow(1 + rate, years)) /
    (Math.pow(1 + rate, years) - 1);

  const totalPaid = payment * years;
  const interest = totalPaid - loan;

  document.getElementById("monthlyPayment").textContent =
    `$${payment.toFixed(2)}`;

  document.getElementById("totalInterest").textContent =
    `$${interest.toFixed(2)}`;
}
