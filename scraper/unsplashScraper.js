// unsplash scraper
const axios = require('axios');
const fs = require('fs');
const https = require('https');
const auth = require('./unsplashConfig.js');

// Node.js Function to save image from External URL.
function saveImageToDisk(url, localPath) {
  const fullUrl = url;
  const file = fs.createWriteStream(localPath);
  const request = https.get(url, (response) => {
    response.pipe(file);
  });
}
const searchAndSaveUnsplash = (searchTerm, qty) => {
  const unsplashURL = `https://api.unsplash.com/search/photos?query=${searchTerm}&page=2&per_page=${qty}&client_id=${auth}`
  axios.get(unsplashURL)
    .then(({ data }) => {
      data.results.forEach((result, i) => {
        saveImageToDisk(result.urls.regular, `./thailandPics/tripadvisor_thailand_${i+62}.jpg`)
      });
    })
    .catch((err) => {console.log(err)}
}

searchAndSaveUnsplash('thailand', 30)