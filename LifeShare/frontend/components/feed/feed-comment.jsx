import React from 'react';
import { Link } from 'react-router-dom';

class FeedComment extends React.Component {

  constructor(props) {
    super(props)
  };

  render() {
    const { comments } = this.props;
    let comment;
    const commentItems = this.props.commentIds.map(id => {
      comment = comments[id]
      return (
        <li className="feed-single-comment">
          <div className="comment-section">
            {this.props.feed ? null : <img className="comment-profile-pic" src={comment.user.photoUrl} />}
            <div className="feed-comment-combo">
              <Link to={`/user/${comment.user.id}`}>
                <span className="feed-comment-username">{comment.user.username}</span>
              </Link>
              <span className="feed-comment-body">{comment.body}</span>
            </div>
          </div>
        </li>
      )
    })
    return (
      <ul className="realcomments">
        {commentItems}
      </ul>
    )
  }
};

export default FeedComment;