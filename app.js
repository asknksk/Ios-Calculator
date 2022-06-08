let buttons = document.querySelector(".buttons");
let screen = document.querySelector(".screen");

buttons.addEventListener("click", (event) => {
  //   console.log(event.target.innerText);
  //   console.log(
  //     ["AC", "±", "%", ".", "="].every((e) => {
  //       return e != event.target.innerText;
  //     })
  //   );
  if (
    ["AC", "C", "±", "%", ".", "="].every((e) => {
      return e != event.target.innerText;
    })
  ) {
    screen.innerText += event.target.innerText;
    buttons.querySelector(".Ac").innerText = "AC";
  } else if (event.target.innerText == "AC") {
    buttons.querySelector(".Ac").innerText = "C";
    reset();
  }
});

function reset() {
  screen.innerText = "";
}
