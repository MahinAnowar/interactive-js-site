const colors = ["#F4F7FF", "red", "orange", "yellow", "green", "blue", "indigo", "violet", "black", "pink", "purple"];

const button = document.getElementById("colorBtn");



button.addEventListener("click", function () {

    const randomColor = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[randomColor];
  });