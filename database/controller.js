const Comments = require('./index');
const {newComment} = require('./createComment');
const mongoose = require('mongoose');

const postComment = function(params, callback) {
  var comment = new Comments(newComment());
  comment.save((err, data) => {
    if (err){return console.error(err)}
    callback(data);
  });
};

const updateComment = function({updateString}, callback) {
  Comments.updateOne({comment_id: 1000}, {message: updateString}, (err, res) => {
    if(err) {return console.error(err)}
    callback(res);
  });
};

const deleteComment = function(params, callback) {
  Comments.deleteOne({comment_id: 1000}, (err, res) => {
    if(err) {return console.error(err)}
    callback(res);
  });
};

// postComment();
// updateComment();
// deleteComment();

module.exports = {postComment, updateComment, deleteComment}
  