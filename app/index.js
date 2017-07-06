import Button from './components/button';
import PubState from './components/PubState';

class App {
  constructor() {
    this.state = "published";
    var display_state = new PubState(this.state);
    this.elm = document.createElement("div");
    this.elm.appendChild(new Button("Publish", () => {this.publish(display_state)}).element);
    this.elm.appendChild(new Button("Unpublish", () => {this.unpublish(display_state)}).element);
    this.elm.appendChild(display_state.element);
  }

  publish(stateObj) {
    this.state = "published";
    stateObj.updateState(this.state);
  }

  unpublish(stateObj) {
    this.state = "unpublished";
    stateObj.updateState(this.state);
  }

  get element() {
    return this.elm;
  }
}

function appInit(app, appStr) {
  "use strict";
  var elm = document.getElementById(appStr);
  elm.innerHTML = "";
  console.log(app.element);
  elm.appendChild(app.element);
};

appInit(new App(), "app");
appInit(new App(), "app2");
