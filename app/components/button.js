class Button {
  constructor(word, func) {
    this.elm = document.createElement("button");
    this.elm.innerHTML = word;
    this.elm.type = "button";
    this.elm.addEventListener("click", func, false);
  }

  get element() {
    return this.elm;
  }
}

module.exports = Button;
