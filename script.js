function checkEligibility() {
  let clientName = document.getElementById("clientName").value.trim();
  let incomeValue = document.getElementById("income").value;
  let expensesValue = document.getElementById("expenses").value;
  let mobileNumber = document.getElementById("mobileNumber").value.trim();

  if (!clientName || clientName.length < 2) {
    document.getElementById("eligibilityResult").innerText = "Please enter your name to continue.";
    return;
  }

  if (!incomeValue || !expensesValue || Number(incomeValue) <= 0 || Number(expensesValue) < 0) {
    document.getElementById("eligibilityResult").innerText = "Please enter valid income and expenses values.";
    return;
  }

  if (!mobileNumber || mobileNumber.replace(/\D/g, '').length < 10) {
    document.getElementById("eligibilityResult").innerText = "📞 Please enter a valid mobile number to continue.";
    return;
  }

  let income = Number(incomeValue);
  let expenses = Number(expensesValue);
  let savings = income - expenses;

  if (savings >= 20000) {
    document.getElementById("eligibilityResult").innerText = "✅ You are eligible for a home loan!";
    sendLeadToFormSubmit(clientName, mobileNumber, income, expenses);
    showContactPopup();
  } else {
    document.getElementById("eligibilityResult").innerText = "❌ Your savings are too low for eligibility.";
  }
}

function sendLeadToFormSubmit(name, phoneNumber, income, expenses) {
  const payload = {
    name: name,
    phone: phoneNumber,
    income: income,
    expenses: expenses,
    advisor_name: "Lakshman Ruthala",
    advisor_mobile: "+91 8885689502",
    advisor_email: "lakshman12ruthala@gmail.com",
    _subject: "New Home Loan Bazar Lead",
    _template: "table",
    _captcha: "false"
  };

  fetch("https://formsubmit.co/ajax/lakshman12ruthala@gmail.com", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(payload)
  })
  .then((response) => response.json())
  .then((data) => {
    document.getElementById("eligibilityResult").innerText = "✅ Your enquiry has been submitted successfully.";
  })
  .catch((error) => {
    document.getElementById("eligibilityResult").innerText = "✅ Your enquiry is ready. Please email Lakshman Ruthala at lakshman12ruthala@gmail.com.";
  });
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
