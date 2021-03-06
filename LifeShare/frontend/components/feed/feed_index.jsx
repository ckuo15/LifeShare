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
                        {this.props.posts.reverse().map(post => <FeedItemContainer key={post.id} post = {post }/>)}
                    </ul>
                </div>
                <div className='feed-right'>
                    <div className='feed-dev-info'>
                        <img className='developer-pic' src={window.me}/> 
                        <div className='developer-name-title'>
                            <a href="https://www.linkedin.com/in/cindy-kuo-92621a1a5/" target="_blank"><p className='feed-dev-info-name'>Cindy Kuo</p></a>
                            <p className='developer-title'>LifeShare Developer</p>
                        </div>
                    </div>
                    <div className='feed-dev-about'>
                        <p className='feed-dev-aboutme'>About Me</p>
                        <p className='about-me-description'>#SoftwareEngineer</p>
                        <p className='about-me-description'>#Psych&BrainSciences</p>
                        <p className='about-me-description'>#Ruby on Rails</p>
                        <p className='about-me-description'>#JavaScript</p>
                        <p className='about-me-description'>#React</p>
                        <p className='about-me-description'>#HTML/CSS</p>
                        <p className='about-me-description'>#PostgreSQL</p>
                        <p className='about-me-description'>#Fullstack</p>
                        <p className='about-me-description'>#Problemsolving</p>
                    </div>
                    <div className='feed-dev-links'>
                        <p className='feed-dev-links-sites'>Suggestions For You</p>
                        <div className='feed-dev-icons'>
                            <a href="https://www.linkedin.com/in/cindy-kuo-92621a1a5/" target="_blank"><i className="fab fa-linkedin"></i></a>
                            <a href="https://github.com/ckuo15" target="_blank"><i className="fab fa-github-square"></i></a>
                            <a href="https://www.cindycwkuo.com/" target="_blank"><i className="fas fa-user-alt"></i></a>
                            <a href="https://angel.co/u/cindy-kuo-2" target="_blank"><i className="fab fa-angellist"></i></a>
                        </div>
                    </div>
                    <p className="footer"><i className="far fa-copyright"></i>2020 LIFESHARE</p>
                </div>
            </div>
        )
    }
};

export default Feed;