// let chuckSize = 3;

fetch("/data/penlinks.json")
  .then((res) => res.json())
  .then(loadPins);

function buildItem(pin) {
  const div = document.createElement("div");
  const img = document.createElement("img");

  img.src = pin;

  div.appendChild(img);

  div.classList.add("card");

  return div;
}

function buildCard() {
  const card = document.createElement("div");
  card.classList.add("bcard");
  return card;
}

function loadPins(data) {
  if (!Array.isArray(data)) {
    return null;
  }

  let chunks = [];

  while (data.length) {
    chunks.push(data.splice(0, 3));
  }
  chunks.forEach((chunk) => {
    const card = document.createElement("div");
    card.classList.add("bcard");
    chunk.forEach((item) => {
      const div = document.createElement("div");
      const img = document.createElement("img");

      img.src = item;

      div.appendChild(img);

      div.classList.add("card");
      card.appendChild(div);
    });
    document.querySelector(".container").appendChild(card);
  });

  addGSAP();
}

function addGSAP() {
  const secPort = document.querySelector("#portfolio .container");
  let box_items = gsap.utils.toArray(".bcard");

  gsap.to(box_items, {
    xPercent: -100 * (box_items.length - 1),
    scrollTrigger: {
      trigger: secPort,
      pin: true,
      scrub: 3,
      snap: 1 / (box_items.length - 1),
      end: "+=" + secPort.offsetWidth - 0.1,
    },
  });
}
