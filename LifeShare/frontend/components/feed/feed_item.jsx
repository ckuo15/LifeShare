import React from 'react';
import FeedCommentContainer from "./feed_comment_container";
import { formatDate } from '../../utils/date_util';
import { Link } from 'react-router-dom';


class FeedItem extends React.Component{
  constructor(props){
    super(props),
    this.state={
      comment: ''
    }
  };

  handleComment() {
    if (this.state.comment === '') return;
    this.props.createComment({
      body: this.state.comment,
      post_id: this.props.post.id
    }).then(() => {
      this.setState({ comment: '' })
    });
  }

  render(){
    const photoUrl = this.props.post.photoUrl;
    return(
        <li key={this.props.post.id} className='feed-post-item'>
          <div className='feed-post-item-container'>
            <div className='feed-post-userinfo'>
              <img className='feed-profile-pic' src={this.props.post.user.photoUrl}/>
              <p className='feed-username'>{this.props.post.user.username}</p>
            </div>
            <img className='feed-post-pic' src={photoUrl} />
            <div className='feed-heartscomments'>
              <label htmlFor="feed-comment-iconn"><img className='feed-comment-icon' src={window.commenticonURL} /></label>
              {/* <p className='datecreated'>{formatDate(this.props.post.created_at)}</p> */}
            </div>
            <div className='usernamecaption'>
              <Link to={`/user/${this.props.post.user.id}`}>
                <span className='feed-usernamedisplay'>{this.props.post.user.username}</span>
              </Link>
              <span className='feed-caption'>{this.props.post.caption}</span>
            </div>
            <div className='feed-comments'>
              <FeedCommentContainer commentIds={this.props.post.comment_ids} feed={true}/>
            </div>
            <div className='feed-added-time'>

            </div>
            <div className='feed-addComment'>
              <input id="feed-comment-iconn" type='text' placeholder='Add a comment...' onKeyDown={e => e.keyCode === 13 ? this.handleComment(e) : null} onChange={e => this.setState({ comment: e.target.value })} value={this.state.comment} />
              <p className='feed-postbutton' onClick={e => this.handleComment(e)}>Post</p>
            </div>
          </div>
        </li>
    )
  }
};

export default FeedItem;