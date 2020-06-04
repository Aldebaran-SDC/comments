// generator.js
const fs = require('fs')
const argv = require('yargs').argv
const {newComment} = require('../createComment');

const lines = argv.lines || 10
const filename = argv.output || 'posts.csv'
const stream = fs.createWriteStream(filename)

const startWriting = (writeStream, encoding, done) => {
  let i = lines //song_id
  var index = 0; //comment_id
  function writing(){
    let canWrite = true
    do {
      i--
      //create loop here for multiple comments for each songId 
      for (var j = 0; j < Math.floor(1 + Math.random() * 6 / (1 + Math.floor(Math.random() * 3))); j++){
        let post = newComment(index, lines-i-1);
        //check if i === 0 so we would write and call `done`
        if(i === 0){
          // we are done so fire callback
          index++;
          writeStream.write(post, encoding, done)
        }else{
          // we are not done so don't fire callback
          if (index%(lines/10) === 0) {
            console.log(`creating and writing data number: ${index}` )
          }
          index++
          writeStream.write(post, encoding)
        }
      }

      //else call write and continue looping
    } while(i > 0 && canWrite)
    if(i > 0 && !canWrite){
      //our buffer for stream filled and need to wait for drain
      // Write some more once it drains.
      writeStream.once('drain', writing);
    }
  }
  writing();
}

//write our `header` line before we invoke the loop
stream.write(`song_id,comment_id,user_id,audio_position,message,posted_at,user_icon,user_name\n`, 'utf-8');
//invoke startWriting and pass callback
console.time('CSV File created')
startWriting(stream, 'utf-8', () => {
  stream.end();
  // console.log(`Finished CSV file creation. Created ${index} comments`)
  console.timeEnd('CSV File created');
})
console.log('async not done yet. Should log before end.');