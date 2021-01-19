let firsts = [
  {
    id: "90s Nostalgia",
    details:
      "90s Nostalgia focuses on childhood shows, snacks, trends, fashion and video games during the era",
    image: "aesthetics/90s2.jpg",
  },
  {
    id: "Animecore",
    details:
      "Animecore revolves around the visual culture of Japanese anime and manga, featuring a complex visual language imbued with exaggerated facial and bodily expressions, unnatural hair styles and colors, and most characteristically, large, prominent, and expressive eyes.",
    image: "aesthetics/anime1.jpg",
  },
  {
    id: "Grunge",
    details:
      "Grunge is a darker, edgier style that is usually depicted with glitches, vinyl records, cigarettes, neon lights and the color black",
    image: "aesthetics/grunge1.jpg",
  },
  {
    id: "Minimalist",
    details:
      "Minimalist aesthetic captures the “less is more” approach to a minimalist lifestyle in a style of decor. While it typically refers to home decor, it can be applied to any visual space. Usually, it involves neutral colors, clean spaces, and minimal distractions.",
    image: "aesthetics/min1.jpg",
  },
  {
    id: "Nature",
    details:
      "The nature aesthetic refers to anything in nature such as plants, structures and views.",
    image: "aesthetics/nature1.jpg",
  },
  {
    id: "Pastel",
    details:
      "Pastel is an aesthetic that relates to pastel colors. Pastels are also known as tints, and are pale tones of colors made by mixing a significant amount of white into the original shade.",
    image: "aesthetics/pastel2.jpg",
  },
  {
    id: "Spacecore",
    details: "Spacecore is centered around astronomy, stars and planets.",
    image: "aesthetics/space1.jpg",
  },
  {
    id: "Vaporwave",
    details:
      "Vaporwave incorporates early internet imagery, late 90s web design, glitch art, 3D rendered images, among other things. VHS degradation is another common effect seen in this aesthetic.",
    image: "aesthetics/vaporwave2.jpg",
  },
  {
    id: "Vintage",
    details:
      "Vintage is an umbrella term used to refer to aesthetics which evoke a certain period (or mixture of periods) from the past.",
    image: "aesthetics/vintage1.jpg",
  },
];

let currentAesthetic = null;
// const image = (id) => {
//   firsts.map((first) => first.id === id ? first.image : "Select an aesthetic to learn more")
//   }

//   <img
// onClick {() => image(first.id)}
// src={first.image}></img>
class Accordion {
  constructor(first, selectButton) {
    this.detailsText = first.details;
    this.buttonText = first.id;
    this.selectButton = selectButton;
    this.element = null;
    this.image = first.image;
    this.imgOutputEle = document.querySelector("#images");
    this.generate();
  }

  generate() {
    const button = document.createElement("button");
    button.append(this.buttonText);
    button.classList.add("small-button");
    button.onclick = () => this.toggle();

    const selectButton = document.createElement("a");
    selectButton.append(this.selectButton);
    selectButton.setAttribute("href", "/generator.html");
    selectButton.classList.add("select-button");

    const detailsEle = document.createElement("p");
    detailsEle.append(this.detailsText);
    detailsEle.classList.add("details");

    const wrapper = document.createElement("div");
    wrapper.classList.add("accordion");
    wrapper.append(button);
    wrapper.append(detailsEle);
    wrapper.append(selectButton);

    this.element = wrapper;
  }

  appendTo(parentElement) {
    parentElement.append(this.element);
  }

  toggle() {
    this.element.classList.toggle("active");
    this.imgOutputEle.src = this.image;
    this.imgOutputEle.classList.toggle("hidden");
  }
}

firsts.forEach((first) => {
  let currentAcc = new Accordion(first, "Select");
  currentAcc.appendTo(document.getElementById("options"));
});
