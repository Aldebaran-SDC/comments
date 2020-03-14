
const path = require('path');
const express = require('express');
const Comments = require('../database/index.js');
const cors = require('cors');
const dotenv = require('dotenv').config({
  path: path.join(__dirname, '../.env')
});

const port = 8080;



const app = express();

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

app.post('/api/createComment/:song_id', (req, res) => {
  console.log(`create comment`);
  res.send('create Comment now!');
});

app.patch('/api/updateComment/:song_id/:updateLast', (req, res) => {
  console.log('update Comment');
  res.send(`this is song_id: ${req.params.song_id}, updateLast: ${req.params.updateLast}`);
});

app.delete('/api/deleteComment/:song_id', (req, res) => {
  console.log('delete Comment');
  res.send('update comment');
});

// TAKA CRUD
//Create - create a comment. Input: songID and comment
//Read - Read a comment by given id, already implemented
//Update - update current comment
//Delete - Delete comment by messageID (mongo's unique id)

app.listen(process.env.PORT, () => {
  console.log(`Server running  on port ${process.env.PORT}...`);
});