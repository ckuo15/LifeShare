import React from 'react';
import commentsContainer from './comments_container';
import { Link } from 'react-router-dom';

class CommentIndex extends React.Component {

  constructor(props) {
    super(props)
  };

  componentDidMount() {
    this.props.requestComments(this.props.match.params.postId); 
  }


  componentDidUpdate(prevProps) {
    if (prevProps.match.params.postId !== this.props.match.params.postId) {
      this.props.requestComments(this.props.match.params.postId)
    }
  };

  render() {
    return (
      <div className='comment-container'>
        <ul className='comment-list'>
          {this.props.comments.map(comment => <commentsContainer key={comment.id} comment={comment} />)}
        </ul>
      </div>
    )
  }
};

export default CommentIndex;