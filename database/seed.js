const db = require('./index.js');
const faker = require('faker');

const Adventures = require('./Adventures.js');

function getRandomInt(max) {
  return Math.random() * Math.floor(max);
};

const adventureSeed = [
  {
    name: faker.address.streetName(),
    image: faker.image.city(),
    reviews: faker.random.number(),
    rating: getRandomInt(5),
    price: faker.commerce.price(),
    liked: faker.random.boolean(),
    timesBooked: faker.random.number()
  }
]

const insertAdventures = function () {
  Adventures.create(adventureSeed)
  .then((results)=> {
    console.log(results);
  })
  .catch((err)=> {
    console.log(err)
  })
}
insertAdventures();