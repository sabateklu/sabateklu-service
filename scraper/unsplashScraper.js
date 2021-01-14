//unsplash scraper
const axios = require('axios');
const fs = require('fs');
var https = require('https');
const { auth } = require('./unsplashConfig.js');

//Node.js Function to save image from External URL.
function saveImageToDisk(url, localPath) {
  var fullUrl = url;
  var file = fs.createWriteStream(localPath);
  var request = https.get(url, function(response) {
  response.pipe(file);
  });
}
const searchAndSaveUnsplash = function ( searchTerm, qty ) {
  const unsplashURL = `https://api.unsplash.com/search/photos?query=${searchTerm}&page=2&per_page=${qty}&client_id=${auth}`
  axios.get(unsplashURL)
  .then(({ data }) => {
    data.results.forEach((result, i) => {
      saveImageToDisk(result.urls.regular, `./thailandPics/tripadvisor_thailand_${i}.jpg`)
    })
  })
  .catch(err => console.log(err))
}
searchAndSaveUnsplash('thailand', 2)