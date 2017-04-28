// var Twitter = require('twitter');
// var chalk = require('chalk');

// var config = require('./config.json');


 
// var client = new Twitter({
//   consumer_key: config.consumerKey,
//   consumer_secret: config.consumerSecret,
//   access_token_key: config.accessToken,
//   access_token_secret: config.accessTokenSecret
// });

var doThing = require('./index.js');

doThing('vegan');
setInterval(function() { doThing('vegan'); }, 70000);

 
// var params = {screen_name: 'phocks'};
// client.get('statuses/user_timeline', params, function(error, tweets, response) {
//   if (!error) {
//     console.log(tweets);
//   }
//   else console.log(error);
// });

// var stream = client.stream('statuses/filter', {track: 'australia'});
// stream.on('data', function(event) {

//   console.log(chalk.yellow(event && event.user && "@" + event.user.screen_name + ": ") + event.text );
// });

// stream.on('error', function(error) {
//   throw error;
// });

// var cursor = "-1";

// var userIndex = 0;

// getIdsFollowing();

// //setInterval(listFollowing, 5000);

// function getIdsFollowing() {
//   var params = {
//     count: 5000,
//     cursor: cursor
//   };

//   client.get('friends/ids', params, function(error, json, response) {
//     if (!error) {
//       console.log(json);
//       var friendList = json.ids;
//       friendList.reverse();
//       cursor = json.next_cursor_str;
//       var userId = friendList[0];
//       console.log(friendList[0]);

//       processFollowing(userId);
//       setInterval(function() { 
//         userId = friendList[userIndex];
//         processFollowing(userId) 
//       }, 60000);

//     }
//     else console.log(error);
//   });
// }


// function processFollowing(userId) {
//   var params = {
//     user_id: userId
//     };
//   client.get('friendships/lookup', params, function(error, json, response) {
//     if (!error) {
//       console.log(json); 
//       console.log(json[0].connections.indexOf("followed_by"));

//       if (!json[0].connections.indexOf("followed_by")) {
//         console.log("Not followed by, unfollowing");
//         userIndex++;
//       }
//       else {
//         console.log("Followed by, continuing");
//         userIndex++;
//       }
//     }
//     else console.log(error);
//   });
// }


