const PubSub = require('../helpers/pub_sub.js');

const SolarSystem = function(planets) {
  this.planets = planets;
  console.log(this.planets);
};

SolarSystem.prototype.bindEvents = function () {
  PubSub.subscribe('SelectView:planet-selected', (event) => {
    const selectedPlanet = event.detail;
    const result = this.findPlanet(selectedPlanet);
    PubSub.publish('Planets:selected-planet-ready', result);
  });
};

SolarSystem.prototype.findPlanet = function (selectedPlanet) {
  for (const planet of this.planets) {
    if (planet.name === selectedPlanet) {
      return planet
    }
  }
};


module.exports = SolarSystem;
