// Grab the elements we need
const form = document.getElementById("bmi-form");
const heightInput = document.getElementById("height");
const weightInput = document.getElementById("weight");
const heightError = document.getElementById("height-error");
const weightError = document.getElementById("weight-error");
const resetBtn = document.getElementById("reset-btn");

const resultBox = document.getElementById("result");
const bmiValue = document.getElementById("bmi-value");
const bmiCategory = document.getElementById("bmi-category");
const bmiMessage = document.getElementById("bmi-message");

// Validate one field. Returns an error message, or "" if the value is fine.
function validate(rawValue, fieldName) {
  // 1. Empty check (also catches spaces)
  if (rawValue.trim() === "") {
    return "Please enter your " + fieldName + ".";
  }

  const value = Number(rawValue);

  // 2. Not a number
  if (isNaN(value)) {
    return "Please enter a valid number.";
  }

  // 3. Zero or negative
  if (value <= 0) {
    return "The " + fieldName + " must be greater than zero.";
  }

  return "";
}

function showError(input, errorEl, message) {
  errorEl.textContent = message;
  input.classList.toggle("invalid", message !== "");
}

// Decide the category using if / else conditions
function getCategory(bmi) {
  if (bmi < 18.5) {
    return {
      name: "Underweight",
      cssClass: "underweight",
      message: "You are below the healthy weight range for your height."
    };
  } else if (bmi < 25) {
    return {
      name: "Normal weight",
      cssClass: "normal",
      message: "Great! You are within the healthy weight range."
    };
  } else if (bmi < 30) {
    return {
      name: "Overweight",
      cssClass: "overweight",
      message: "You are above the healthy weight range for your height."
    };
  } else {
    return {
      name: "Obese",
      cssClass: "obese",
      message: "Your BMI is well above the healthy range. Consider speaking to a health professional."
    };
  }
}

function hideResult() {
  resultBox.className = "result hidden";
}

form.addEventListener("submit", function (event) {
  event.preventDefault(); // stop the page from reloading

  const heightMsg = validate(heightInput.value, "height");
  const weightMsg = validate(weightInput.value, "weight");

  showError(heightInput, heightError, heightMsg);
  showError(weightInput, weightError, weightMsg);

  // Stop here if either field has a problem
  if (heightMsg !== "" || weightMsg !== "") {
    hideResult();
    return;
  }

  // Height is entered in cm, so convert to metres
  const heightM = Number(heightInput.value) / 100;
  const weightKg = Number(weightInput.value);

  // BMI = weight (kg) / height (m)^2
  const bmi = weightKg / (heightM * heightM);

  // Round to one decimal place for display
  const bmiRounded = bmi.toFixed(1);

  // Use the unrounded value for the category so borders are accurate
  const category = getCategory(bmi);

  bmiValue.textContent = bmiRounded;
  bmiCategory.textContent = category.name;
  bmiMessage.textContent = category.message;
  resultBox.className = "result " + category.cssClass;
});

// Clear the error as soon as the user starts typing again
heightInput.addEventListener("input", function () {
  showError(heightInput, heightError, "");
});
weightInput.addEventListener("input", function () {
  showError(weightInput, weightError, "");
});

resetBtn.addEventListener("click", function () {
  form.reset();
  showError(heightInput, heightError, "");
  showError(weightInput, weightError, "");
  hideResult();
});