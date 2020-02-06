import React from 'react';
import PostIndexItemContainer from './post_index_item_container';
import { Link } from 'react-router-dom';


class PostIndex extends React.Component {

    constructor(props){
        super(props)
    };

    componentDidMount() {
        this.props.requestPosts(); //actions that is in the container
    }

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