const client = require('./index');

var tableName = 'comments10M';

//comments3 - currently has 10.5M data - cannot search by song_id
//comments


// CREATE TABLE:
  //Compound multiple keys to add search by functionality
  var soundCloudCommentsTable =
  `CREATE TABLE IF NOT EXISTS soundcloud.${tableName}(
    song_id int,
    comment_id int,
    user_id int,
    audio_position int,
    message text,
    posted_at timestamp,
    user_icon text,
    user_name text,
    PRIMARY KEY (song_id, comment_id, user_id)
  )`

//CREATE KEYSPACE
  var createKeySpace = 
  `CREATE KEYSPACE IF NOT EXISTS soundcloud
  WITH REPLICATION = { 
   'class' : 'SimpleStrategy', 
   'replication_factor' : 1 
  };`

client.execute(soundCloudCommentsTable, (err, result) => {
  if (err) {
    console.error(err)
    return err;
  };
    console.log('Query Complete')
    console.log(result)
  });