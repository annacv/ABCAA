'use strict'

class Router {
  constructor() {
    this.page = null;
  }
  // Router config
  buildDOM = (url, parentElement) => {
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
  generateLandingPage = (parentElement) => {
    this.page = new LandingPage(parentElement);
    this.page.generate();
  }
  generateCatsPage = (parentElement) => {
    this.page = new CatsPage(parentElement);
    this.page.generate();
  }
}

const routerInstance = new Router();