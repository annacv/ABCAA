'use strict'

const main = () => {
  const ENTRY_POINT = '/'
  let layoutInstance = null
  let navbarInstance = null
  const rootElement = document.querySelector('#root')
  const links = [
    {
      name: 'Home',
      url: '/'
    },
    {
      name: 'Meet your cat!',
      url: '/miolouu'
    },
  ];

  const generateLayout = () => {
    layoutInstance = new Layout(rootElement)
    layoutInstance.generate()
  }

  const generateNavbar = () => {
    navbarInstance = new Navbar(layoutInstance.header, links)
    navbarInstance.generate()
  }

  const addListenersToNavbar = () => {
    const anchors = document.querySelectorAll('nav a')
    anchors.forEach(anchor => anchor.addEventListener('click', changePage))
  }

  const activateRouter = () => routerInstance.buildDOM(ENTRY_POINT, layoutInstance.main)

  generateLayout()
  generateNavbar()
  addListenersToNavbar()
  activateRouter()

  function changePage(event) {
    const url = event.target.attributes.url.value;
    routerInstance.buildDOM(url, layoutInstance.main)
  }

  const anchorBtn = document.querySelector('.intro-cta')
  anchorBtn.addEventListener('click', changePage)
};

window.addEventListener('load', main);