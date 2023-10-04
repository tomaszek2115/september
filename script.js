// window.onload = () => {
//   var h1Element = document.querySelector(".fade-in");
//   console.log(h1Element);
//   h1Element.style.opacity = 1;
// };
function fadeFun() {
  const h1Element = document.getElementsByTagName("h1")[0];
  console.log(h1Element);
  h1Element.classList.add("fade-in");
}

document.addEventListener("DOMContentLoaded", fadeFun);
