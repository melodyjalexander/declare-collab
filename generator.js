let quotes = [
  {
    motivation: "I create a safe and secure space for myself wherever I am",
    category: "affirmation",
  },
  {
    motivation: "I give myself permission to do what is right for me",
    category: "affirmation",
  },
  {
    motivation: "I allow myself to be who I am without judgment",
    category: "affirmation",
  },
  {
    motivation: "I allow myself to be who I am without judgment",
    category: "affirmation",
  },
  {
    motivation: "I make a difference in the world by simply existing in it",
    category: "affirmation",
  },
  {
    motivation:
      "“The elevator to success is out of order. You’ll have to use the stairs, one step at a time.” Joe Girard",
    category: "comical",
  },
  {
    motivation:
      "“People often say that motivation doesn’t last. Well, neither does bathing – that’s why we recommend it daily.” Zig Ziglar",
    category: "comical",
  },
  {
    motivation:
      "“If you think you are too small to make a difference, try sleeping with a mosquito.” Dalai Lama",
    category: "comical",
  },
  {
    motivation:
      "“Don’t worry about the world coming to an end today. It’s already tomorrow in Australia.” Charles Schulz",
    category: "comical",
  },
  {
    motivation: "“Think like a proton. Always positive.” Unknown",
    category: "comical",
  },
  {
    motivation:
      "“Risk something or forever sit with your dreams.“ — Herb Brooks",
    category: "life",
  },
  {
    motivation:
      "“It does not matter how slowly you go as long as you do not stop.“ — Confucius",
    category: "life",
  },
  {
    motivation:
      "“There is no passion to be found in playing small — in settling for a life that is less than you are capable of living.” — Nelson Mandela",
    category: "life",
  },
  {
    motivation:
      "“When everything seems to be going against you, remember that the airplane takes off against the wind, not with it.” — Henry Ford",
    category: "life",
  },
  {
    motivation:
      "“A person who never made a mistake never tried anything new.” — Albert Einstein",
    category: "life",
  },
  {
    motivation:
      "I'm a survivor. I'm not gonna give up. I'm not gonna stop. I'm gonna work harder. - Destiny's Child",
    category: "music",
  },
  {
    motivation: "It’s a beautiful day. Don’t let it get away. - U2",
    category: "music",
  },
  {
    motivation:
      "In every life we have some trouble. But when you worry, you make it double. - Bobby McFerrin",
    category: "music",
  },
  {
    motivation:
      "And if at first your don't succeed, then dust yourself off and try again! - Aaliyah",
    category: "music",
  },
  {
    motivation:
      "You live and you learn, man. I’ve learned you can’t wait on anybody. You have to raise your awareness yourself. – Big Sean",
    category: "music",
  },
];

let chosenCategory = "";

function renderQuotes() {
  let html = quotes
    .filter((quote) =>
      chosenCategory === "" ? true : chosenCategory === quote.category
    )
    .map((quote) => `<li><h3>${quote.motivation}</h3></li>`)
    .reduce((accum, currentVal) => accum + currentVal);

  let elem = document.getElementById("quoteList");
  elem.innerHTML = html;
}

document.getElementById("affirmation").onclick = function () {
  chosenCategory = "affirmation";
  renderQuotes();
};
document.getElementById("comical").onclick = function () {
  chosenCategory = "comical";
  renderQuotes();
};
document.getElementById("life").onclick = function () {
  chosenCategory = "life";
  renderQuotes();
};
document.getElementById("music").onclick = function () {
  chosenCategory = "music";
  renderQuotes();
};

document.getElementById("surpriseMe").onclick = function () {
  chosenCategory = "";
  renderQuotes();
};
