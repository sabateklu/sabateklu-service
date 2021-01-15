/* eslint-disable no-console */
const faker = require('faker');

const Adventures = require('./index.js');

function getRandomInt(max) {
  return (Math.random() * Math.floor(max)).toFixed(2);
}

function picUrl(num) {
  const base = `https://tutorial90005123.s3.us-east-2.amazonaws.com/thailandPics/tripadvisor_thailand_${num}.jpg`;

  return base;
}

// eslint-disable-next-line func-names
const returnAdventure = function (num) {
  return {
    name: faker.address.streetName(),
    image: picUrl(num),
    reviews: faker.random.number(),
    rating: getRandomInt(5),
    price: `$${faker.commerce.price()}`,
    liked: faker.random.boolean(),
    timesBooked: faker.random.number(),
  };
};

// eslint-disable-next-line no-plusplus
for (let i = 0; i < 100; i++) {
  Adventures.create(returnAdventure(i))
    .then((results) => {
      // eslint-disable-next-line no-console
      console.log(results);
    })
    .catch((err) => {
      console.log(err);
    });
}
