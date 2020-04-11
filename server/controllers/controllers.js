const mongodb = require('../../database/index.js');
const pgSQL = require('../../database/pgSQL/index');
const {newComment} = require('../../database/postComment')

// Define which database to use: mongodb or pgsql

var pgGetComments = (req, res) => {
  pgSQL.query(`SELECT * FROM comments10m WHERE song_id = $1`, [req.params.song_id], (err, result) => {
    if (err) { throw err };
    res.send(result.rows);
    // console.log(result.rows);
  });
}

var pgPostRandomComment = (req, res) => {
  console.log('request recieved')
  pgSQL.query('SELECT comment_id FROM comments10m ORDER BY comment_id DESC LIMIT 1', (err, result) => {
    if(err) {throw err};
    var nextCommentId = result.rows[0].comment_id + 1;
    var newPost = newComment(nextCommentId, parseInt(req.params.song_id));
    const tableCols = `(song_id,comment_id,user_id,audio_position,message,posted_at,user_icon,user_name)`;
    //write psql query for new post here
    console.log(newPost);
    pgSQL.query(`INSERT INTO comments10m ${tableCols} VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`, newPost, (err, result) => {
      if(err) {throw err};
      res.send(result);
    })
  })
}

var mongoGetComments = (req, res) => {
  mongodb.find({ song_id: req.params.song_id })
    .then((comments) => {
      res.send(comments);
      // console.log('These are the comments:', comments)
    })
    .catch(() => {
      res.status(404).send('no comments found');
    });
}



// module.exports.getComments = mongoGetComments;
module.exports = { pgGetComments, pgPostRandomComment};
