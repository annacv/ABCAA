'use strict'

function Navbar(parentElement, links, style) {
  this.parentElement = parentElement;
  this.links = links;
  this.style = style;
  this.elements = null;
}

// generate DOM elements dinamically
Navbar.prototype.generate = function() {
  this.elements = `
    <nav class="navbar">
      <ul class="navbar-list">`;
  this.links.forEach((link) => {
    this.elements += `
      <li class="navbar-list-item">
        <a class="navbar-list-link" href= "#0" url=${link.url}>${link.name}</a>
      </li>
    `;
  });
  this.elements += `</ul>
                  </nav>
  `;
  this.render();
}

// add elements to DOM
Navbar.prototype.render = function() {
  this.parentElement.innerHTML = this.elements;
}