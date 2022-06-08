let buttons = document.querySelector(".buttons");
let screen = document.querySelector(".screen");

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
    })
  ) {
    if (
      screen.innerText == "" &&
      !["+", "-", "x", "÷", "="].every((e) => {
        return e != event.target.innerText;
      })
    ) {
    } else if (
      !["+", "-", "x", "÷", "="].every((e) => {
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
    calculate();
  }
  // console.log(screen.innerText.endsWith("+") || screen.innerText.endsWith("-"));
});

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
    screen.innerText.replace(".", "a");
  } else if (screen.innerText == "") {
    screen.innerText = "0.";
  } else {
    screen.innerText += ".";
  }
}
function calculate() {}
