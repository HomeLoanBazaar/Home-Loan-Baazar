function checkEligibility() {
  let income = Number(document.getElementById("income").value);
  let expenses = Number(document.getElementById("expenses").value);
  let mobileNumber = document.getElementById("mobileNumber").value.trim();
  let savings = income - expenses;

  if (!mobileNumber || mobileNumber.length < 10) {
    document.getElementById("eligibilityResult").innerText = "📞 Please enter a valid mobile number to continue.";
    return;
  }

  if (savings > 20000) {
    document.getElementById("eligibilityResult").innerText = "✅ You are eligible for a home loan!";
    showContactPopup();
  } else {
    document.getElementById("eligibilityResult").innerText = "❌ Your savings are too low for eligibility.";
  }
}

function showContactPopup() {
  const popup = document.getElementById("contactPopup");
  if (popup) {
    popup.style.display = "flex";
  }
}

function closeContactPopup() {
  const popup = document.getElementById("contactPopup");
  if (popup) {
    popup.style.display = "none";
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
