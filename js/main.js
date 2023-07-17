const btn = document.getElementById('btn');

function toggleBtn() {
  btn.classList.toggle("active");
  light.classList.toggle("light_on");

}

// const collapsibles = document.querySelectorAll(".collapsible");
// collapsibles.forEach((item) =>
//   item.addEventListener("click", function () {
//     this.classList.toggle("collapsible--expanded");
//   })
// );