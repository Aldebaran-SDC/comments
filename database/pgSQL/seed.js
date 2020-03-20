const {newComment} = require('../createComment');
const db = require('./index');

var queryRows = 10000;

function insertMultComments(startIndex, callback) {
  var queryString = '';
  //number of rows being queried
  for (var i = startIndex; i < startIndex + queryRows; i++){
    var comment = newComment(i);
    ({comment_id, song_id, user_id, user_name, user_icon, message, audio_position, posted_at} = comment);
    var value = `(${comment_id},${song_id},${user_id},'${user_name}','${user_icon}','${message}',${audio_position},TO_DATE('2020/03/18','YYYY/MM/DD'))`
    queryString = queryString === '' ? queryString.concat(value) : queryString.concat(`,${value}`);
  }

  const tableCols = `(comment_id, song_id, user_id, user_name, user_icon, message, audio_position, posted_at)`;
  queryString = `${queryString};`;
    db.query(`INSERT INTO comments ${tableCols} VALUES ${queryString}`, (err, result) => {
      if (err) {throw err};
      // console.log('Successfully added data to db');
      callback();
    });
}  

//Use recursion to keep calling 
var counter = 0;
function recurseInsert() {
  //counter should be 10000 for 1000 rows
  if (counter < 200) {
    insertMultComments(counter * queryRows , () => {
      console.log(`Data set: ${counter * queryRows} Successfully added data to db`);
      counter++;
      recurseInsert();
    });
  } else {
    console.log('finished querying data');
  }
}

recurseInsert();



