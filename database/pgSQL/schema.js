const {Pool} = require('pg');
const path = require('path');
const dotenv = require('dotenv').config({
  path: path.join(__dirname, '../../.env')
});

const pool = new Pool({
  user: 'me',
  host: 'localhost',
  database: 'soundCloud',
  password: 'password',
  port: 5432
});

var createTable = 
`CREATE TABLE comments10M (
  song_id         integer,
  comment_id      integer,
  user_id         integer,
  audio_position  integer,
  message         character varying,
  posted_at       bigint,
  user_icon       character varying,
  user_name       character varying
)`;
var copyData = `COPY comments10M (song_id,comment_id,user_id,audio_position,message,posted_at,user_icon,user_name) FROM '/Users/takanori.sono/galvanizeRepos/SeniorPhase/database/soundCloudCommentsSongs10M.csv' DELIMITER ',' CSV HEADER;`;

console.time('Time to Query');
pool.query(copyData,(err, result) => {
  if (err) {console.log(err)}
  console.log(result);
  console.timeEnd('Time to Query');
});
