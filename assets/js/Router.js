'use strict'

function Router() {
  this.page = null;
}

// Router config
Router.prototype.buildDOM = function(url, parentElement) {
  switch (url) {
    case '/':
      this.generateLandingPage(parentElement);
      break;
    case '/miolouu':
      this.generateCatsPage(parentElement);
      break;
    default: 
      this.generateLandingPage(parentElement);
  }
}

Router.prototype.generateLandingPage = function(parentElement) {
  this.page = new LandingPage(parentElement);
  this.page.generate();
}

Router.prototype.generateCatsPage = function(parentElement) {
  this.page = new CatsPage(parentElement);
  this.page.generate();
}

var routerInstance = new Router();