let firsts = [
  {
    id: "90s Nostalgia",
    details:
      "90s Nostalgia focuses on childhood shows, snacks, trends, fashion and video games during the era",
  },
  {
    id: "Animecore",
    details:
      "Animecore revolves around the visual culture of Japanese anime and manga, featuring a complex visual language imbued with exaggerated facial and bodily expressions, unnatural hair styles and colors, and most characteristically, large, prominent, and expressive eyes.",
  },
  {
    id: "Grunge",
    details:
      "Grunge is a darker, edgier style that is usually depicted with glitches, vinyl records, cigarettes, neon lights and the color black",
  },
  {
    id: "Minimalist",
    details:
      "Minimalist aesthetic captures the “less is more” approach to a minimalist lifestyle in a style of decor. While it typically refers to home decor, it can be applied to any visual space. Usually, it involves neutral colors, clean spaces, and minimal distractions.",
  },
  {
    id: "Nature",
    details:
      "The nature aesthetic refers to anything in nature such as plants, structures and views.",
  },
  {
    id: "Pastel",
    details:
      "Pastel is an aesthetic that relates to pastel colors. Pastels are also known as tints, and are pale tones of colors made by mixing a significant amount of white into the original shade.",
  },
  {
    id: "Spacecore",
    details: "Spacecore is centered around astronomy, stars and planets.",
  },
  {
    id: "Vaporwave",
    details:
      "Vaporwave incorporates early internet imagery, late 90s web design, glitch art, 3D rendered images, among other things. VHS degradation is another common effect seen in this aesthetic.",
  },
  {
    id: "Vintage",
    details:
      "Vintage is an umbrella term used to refer to aesthetics which evoke a certain period (or mixture of periods) from the past.",
  },
];

// function renderImages() {
//   let html = firsts
//     .map((first) => `<h3>${first.image}</h3>`)
//     .reduce((accum, currentVal) => accum + currentVal);

//   let elem = document.getElementById("images-1");
//   elem.innerHTML = html;
// }

// window.onload = () => {
//   renderImages(first);
// };

class Accordion {
  constructor(buttonText, detailsText) {
    this.detailsText = detailsText;
    this.buttonText = buttonText;
    this.element = null;

    this.generate();
  }

  generate() {
    const button = document.createElement("button");
    button.append(this.buttonText);
    button.classList.add("small-button");
    button.onclick = () => this.toggle();
    // button.addEventListener("click", this.toggle());

    const detailsEle = document.createElement("p");
    detailsEle.append(this.detailsText);
    detailsEle.classList.add("details");

    const wrapper = document.createElement("div");
    wrapper.classList.add("accordion");
    wrapper.append(button);
    wrapper.append(detailsEle);

    this.element = wrapper;
  }

  appendTo(parentElement) {
    parentElement.append(this.element);
  }

  toggle() {
    this.element.classList.toggle("active");
  }
}

firsts.forEach((first) => {
  let currentAcc = new Accordion(first.id, first.details);
  currentAcc.appendTo(document.getElementById("options"));
});
