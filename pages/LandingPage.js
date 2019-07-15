'use strict'

class LandingPage {
  constructor (parentElement) {
    this.parentElement = parentElement;
    this.elements = null;
  }

  generate() {
    this.elements = `
    <section class="landing-intro">
      <div class="intro-section">
        <h2 class="intro-title">ACAB</h2>
        <p class="intro-description">Presents</p>
      </div>
      <div class="intro-brand">
        <h1 class="brand-logo"><img src="./assets/images/tindercats.svg" alt="Tindercats logo" class="brand-image"></h1>
        <a class="intro-cta" href="#0" url="/miolouu">Miolouu</a>
        <p class="intro-description acab">allcatsareboilerplates</p>
      <div>
    </section>
    `; 
    this.render();
  }

  render() {
    this.parentElement.innerHTML = this.elements;
  }
}

/*
LandingPage.prototype.generate = function() {
  this.elements = `
    <section class="landing-intro">
      <div class="intro-section">
        <h2 class="intro-title">ACAB</h2>
        <p class="intro-description">Presents</p>
      </div>
      <div class="intro-brand">
        <h1 class="brand-logo"><img src="./assets/images/tindercats.svg" alt="Tindercats logo" class="brand-image"></h1>
        <a class="intro-cta" href="#0" url="/miolouu">Miolouu</a>
        <p class="intro-description acab">allcatsareboilerplates</p>
      <div>
    </section>
  `; 
  this.render();
}

LandingPage.prototype.render = function() {
  this.parentElement.innerHTML = this.elements;
}
*/