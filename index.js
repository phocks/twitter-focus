var Twitter = require('twitter');
var chalk = require('chalk');

var config = require('./config.json');
 
var client = new Twitter({
  consumer_key: config.consumerKey,
  consumer_secret: config.consumerSecret,
  access_token_key: config.accessToken,
  access_token_secret: config.accessTokenSecret
});
 
module.exports = function(screenName) {
  var params = {
    screen_name: 'screenName',
    count: 1
  };
  
  client.get('statuses/user_timeline', params, function(error, tweets, response) {
    if (!error) {
      console.log(tweets);
    }
    else console.log(error);
  });
}

