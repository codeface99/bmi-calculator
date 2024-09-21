import "./styles.css";

const calculateBtn = document.getElementById("calculate-btn");
const resultElement = document.getElementById("result");

calculateBtn.addEventListener("click", () => {
  const weight = parseFloat(document.getElementById("weight").value);
  const height = parseFloat(document.getElementById("height").value) / 100;

  if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
    resultElement.textContent = "Please enter valid weight and height.";
  }

  const bmi = (weight / (height * height)).toFixed(2);

  let category = "";

  if (bmi < 18.5) {
    category = "Underweight";
  } else if (bmi < 24.9) {
    category = "Normal weight";
  } else if (bmi < 29.9) {
    category = "Overweight";
  } else {
    category = "Obese";
  }

  resultElement.textContent = `Your BMI is ${bmi} (${category})`;
});
