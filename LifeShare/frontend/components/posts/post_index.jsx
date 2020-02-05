import React from 'react';
import PostIndexItem from './post_index_item';
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
            <div>
                <ul>
                    {this.props.posts.map(post => <PostIndexItem key={post.id} post = { post } />)}
                </ul>
            </div>
        )
    }
};

export default PostIndex;