let display = document.getElementById("display");

// Append number/operator to display
function appendValue(value) {
  display.value += value;
}

// Clear display
function clearDisplay() {
  display.value = "";
}

// Evaluate expression
function calculate() {
  try {
    if (display.value === "") return;
    let result = eval(display.value);
    if (!isFinite(result)) {
      display.value = "Error";
    } else {
      display.value = result;
    }
  } catch (e) {
    display.value = "Error";
  }
}

// Optional: keyboard support
document.addEventListener("keydown", function (e) {
  if ((e.key >= "0" && e.key <= "9") || "+-*/.".includes(e.key)) {
    appendValue(e.key);
  } else if (e.key === "Enter") {
    calculate();
  } else if (e.key === "Backspace") {
    display.value = display.value.slice(0, -1);
  } else if (e.key === "Escape") {
    clearDisplay();
  }
});
