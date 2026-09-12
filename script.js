function checkEligibility() {
  let income = document.getElementById("income").value;
  let expenses = document.getElementById("expenses").value;
  let savings = income - expenses;

  if (savings > 20000) {
    document.getElementById("eligibilityResult").innerText = "✅ You are eligible for a home loan!";
  } else {
    document.getElementById("eligibilityResult").innerText = "❌ Your savings are too low for eligibility.";
  }
}

function calculateEMI() {
  let loanAmount = document.getElementById("loanAmount").value;
  let interestRate = document.getElementById("interestRate").value / 100 / 12;
  let loanTenure = document.getElementById("loanTenure").value * 12;

  let emi = (loanAmount * interestRate * Math.pow(1 + interestRate, loanTenure)) /
            (Math.pow(1 + interestRate, loanTenure) - 1);

  document.getElementById("emiResult").innerText = "Your EMI is ₹" + emi.toFixed(2);
}
