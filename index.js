var Twitter = require('twitter');
var chalk = require('chalk');

var config = require('./config.json');
 
var client = new Twitter({
  consumer_key: config.consumerKey,
  consumer_secret: config.consumerSecret,
  access_token_key: config.accessToken,
  access_token_secret: config.accessTokenSecret
});

var currentTweetId;
var previousTweetId

module.exports = function(searchPhrase) {
  var params = {
    q: searchPhrase,
    count: 1
  };

  client.get('search/tweets', params, function(error, tweets, response) {
    if (!error) {
      // console.log(tweets);
      currentTweetId = tweets.statuses[0].id_str
      var params = {
        id: currentTweetId
      }
      // Let's fav this tweet
      client.post('favorites/create', params, function(error, json, response) {
        if (!error) {
          console.log("Faved " + currentTweetId + ": " + tweets.statuses[0].text);
          previousTweetId = currentTweetId;

          setTimeout( function() {
            // Now we can unfav previous tweet
            var params = {
              id: previousTweetId
            }
            client.post('favorites/destroy', params, function(error, json, response) {
              if (!error) {
                console.log("unfaved previous: " + previousTweetId);
              }
              else {
                console.log("couldn't unfav: " + error);
              }
            });
          }, 60000);
        }
        else {
          console.log("oh no: " + error);
        }
        
      })
    }
    else console.log(error);
  });
}

