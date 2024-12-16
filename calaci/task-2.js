const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

buttons.forEach((item) => {
  item.onclick = () => {
    handleButtonClick(item.id);
  };
});

document.addEventListener("keydown", (event) => {
  const key = event.key;
  if ((key >= 0 && key <= 9) || key === "." || key === "+" || key === "-" || key === "*" || key === "/" || key === "%") {
    handleButtonClick(key);
  } else if (key === "Enter") {
    handleButtonClick("equal");
  } else if (key === "Backspace") {
    handleButtonClick("backspace");
  }
});

function handleButtonClick(buttonId) {
  if (buttonId === "clear") {
    display.innerText = "";
  } else if (buttonId === "backspace") {
    let string = display.innerText.toString();
    display.innerText = string.substr(0, string.length - 1);
  } else if (display.innerText !== "" && buttonId === "equal") {
    display.innerText = eval(display.innerText);
  } else if (display.innerText === "" && buttonId === "equal") {
    display.innerText = "Empty!";
    setTimeout(() => (display.innerText = ""), 2000);
  } else {
    display.innerText += buttonId;
  }
}

const themeToggleBtn = document.querySelector(".theme-toggler");
const calculator = document.querySelector(".calculator");
const toggleIcon = document.querySelector(".toggler-icon");
let isDark = true;
themeToggleBtn.onclick = () => {
  calculator.classList.toggle("dark");
  themeToggleBtn.classList.toggle("active");
  isDark = !isDark;
};

document.addEventListener("keydown", (event) => {
  if (event.key === "t" || event.key === "T") {
    themeToggleBtn.click();
  }
});
