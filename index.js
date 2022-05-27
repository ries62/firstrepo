document.querySelector(".buttons").addEventListener("click", (event) => {
  let buttonPressed = event.target.value;
  if (buttonPressed) {
    selectedElement(buttonPressed);
  }
});

let rgbCodes = () => [
  Math.random() * 255,
  Math.random() * 255,
  Math.random() * 255,
];

let selectedElement = (buttonPressed) => {
  document.querySelector("h3").innerText = `Button pressed: ${buttonPressed}`;
  const [red, green, blue] = rgbCodes();

  let circle, square, rect;

  if (buttonPressed === "Select") {
    circle = d3.select(".circle");
    square = d3.select(".square");
    rect = d3.select(".rect");
  } else {
    circle = d3.selectAll(".circle");
    square = d3.selectAll(".square");
    rect = d3.selectAll(".rect");
  }

  let elements = [circle, square, rect];

  elements.forEach((selection) => {
    selection.select(function (d, i, n) {
      if (buttonPressed === "Filter Even") {
        if (i % 2 !== 0) {
          this.style.fill = `rgba(${red}, ${green}, ${blue},${(i + 1) * 0.25})`;
        }
      } else if (buttonPressed === "Filter Odd") {
        if (i % 2 === 0) {
          this.style.fill = `rgba(${red}, ${green}, ${blue},${(i + 1) * 0.25})`;
        }
      } else {
        this.style.fill = `rgba(${red}, ${green}, ${blue},${(i + 1) * 0.25})`;
      }

      console.log(buttonPressed);
    });
  });
};
