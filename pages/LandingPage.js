'use strict'

function LandingPage(parentElement) {
  this.parentElement = parentElement;
  this.elements = null;
}

LandingPage.prototype.generate = function() {
  this.elements = `
    <header>
      <h1>Supaaaar Cool ABCAA!!!!!</h1>
      <h2>Here you are!! Amazing Black Cats!!</h2>
    </header>
  `;
  this.render();
}

LandingPage.prototype.render = function() {
  this.parentElement.innerHTML = this.elements;
}