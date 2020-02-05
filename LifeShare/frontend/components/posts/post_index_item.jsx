import React from 'react';

class PostIndexItem extends React.Component {
    constructor(props){
        super(props)
    };

    render(){
        const photoUrl = this.props.post.photoUrl;
        return(
            <li key={this.props.post.id} className='post'>
                <img className='post-pic' src={ photoUrl } />
            </li>
        )
    }
}

export default PostIndexItem;

// showing this post on the index
