const PubSub = require('../helpers/pub_sub.js');

const PlanetInfoView = function () {
};

PlanetInfoView.prototype.bindEvents = function () {
  PubSub.subscribe('Planets:selected-planet-ready', (event) => {
    const planet = event.detail;
    this.render(planet);
  });
};

PlanetInfoView.prototype.render = function (planet) {
  const container = document.querySelector('.planet-details');

  const infoParagraph = document.createElement('li');
  infoParagraph.textContent = `Name: ${planet.name}`;
  container.appendChild(infoParagraph);

  const infoParagraph2 = document.createElement('li');
  infoParagraph2.textContent = `Day: ${planet.day} Earth Days`;
  container.appendChild(infoParagraph2);

  const infoParagraph3 = document.createElement('li');
  infoParagraph3.textContent = `Orbit: ${planet.orbit} Earth Days`;
  container.appendChild(infoParagraph3);

  const infoParagraph4 = document.createElement('li');
  infoParagraph4.textContent = `Surface Area: ${planet.surfaceArea} Earths`;
  container.appendChild(infoParagraph4);

  const infoParagraph5 = document.createElement('li');
  infoParagraph5.textContent = `Volume: ${planet.volume} Earths`;
  container.appendChild(infoParagraph5);

  const infoParagraph6 = document.createElement('li');
  infoParagraph6.textContent = `Gravity: ${planet.gravity} G`;
  container.appendChild(infoParagraph6);

  const infoParagraph7 = document.createElement('li');
  infoParagraph7.textContent = `Moons: ${planet.moons}`;
  container.appendChild(infoParagraph7);

  const infoParagraph8 = document.createElement('img');
  infoParagraph8.setAttribute("src", `${planet.image}`);
  container.appendChild(infoParagraph8);




};

module.exports = PlanetInfoView;
