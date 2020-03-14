const Comments = require('./index');
const {newComment} = require('./createComment');
const mongoose = require('mongoose');

const postComment = function(params, callback) {
  var comment = new Comments(newComment());
  comment.save((err, data) => {
    if (err){return console.error(err)}
    console.log(data);
    mongoose.disconnect();
  });
};

// postComment();

const updateComment = function(params, callback) {
  Comments.updateOne({comment_id: 1000}, {user_name: 'Test User'}, (err, res) => {
    if(err) {return console.error(err)}
    console.log(res.nModified);
    mongoose.disconnect();
  });
};

// updateComment();

const deleteComment = function(params, callback) {
  Comments.deleteOne({comment_id: 1000}, (err, res) => {
    if(err) {return console.error(err)}
    console.log(res.nModified);
    mongoose.disconnect();
  });
};

// deleteComment();



module.exports = {postComment, updateComment, deleteComment}
  