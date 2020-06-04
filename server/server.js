require('newrelic');
const path = require('path');
const express = require('express');
const Comments = require('./controllers/controllers');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const {postComment, updateComment, deleteComment} = require('../database/controller');

const app = express();

app.use(express.static(path.join(__dirname, '../client/dist')))
app.use('/song/:song_id', express.static(path.join(__dirname, '../client/dist')))
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan('tiny'));

app.get('/testing', (req, res) => res.send('You pinged the server correctly!')) 
app.get('/comment/:song_id', Comments.pgGetComments);
app.get('/postRandomComment', Comments.pgPostRandomComment);
app.get('/postComment/:song_id', Comments.pgPostComment);
app.get('/getTest', Comments.pgGetTest);


// TAKA CRUD
//Create - create a comment. Input: songID and comment
//Read - Read a comment by given id, already implemented
//Update - update current comment
//Delete - Delete comment by messageID (mongo's unique id)

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