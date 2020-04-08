import React from 'react';
import { Link } from 'react-router-dom';

class CommentIndex extends React.Component {

  constructor(props) {
    super(props)
  };

  render() {
    console.log(this.props)
    const { comments } = this.props;
    let comment;
    const commentItems = this.props.commentIds.map(id => {
      comment = comments[id]
      return (
        <li className="single-comment">
          <div className="comment-section">
            <img className="comment-profile-pic" src={comment.user.photoUrl}/>
            <div className="comment-combo">
              <Link to={`/user/${comment.user.id}`}>
                <span className="comment-username">{comment.user.username}</span>
              </Link>
              <span className="comment-body">{comment.body}</span>
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

export default CommentIndex;