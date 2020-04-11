const faker = require('faker');
const LoremIpsum = require("lorem-ipsum").LoremIpsum;

//SET PARAMETERS for data generation:
const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 2,
    min: 1
  },
  wordsPerSentence: {
    max: 16,
    min: 4
  }
});

var today = new Date();

//DATA GENERATION:
var newComment = function(comment_id, song_id = -1) {  
  
  const user_id = faker.random.number({
    min: 1,
    max: 1000,
  });

  const user_icon = faker.image.avatar();
  const user_name = faker.internet.userName();
  const posted_at = Date.parse(faker.date.between('2015-01-01', today));
  var message = lorem.generateParagraphs(1);
  const audio_position = faker.random.number({
    min: 1,
    max: 80,
  });

  return [
    song_id,
    comment_id,
    user_id,
    audio_position,
    message,
    posted_at,
    user_icon,
    user_name,
  ]
}

module.exports = {newComment}