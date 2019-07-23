'use strict'

class Loading {
  constructor(parentElement) {
    this.parentElement = parentElement;
    this.elements = null;
  }

  generate() {
    this.elements = `
    <section class="loader">
      <div class="loader-container">
        <p class="loader-message"> >> Wait! Cats are coming from the ceilings...</p>
        <img class= "loader-gif" src="https://media.giphy.com/media/kLka7AlsedWZq/giphy.gif" alt="Cat Flying Cats GIF" style="width: 100%; height: auto;">
      </div>
    </section>
    `
    this.render();
  }

  render() {
    this.parentElement.innerHTML = this.elements;
  }
}