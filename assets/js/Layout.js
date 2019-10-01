'use strict'

class Layout {
  constructor(root, style) {
    this.root = root;
    this.style = style;
    this.elements = null;
    this.header = null;
    this.main = null;
    this.footer = null;
  }
  // generate DOM elements
  generate() {
    this.elements = `
    <header id="site-header" class="header container">
      <h1>Tindercats</h1>
    </header>
    <main id="site-main" class="main container"></main>
    <footer id="site-footer" class="footer container">
      <ul class="footer-credits">
        <li>Coded in Ironhack /></li>
        <li><a class="footer-repo-link" href="https://github.com/annacv/all-cats" target="blank">AnnaCondal</a></li>  
      </ul>
    </footer>
    `
    this.render();
    this.getContainers();
  }
  // add elements to DOM
  render() {
    this.root.innerHTML = this.elements;
  }
  // get main, get header, main, footer from DOM 
  getContainers() {
    this.header = document.querySelector('#site-header');
    this.main = document.querySelector('#site-main');
    this.footer = document.querySelector('#site-footer');
  }
}