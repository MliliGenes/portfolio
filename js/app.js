const nemuBtn = document.querySelector(".burger");
const menu = document.querySelector(".menu");
const links = menu.querySelectorAll("a");
const nav = document.querySelector(".nav ul");
const links2 = nav.querySelectorAll("a");
const sections = document.querySelectorAll("section");

nemuBtn.addEventListener("click", () => {
  if (!menu.classList.contains("active")) {
    stopIt();
    nemuBtn.firstElementChild.classList.add("fa-xmark");
    nemuBtn.firstElementChild.classList.remove("fa-bars");
    menu.classList.add("active");
  } else {
    stopIt();
    nemuBtn.firstElementChild.classList.remove("fa-xmark");
    nemuBtn.firstElementChild.classList.add("fa-bars");
    menu.classList.remove("active");
  }
});

function stopIt() {
  nemuBtn.classList.add("stopIt");
  setTimeout(() => {
    nemuBtn.classList.remove("stopIt");
  }, 500);
}

links.forEach((link) => {
  link.addEventListener("click", () => {
    if (menu.classList.contains("active")) {
      setTimeout(() => {
        menu.classList.remove("active");
        nemuBtn.firstElementChild.classList.remove("fa-xmark");
        nemuBtn.firstElementChild.classList.add("fa-bars");
      }, 600);
    }
  });
});

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    setTimeout(() => {
      menu.classList.remove("active");
      nemuBtn.firstElementChild.classList.remove("fa-xmark");
      nemuBtn.firstElementChild.classList.add("fa-bars");
    }, 600);
  }
});
var hover = new hoverEffect({
  parent: document.querySelector(".wrap"),
  intensity: 1,
  image2: "/imgs/lil.png",
  image1: "/imgs/lil 2.png",
  displacementImage: "/imgs/heightMap.png",
  angle1: 135,
  angle2: 45,
});

window.addEventListener("load", () => {
  progress();
});
window.addEventListener("scroll", () => {
  progress();
});
function progress() {
  const totalHeight = document.body.offsetHeight - window.innerHeight;
  const scrollPosition = window.scrollY;
  const progress = (scrollPosition / totalHeight) * 100;
  let bg = document.querySelector(".kiki");
  bg.setAttribute("style", "--p: " + progress + "%;");
}
window.addEventListener("resize", () => {
  setTimeout(() => {
    window.location.reload();
  }, 1000);
});
