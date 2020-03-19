const {Pool} = require('pg');
const pool = new Pool({
  user: 'me',
  host: 'localhost',
  database: 'soundCloud',
  password: 'password',
  port: 5432
});

var createTable = 
`CREATE TABLE comments2 (
  user_name       character varying,
  user_id         integer,
  user_icon       character varying,
  song_id         integer,
  message         character varying,
  audio_position  integer,
  posted_at       date
)`;

pool.query(createTable,(err, result) => {
  if (err) {console.throw(err)}
  console.log(result);
});