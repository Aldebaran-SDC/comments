const db = require('./index');
const {newComment} = require('../createComment');

const tableCols = `(comment_id, song_id, user_id, user_name, user_icon, message, audio_position, posted_at)`;

const createComment = (req, res) => {
  var comment = newComment(req);
  ({comment_id, song_id, user_id, user_name, user_icon, message, audio_position, posted_at} = comment);

  //query using col names in tableCols and newCommnet output (destrucutured using es6 syntax)
  db.query(`INSERT INTO comments ${tableCols} VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`, [comment_id, song_id, user_id, user_name, user_icon, message, audio_position, posted_at], (err, result) => {
    if (err) {throw err};
    // res.status(201).json(`Comment added with ID: ${result.comment_id}`);
    // console.log(`Comment added with ID: ${result.insertId}`);
    console.log('Successfully added data to db');
  });
}

module.exports = {createComment}






