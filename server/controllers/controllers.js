const mongodb = require('../../database/index.js');
const pgSQL = require('../../database/pgSQL/index');

// Define which database to use: mongodb or pgsql

var pgGetComments = (req, res) => {
  pgSQL.query(`SELECT * FROM comments10m WHERE song_id = $1`, [req.params.song_id], (err, result) => {
    if (err) { throw err };
    res.send(result.rows);
    console.log(result.rows);
  });
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
module.exports.getComments = pgGetComments;
