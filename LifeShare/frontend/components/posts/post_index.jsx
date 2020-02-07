import React from 'react';
import PostIndexItemContainer from './post_index_item_container';
import { Link } from 'react-router-dom';


class PostIndex extends React.Component {

    constructor(props){
        super(props)
    };

    componentDidMount() {
        this.props.requestPosts(this.props.match.params.userId); //actions that is in the container
    }
    // need componentdidupdate so the state changes when you change the URL.
    // state will remain the same until you refresh

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.userId !== this.props.match.params.userId) {
            this.props.requestPosts(this.props.match.params.userId)
        }
    };

    render(){
        return (
            <div className='post-container'>
                <ul className='list'>
                    {this.props.posts.map(post => <PostIndexItemContainer key={post.id} post = { post } />)}
                </ul>
            </div>
        )
    }
};

export default PostIndex;