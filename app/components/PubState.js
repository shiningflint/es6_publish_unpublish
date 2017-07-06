class PubState {
  constructor(state) {
    this.elm = document.createElement("p");
    this.updateState(state);
  }

  updateState(state) {
    this.elm.innerHTML = "Current state is: " + state;
  }

  get element() {
    return this.elm;
  }
}

module.exports = PubState;
