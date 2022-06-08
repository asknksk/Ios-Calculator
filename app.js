let buttons = document.querySelector(".buttons");
let screen = document.querySelector(".screen");
let lastScreen = document.querySelector(".last-calculate");
let numbers = 0;
buttons.addEventListener("click", (event) => {
  //   console.log(event.target.innerText);
  //   console.log(
  //     ["AC", "±", "%", ".", "="].every((e) => {
  //       return e != event.target.innerText;
  //     })
  //   );
  // console.log(
  //   ["+", "-", "x", "÷", "="].every((e) => {
  //     return e != event.target.innerText[length - 1];
  //   })
  // );

  if (
    ["AC", "C", "±", "%", ".", "="].every((e) => {
      return e != event.target.innerText;
    }) &&
    event.target != buttons
  ) {
    if (
      screen.innerText == "" &&
      !["+", "-", "x", "÷", "="].every((e) => {
        return e != event.target.innerText;
      })
    ) {
    } else if (
      !["+", "-", "x", "÷", "."].every((e) => {
        return e != screen.innerText[screen.innerText.length - 1];
      })
    ) {
      if (
        ["+", "-", "x", "÷", "="].every((e) => {
          return e != event.target.innerText;
        })
      ) {
        screen.innerText += event.target.innerText;
      }
    } else {
      screen.innerText += event.target.innerText;
      buttons.querySelector(".Ac").innerText = "AC";
    }
  } else if (event.target.innerText == "AC") {
    buttons.querySelector(".Ac").innerText = "C";
    reset();
  } else if (event.target.innerText == "%") {
    modulus();
  } else if (event.target.innerText == ".") {
    dot();
  } else if (event.target.innerText == "=") {
    if (screen.innerText.endsWith(".")) {
      screen.innerText = screen.innerText.slice(0, screen.innerText.length - 1);
      calculate();
    } else {
      calculate();
    }
  } else if (event.target.innerText == "C") {
    lastScreen.innerText = "";
  } else if (event.target.innerText == "±") {
    turnNegatif();
  }
  console.log(event.target != buttons);
});

// Functions
function reset() {
  screen.innerText = "";
}
function modulus() {
  if (
    !(
      screen.innerText.endsWith("+") ||
      screen.innerText.endsWith("-") ||
      screen.innerText.endsWith("x") ||
      screen.innerText.endsWith("÷")
    )
  ) {
    screen.innerText /= 100;
  }
}
function dot() {
  if (
    screen.innerText.endsWith("+") ||
    screen.innerText.endsWith("-") ||
    screen.innerText.endsWith("x") ||
    screen.innerText.endsWith("÷")
  ) {
  } else if (screen.innerText.endsWith(".")) {
    // console.log("girdi");
    screen.innerText = screen.innerText.slice(0, screen.innerText.length - 1);
  } else if (screen.innerText == "") {
    screen.innerText = "0.";
  } else {
    screen.innerText += ".";
  }
}
function calculate() {
  lastScreen.innerHTML = screen.innerText;

  screen.innerText = eval(screen.innerText.replace("x", "*").replace("÷", "/"));
}

function turnNegatif() {
  if (
    screen.innerHTML.includes("+") ||
    screen.innerHTML.includes("x") ||
    screen.innerHTML.includes("÷") ||
    screen.innerText == ""
  ) {
  } else if (screen.innerText.startsWith("-")) {
    console.log("girdi");
    screen.innerText = screen.innerText.slice(1, screen.innerText.length);
  } else {
    screen.innerText = "-".concat(screen.innerText);
  }
}
