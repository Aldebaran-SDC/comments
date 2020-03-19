const {createComment} = require('./query');

for (var i = 101000; i < 102000; i++ ) {
  // console.log(`on loop: ${i}`)
  createComment(i);
}

// createComment(1);

//TAKA NOTES
//Takes about 15 seconds to persist 1000 rows of data

//1000 rows     ~   15 seconds
//10000 rows    ~   20 seconds
//100000 rows   ~   5 minutes


