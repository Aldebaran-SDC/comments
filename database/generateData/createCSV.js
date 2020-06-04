const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const generateObject = require('./generateScript');

var countCSVFiles = 20;

var header1 = [
  // {id: 'id', title: 'id'},
  {id: 'comment_id', title: 'comment_id'},
  {id: 'audio_position', title: 'audio_position'},
  {id: 'message', title: 'message'},
  {id: 'posted_at', title: 'posted_at'},
  {id: 'song_id', title: 'song_id'},
  {id: 'user_icon', title: 'user_icon'},
  {id: 'user_id', title: 'user_id'},
  {id: 'user_name', title: 'user_name'},
]

var header2 = [
  // {id: 'id', title: 'id'},
  {id: 'comment_id', title: 'comment_id'},
  {id: 'song_id', title: 'song_id'},
  {id: 'user_id', title: 'user_id'},
  {id: 'audio_position', title: 'audio_position'},
  {id: 'message', title: 'message'},
  {id: 'posted_at', title: 'posted_at'},
  {id: 'user_icon', title: 'user_icon'},
  {id: 'user_name', title: 'user_name'},
]


console.time('Generate All CSV Files');
const csvWriter = createCsvWriter({
  // path: `testData/commentsData${index}.csv`,
  path: __dirname + `/commentsData2M.csv`,
  header: header2
});

function csvFile(index, callback) {
  console.time(`time to generate data set ${index}`);
  var data = generateObject(index);
  console.timeEnd(`time to generate data set ${index}`);
  
  console.time(`time to create CSV File ${index}`);
  csvWriter
    .writeRecords(data)
    .then(()=> {
      console.log('The CSV file was written successfully')
      console.timeEnd(`time to create CSV File ${index}`)
      if (index < countCSVFiles){
        //flush data
        data = ''
        index++;
        csvFile(index, () => {
          console.log(`Complete writing all CSV Files`)
          console.timeEnd('Generate All CSV Files')
        });
      } else {
        callback();
      }
    });
}

csvFile(0);