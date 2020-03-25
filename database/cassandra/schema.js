const client = require('./index');

var tableName = 'comments3';

// CREATE TABLE:
var createTable = 
  `CREATE TABLE IF NOT EXISTS testkeyspace.${tableName}(
    comment_id int PRIMARY KEY, 
    song_id int,
    user_id int,
    user_name varchar,
    user_icon varchar,
    message varchar,
    audio_position int,
    posted_at timestamp
  )`


client.execute(createTable, (err, result) => {
  if (err) {
    console.error(err)
    return err;
  };
    console.log('table created')
  });