'use strict'

function LandingPage(parentElement) {
  this.parentElement = parentElement;
  this.elements = null;
}

LandingPage.prototype.generate = function() {
  this.elements = `
    <section class="landing-intro">
      <div class="intro-section">
        <h2 class="intro-title">ACAB</h2>
        <p class="intro-description">Presents</p>
      </div>
      <div class="intro-brand">
        <h1 class="brand-logo"><img src="./assets/images/tindercats.svg" alt="Tindercats logo" class="brand-image"></h1>
        <p class="intro-cta">Miolouu</p>
        <p class="intro-description acab">allcatsareboilerplates</p>
      <div>
    </section>
  `;
  this.render();
}

LandingPage.prototype.render = function() {
  this.parentElement.innerHTML = this.elements;
}