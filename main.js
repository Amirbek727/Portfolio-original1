function subtractNumbers() {
  let num1 = parseFloat(prompt("Birinchi sonni kiriting:"));
  let num2 = parseFloat(prompt("Ikkinchi sonni kiriting:"));
  let result;

  if (num1 > num2) {
      result = num1 - num2;
  } else {
      result = num2 - num1;
  }

  console.log("Natija: " + result);
}