const hideBtn = document.getElementById("hideBtn");
const showBtn = document.getElementById("showBtn");
const details = document.getElementById("details");
const shadowBox = document.getElementById("shadowBox");

hideBtn.addEventListener("click", () => {
  details.style.display = "none";
  shadowBox.style.display = "block";
});

showBtn.addEventListener("click", () => {
  shadowBox.style.display = "none";
  details.style.display = "inline-block";
});
