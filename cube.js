const cube = document.getElementById("cube");
const navItems = document.querySelectorAll(".nav-item");
let currentIndex = 0;

function navigateTo(targetIndex) {
  const targetAngle = targetIndex * -90;

  cube.style.transform = `translateZ(-50vw) rotateY(${targetAngle}deg)`;

  navItems[currentIndex].classList.remove("active");
  navItems[targetIndex].classList.add("active");

  currentIndex = targetIndex;
}

cube.style.transform = `translateZ(-50vw) rotateY(0deg)`;
