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
    <header>
      <h2>Supaaaar Amazing Black Cats Page!</h2>
    </header>
    <section class="cards-container">
  `;
  this.blackCats.forEach((cat) => {
    let arrNames = ['Manel', 'Antonio', 'Eugènia', 'Eufràsia', 'Manolo', 'Antònia', 'Teta', 'Tata', 'Meritxell', 'Terca'];
    let arrDescriptions = ['A classic roof\'s cat. Loves to look at the moon and hunt flies.', 'A kind of rare cat, practices swimming while eats chocolate.', 'Late at night this cat begins to jump searching for vampires.', 'A nice cat, friendly during the day, violent at night.', 'No one would think this cat speaks more than 5 languages, but it does.', 'This cat has the life all we dream of: just spends time eating and watching clouds.']
    this.elements += `
      <article>
        <div style="background-image: url('${cat.url}'); background-size: cover; background-position: center center; width: 200px; height: 200px;"></div>
        <h3>${arrNames[Math.floor(Math.random()*10)]}</h3>
        <p>${arrDescriptions[Math.floor(Math.random()*6)]}</p>
        
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
  this.blackCats = await BlackCatsServiceInstance.getCatslist();
}