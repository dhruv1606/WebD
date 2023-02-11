const jokes = require("give-me-a-joke");
const colors = require("colors");

jokes.getRandomDadJoke(function (joke){
  return console.log(joke.rainbow);
});

