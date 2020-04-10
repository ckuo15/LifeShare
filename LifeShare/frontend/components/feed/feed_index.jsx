import React from 'react';
import FeedItemContainer from './feed_item_container';

class Feed extends React.Component {

    constructor(props){
        super(props)
    };

    componentDidMount(){
        this.props.requestFeedPosts();
    }

    render (){
        return (
            <div className='feedpost-container'>
                <div className='feed-left'>
                    <ul className='feed-list'>
                        {this.props.posts.map(post => <FeedItemContainer key={post.id} post = {post }/>)}
                    </ul>
                </div>
                {/* <div className='feed-right'>
                    <div className='feed-dev-info'>
                        <p className='feed-dev-info-name'>Cindy Kuo</p>
                    </div>
                    <div className='feed-dev-links'>
                        <p className='feed-dev-links-sites'>Suggestions</p>
                    </div>
                </div> */}
            </div>
        )
    }
};

export default Feed;