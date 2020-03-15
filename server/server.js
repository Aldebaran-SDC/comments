
const path = require('path');
const express = require('express');
const Comments = require('../database/index.js');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv').config({
  path: path.join(__dirname, '../.env')
});

const port = 8080;
const {postComment, updateComment, deleteComment} = require('../database/controller');


const app = express();

app.use(express.static(path.join(__dirname, '../client/dist')))
app.use('/song/:song_id', express.static(path.join(__dirname, '../client/dist')))
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan('tiny'));

// TAKA CRUD
//Create - create a comment. Input: songID and comment
//Read - Read a comment by given id, already implemented
//Update - update current comment
//Delete - Delete comment by messageID (mongo's unique id)

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

app.post('/api/createComment/:song_id', (req, res) => {
  postComment(req.params.song_id, (post) => {
    res.send(post);
  });
});

app.patch('/api/updateComment/:song_id/:updateString', (req, res) => {
  var params = {
    song_id: req.params.song_id,
    updateString: req.params.updateString
  }
  updateComment(params, (update) => {
    res.send(update);
  })
});

app.delete('/api/deleteComment/:song_id', (req, res) => {
  deleteComment(req.params.song_id, (del) => {
    res.send(del);
  });
});

app.listen(process.env.PORT, () => {
  console.log(`Server running  on port ${process.env.PORT}...`);
});