const nemuBtn = document.querySelector(".burger");
const menu = document.querySelector(".menu");
const links = menu.querySelectorAll("a");
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
window.addEventListener(
  "scroll",
  _.debounce(() => {
    sections.forEach((sec) => {
      let top = window.scrollY;
      let secoffset = sec.offsetTop;
      let secheight = sec.offsetHeight;
      let id = sec.id;
      if (top >= secoffset && top < secheight + secoffset) {
        links.forEach((link) => {
          link.classList.remove("active");
          menu.querySelector(`a[href="#${id}"]`).classList.add("active");
        });
      }
    });
  }, 200)
);

var hover = new hoverEffect({
  parent: document.querySelector(".wrap"),
  intensity: 0.3,
  image1: "/imgs/lil.png",
  image2: "/imgs/lil 2.png",
  displacementImage: "/imgs/heightMap.png",
  angle1: 135,
  angle2: 45,
});
