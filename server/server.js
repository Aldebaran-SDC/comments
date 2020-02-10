const path = require('path');
const express = require('express');
const Comments = require('../database/index.js');
const cors = require('cors');
// const comment = require('../database/comments.js');


const app = express();
const port = 8080;

app.use(express.static(path.join(__dirname, '../client/dist')))
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get('/comment/:song_id', (req, res) => {
  Comments.find({ song_id: req.params.song_id })
    .then((comments) => {
      res.send(comments);
      console.log('These are the comments:', comments)
    })
    .catch(() => {
      res.status(404).send('no comments found');
    });
});

app.listen(port, () => {
  console.log(`Server running  on port ${port}...`);
});