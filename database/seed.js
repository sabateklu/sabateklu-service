const db = require('./index.js');
const faker = require('faker');

const Adventures = require('./Adventures.js');


function getRandomInt(max) {
  return (Math.random() * Math.floor(max)).toFixed(2);
};

function picUrl(num) {
  let base = `https://tutorial90005123.s3.us-east-2.amazonaws.com/thailandPics/tripadvisor_thailand_${num}.jpg`;

  return base;
}

let returnAdventure = function (num) {
  return {
    name: faker.address.streetName(),
    image: picUrl(num),
    reviews: faker.random.number(),
    rating: getRandomInt(5),
    price: `$${faker.commerce.price()}`,
    liked: faker.random.boolean(),
    timesBooked: faker.random.number()
  }
}


for (var i = 0; i < 100; i++) {
  Adventures.create(returnAdventure(i))
  .then((results)=> {
    console.log(results);
  })
  .catch((err)=> {
    console.log(err)
  })
}

