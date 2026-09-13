function checkEligibility() {
  let clientName = document.getElementById("clientName").value.trim();
  let incomeValue = document.getElementById("income").value;
  let expensesValue = document.getElementById("expenses").value;
  let mobileNumber = document.getElementById("mobileNumber").value.trim();

  if (!clientName) {
    document.getElementById("eligibilityResult").innerText = "Please enter your name to continue.";
    return;
  }

  if (!incomeValue || !expensesValue || Number(incomeValue) <= 0 || Number(expensesValue) < 0) {
    document.getElementById("eligibilityResult").innerText = "Please enter valid income and expenses values.";
    return;
  }

  if (!mobileNumber || mobileNumber.length < 10) {
    document.getElementById("eligibilityResult").innerText = "📞 Please enter a valid mobile number to continue.";
    return;
  }

  let income = Number(incomeValue);
  let expenses = Number(expensesValue);
  let savings = income - expenses;

  if (savings >= 20000) {
    document.getElementById("eligibilityResult").innerText = "✅ You are eligible for a home loan!";
    showContactPopup();
    sendEligibilityDetailsToWhatsApp(clientName, mobileNumber);
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

function sendEligibilityDetailsToWhatsApp(clientName, mobileNumber) {
  const advisorPhone = "918885689502";
  const message = `Client Name: ${clientName}\nPhone Number: ${mobileNumber}`;
  const whatsappUrl = `https://wa.me/${advisorPhone}?text=${encodeURIComponent(message)}`;

  const whatsappLink = document.getElementById("whatsappAdvisor");
  if (whatsappLink) {
    whatsappLink.href = whatsappUrl;
  }

  try {
    const opened = window.open(whatsappUrl, "_blank");
    if (!opened) {
      window.location.href = whatsappUrl;
    }
  } catch (error) {
    window.location.href = whatsappUrl;
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
