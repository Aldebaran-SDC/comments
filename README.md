# Comments

## Important
This app uses environment variables that are defined in a separate .env file. The .env files are not saved in the repo for security reasons. Anytime the app is deployed to a new environment, the connection uri to connect with the database and the server port number need to be defined in the .env file. 

## Seed the database:
npm run seed

## Start the server:
npm run serverstart

<!-- TAKA implemented CRUD -->
## CRUD API Endpoints:
### Create
**/api/createComment/:song_id**
This is a post request to create new comment. Currently defaulted to create a comment with comment_ID 1000 for song_id 201 no matter the song_id request parameter. Does not need to be unique. Will randomly generate comment everytime endpoint is hit. 

### Read
**/api/updateComment/:song_id/:updateString**
This is a patch request to update a comment. Currently defaulted to update comment with comment_ID 1000 for song_id 201 no matter the song_id request parameter. Will update the comment's message with the updateString request parameter. Will only update first comment in database that matches above paramters.

### Update
**/comment/:song_id**
Legacy code. This is a get request to get all comments for given song_id. 

### Delete
**/api/deleteComment/:song_id**
This is a delete request to delete a comment. Currently defaulted to delete comment with comment_ID 1000 for song_id 201 no matter the song_id request parameter. Will only delete first comment in database that matches above parameters. 



