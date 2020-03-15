/* eslint-disable camelcase */
const faker = require('faker');

var newComment = function(s_id) {
  const song_id = 107;
  const user_id = 201;

  const user_icon = faker.image.avatar();

  const user_name = faker.internet.userName();

  const posted_at = faker.date.recent();

  const randomWordCount = Math.floor(Math.random() * 30);
  const message = faker.random.words(randomWordCount);

  const audio_position = faker.random.number({
    min: 1,
    max: 80,
  });
  const newComment = {
    comment_id: 1000,
    song_id,
    user_id,
    user_name,
    user_icon,
    message,
    audio_position,
    posted_at,
  };

  return newComment; 
}

// console.log(newComment());
module.exports = {newComment}