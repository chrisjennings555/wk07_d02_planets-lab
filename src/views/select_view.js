const PubSub = require('../helpers/pub_sub.js');

const SelectView = function () {

}

SelectView.prototype.bindEvents = function () {
  const nav = document.querySelector('.planets-menu');
  nav.addEventListener('click', (event) => {
    const selectedPlanet = event.target.id;
    PubSub.publish('SelectView:planet-selected', selectedPlanet);
  });
};

module.exports = SelectView;
