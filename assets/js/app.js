'use strict'

function main() {
  var ENTRY_POINT = '/';
  var layoutInstance = null;
  var navbarInstance = null;
  var rootElement = document.querySelector('#root');
  var links = [
    { name: 'Home',
      url: '/'
    },
    { name: 'Miolouu',
      url: '/miolouu'
    },
  ];

  generateLayout();
  generateNavbar();
  addListenersToNavbar();
  activateRouter();

  function generateLayout() {
    layoutInstance = new Layout(rootElement);
    layoutInstance.generate();
  }

  function generateNavbar() {
    navbarInstance = new Navbar(layoutInstance.header, links);
    navbarInstance.generate();
  }

  function addListenersToNavbar() {
    var anchors = document.querySelectorAll('nav a');
    anchors.forEach(function(anchor) {
      anchor.addEventListener('click', changePage);
    })
  }

  function changePage(event) {
    var url = event.target.attributes.url.value;
    routerInstance.buildDOM(url, layoutInstance.main);
  }

  function activateRouter() {
    routerInstance.buildDOM(ENTRY_POINT, layoutInstance.main);
  }
};

window.addEventListener('load', main);