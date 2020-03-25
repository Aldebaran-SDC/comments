const {newComment} = require('../createComment');

function generateObject (index, callback) {
  var data = [];
  var noData = 100;
  for(var i = index * noData;  i < index * noData + noData; i++) {
    var comment = newComment(i);
    data.push(comment);
  }
  console.log(`created ${noData} records for file${index}`)
  return data;
}

module.exports = generateObject;


