'use strict'

class CatsPage {
  constructor(parentElement) {
    this.parentElement = parentElement;
    this.elements = null;
    this.blackCats = null;
    this.loading = null;
  }
  generate = async () => {
    this.loading = new Loading(this.parentElement);
    this.loading.generate();

    await this.connectToAPI();
    this.elements = `
      <section class="card-grid">
    `;
    this.allCats.forEach((cat) => {
      let arrNames = ['Manel', 'Antònio', 'Eugènia', 'Eufràsia', 'Manolo', 'Antònia', 'Teta', 'Tata', 'Meritxell', 'Terca', 'Topos', 'Misae', 'Xuxa', 'Shushi', 'Maki'];
      let arrDescriptions = ['A classic roof\'s cat. Loves to look at the moon\'s phases and hunt mosquitos and flies.', 'A kind of rare cat, practices swimming while eats chocolate with knuts.', 'Somewhat curious... Late at night this cat begins to crazy jump searching for vampires.', 'A bipolar cat, kind and friendly during the day, violent and dangerous at night.', 'The cleverest cat!!! No one would think this cat speaks more than 5 languages, but it does.', 'This cat has the life all we dream of: just spends time eating and watching clouds.', 'This cat loves watermelon, but only when it\'s served as an icecream.', 'Ninja developer cat, hunts flies and screams while deployment is on going.', 'Somewhat wild... its dream is to join NASA to go to the moon and throw itself in free fall.', 'This cat loves barbecues, gazpatxo & spending time spitting the neighborhood.', 'It loves parties! Customized as a pink panther, he practices karaoke each Friday.', 'Very famous and cool in its neighborhood as a talented singer when spring arrives!!', 'Trained watching Kill Bill! Don\'t hesitate to ask it for help in kicking all kinds of uniformed rats.', 'Rockcatstar! Plays the harmonica with the whiskers while plays the guitar at four legs!', 'Antispecist! Speaks gatuno, perruno, pajaruno, castellano, català & parse language.']
      this.elements += `
        <article class="grid-item">
          <div class="grid-item-image" style="background-image: url('${cat.url}')"></div>
          <div class="grid-item-info">
            <h3 class="card-title">${arrNames[Math.floor(Math.random() * 15)]}</h3>
            <p class="card-description">${arrDescriptions[Math.floor(Math.random() * 15)]}</p>
          </div>
        </article>
      `
    })
    this.elements += '</section>'
    this.render();
  }

  render() {
    this.parentElement.innerHTML = this.elements;
  }

  connectToAPI = async () => this.allCats = await AllCatsServiceInstance.getCatslist();
}