// eslint-disable-next-line max-classes-per-file
import React from 'react';
import moment from 'moment';
import axios from 'axios';

//SET env var in dockerfile for production;
// var localUrl = "http://localhost:8080";
// if (process.env.ec2Host) {
//   localUrl = `http://${process.env.ec2Host}:8000`;
// }
var localUrl = `http://3.101.21.253:8080`;
// var localUrl = `http://54.193.80.70:8080`;

moment().format();

var convertTimestamp = function(timestamp) {
  if (timestamp > 60) {
    var minutes = Math.floor(timestamp / 60);
    var seconds = timestamp - (minutes * 60);
    if (seconds < 9) {
      return minutes + ':0' + seconds;
    } else {
      return minutes + ':' + seconds;
    }
  }
  if (timestamp < 10) {
  return '0:0' + timestamp;
  } else {
    return '0:' + timestamp;
  }
}

class CommentList extends React.Component {
  render() {
    // console.log(this.props.comments);
    const commentNodes = this.props.comments
      .map((comment, index) => (
        <Comment author={comment.user_name} key={index} text={comment.message} audio_position={comment.audio_position} user_icon={comment.user_icon} posted_at={comment.posted_at} >
        </Comment>
      ));
    return (
      <div className='comment-list'>
        <div id="comments">
          <span className="comments_icon"><i className="fas fa-comment-alt"></i></span>
          <span className="comments_title"> {this.props.commentsLength} comments</span>
          <hr className="comments_hr">
          </hr>
          {commentNodes}
        </div>
      </div>
    );
  }
}

class Comment extends React.Component {
  render() {
    // console.log(this.props.posted_at);
    // console.log(moment(parseInt(this.props.posted_at)).format());
    return (
      <div className='comment'>

        <li className="comment_container">
          <img src={this.props.user_icon} className="comment_profile_pic"></img>
          <div className="comment_content">
            <span className="comment_username">{this.props.author}</span>
            <span className="comment_at"> at </span>
            <span className="comment_timestamp">{convertTimestamp(this.props.audio_position)}</span>
            {/* <span className="comment_postedAt">{moment(this.props.posted_at).fromNow()}</span> */}
            <span className="comment_postedAt">{moment(parseInt(this.props.posted_at)).fromNow()}</span>
            <div className="comment_text_container">
              <p className="comment_text">{this.props.text}</p>
            </div>
          </div>
        </li>
      </div>
    );
  }
}

class CommentModule extends React.Component {
  constructor(props) {
    super();
    this.state = {
      songId: (window.location.href.split("/").pop() || 1),
      comments : [{
        _id: '5e3d0371163ea548f848eab1', comment_id: 34, song_id: 21, user_id: 81, user_name: 'Claudine_Leuschke', user_icon: 'https://s3.amazonaws.com/uifaces/faces/twitter/webtanya/128.jpg', message: 'sensor project hack Customer Illinois neutral digital Barbados Dollar architectures Concrete Berkshire transmit Idaho Dalasi Customizable cross-platform South Dakota SCSI', audio_position: 105, posted_at: 1581024234969, __v: 0}]
    };
  }

  componentDidMount() {
    console.log(`bundle.js from S3 is being loaded`)
      var songId = window.location.pathname.split('/');
      songId = songId[songId.length-2] === 'songs' ? songId[songId.length-1] : songId[songId.length-2] === '' ? 1 : songId[songId.length-2];
      axios
				// .get(`${localUrl}/comment/${songId}`)
				.get(`/comment/${songId}`)
				.then((response) => {
					this.setState(
						{
							songId: songId,
							comments: response.data,
						},
						() => {
							console.log(`Mounting songID: ${this.state.songId}`);
						}
					);
				})
				.catch((error) => {
					console.log("Something went wrong when retrieving comments", error);
				});

  }

  render() {
    return (
      <div className='comment-box'>
        <CommentList comments={this.state.comments} commentsLength={this.state.comments.length} />
      </div>
    );
  }
}

export default CommentModule;