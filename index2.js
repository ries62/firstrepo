let button = document.querySelectorAll("button");

let rgbColor = () => [
  Math.random() * 255,
  Math.random() * 255,
  Math.random() * 255,
];

button.forEach((e) =>
  e.addEventListener("click", (data) => {
    let buttonPressed = data.target.value;
    colorSvg(buttonPressed);
  })
);

let colorSvg = (buttonPressed) => {
  // document.querySelector("h3").innerText = `Button Pressed  = ${buttonPressed}`;

  d3.select("#output").html(`<h3>Button Pressed D3 = ${buttonPressed}</h3>`);
  let [red, green, blue] = rgbColor();

  d3.select("#output").html(() => {
    let content = "";
    for (let i = 0; i < 5; i++) {
      content += `<p>Dit is paragraaf nummero ${i}</p>`;
    }
    return content;
  });

  let square, rect, circle;

  if (buttonPressed === "Select") {
    square = d3.select(".square");
    rect = d3.select(".rect");
    circle = d3.select(".circle");
  } else {
    square = d3.selectAll(".square");
    rect = d3.selectAll(".rect");
    circle = d3.selectAll(".circle");
  }

  let elements = [square, rect, circle];

  elements.forEach((e) => {
    e.select((d, i, n) => {
      if (buttonPressed === "Filter Odd") {
        if (i % 2 === 0) {
          d3.select(n[i]).style(
            "fill",
            `rgba(${red},${green},${blue},${(i + 1) * 0.25}`
          );
        }
      } else if (buttonPressed === "Filter Even") {
        if (i % 2 !== 0) {
          d3.select(n[i]).style(
            "fill",
            `rgba(${red},${green},${blue},${(i + 1) * 0.25}`
          );
        }
      } else {
        d3.select(n[i]).style(
          "fill",
          `rgba(${red},${green},${blue},${(i + 1) * 0.25}`
        );
      }
    });
  });

  // if (buttonPressed === "Filter Odd") {
  //   elements.forEach((e) => {
  //     e.select((d, i, n) => {
  //       if (i % 2 === 0) {
  //         d3.select(n[i]).style("fill", "green");
  //       }
  //     });
  //   });
  // } else if (buttonPressed === "Filter Even") {
  //   elements.forEach((e) => {
  //     e.select((d, i, n) => {
  //       if (i % 2 !== 0) {
  //         d3.select(n[i]).style("fill", "green");
  //       }
  //     });
  //   });
  // } else {
  //   elements.forEach((e) => {
  //     e.select((d, i, n) => {
  //       d3.select(n[i]).style("fill", "green");
  //     });
  //   });
  // }
};
