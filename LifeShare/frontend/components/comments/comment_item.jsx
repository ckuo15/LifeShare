import React from "react";
import { withRouter } from "react-router-dom";



class commentItem extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <li className="comment-container">
        <p>{this.props.comment}</p>
      </li>
    )
  }
};

export default withRouter(commentItem);