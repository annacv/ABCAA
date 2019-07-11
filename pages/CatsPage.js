'use strict'

function CatsPage(parentElement) {
  this.parentElement = parentElement;
  this.elements = null;
  this.blackCats = null;
  this.loading = null;
}

CatsPage.prototype.generate = async function() {
  this.loading = new Loading(this.parentElement);
  this.loading.generate();
  
  await this.connectToAPI();
  this.elements = `
    <section class="card-grid">
  `;
  this.allCats.forEach((cat) => {
    let arrNames = ['Manel', 'Antònio', 'Eugènia', 'Eufràsia', 'Manolo', 'Antònia', 'Teta', 'Tata', 'Meritxell', 'Terca', 'Topos', 'Misae', 'Xuxa', 'Shushi'];
    let arrDescriptions = ['A classic roof\'s cat. Loves to look at the moon and hunt flies.', 'A kind of rare cat, practices swimming while eats chocolate with knuts.', 'Late at night this cat begins to jump searching for vampires.', 'A bipolar cat, friendly during the day, violent at night.', 'No one would think this cat speaks more than 5 languages, but it does.', 'This cat has the life all we dream of: just spends time eating and watching clouds.', 'This cat loves watermelon, but only when it\'s served as an icecream.', 'Ninja cat, hunts flies while deployment is on going.', 'Somewhat wild... its dream is to go to the moon and throw itself in free fall.', 'This nice cat loves barbecues, gazpatxo and spending time spitting the neighborhood.', 'It loves parties! Customized as a pink panther, he practices karaoke each Friday.', 'Very famous in its neighborhood as a talented singer in spring.', 'Don\'t hesitate to ask it for help in kicking all kinds of uniformed rats.', 'Rockcatstar! Plays the harmonica with the whiskers while scratching the guitar at four legs!']
    this.elements += `
      <article class="grid-item">
        <div class="grid-item-image" style="background-image: url('${cat.url}')"></div>
        <div class="grid-item-info">
          <h3 class="card-title">${arrNames[Math.floor(Math.random()*14)]}</h3>
          <p class="card-description">${arrDescriptions[Math.floor(Math.random()*14)]}</p>
        </div>
      </article>
    `
  })
  this.elements += '</section>'
  this.render();
}

CatsPage.prototype.render = function() {
  this.parentElement.innerHTML = this.elements;
}

CatsPage.prototype.connectToAPI = async function() {
  this.allCats = await AllCatsServiceInstance.getCatslist();
}