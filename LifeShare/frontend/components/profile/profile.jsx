import React from 'react';
import NavBar from '../navbar/navbar';

class Profile extends React.Component {
    render () {
        return (
        <div>
            <NavBar />
            <div className='middle-container'>
                <div className='profile-picture'>
                    <img src='assets/puppy.png'/>
                </div>
                <div className='profile-header'>
                    <div className='profile-description'>
                        <p className='username'>Hero</p>
                        <p>I'm a fun, energetic good boy that loves to chase squirrels!</p>
                    </div>
                    <div className='user-stats'>
                        <span>3 posts</span>
                        <span>45 followers</span>
                        <span>98 following</span>
                    </div>
                    <div className='top-row-description'>
                        <h1>goodboi88</h1>
                        <button className='editprofile-button'>Edit Profile</button>
                    </div>
                </div>
            </div>
            <div className='profile-middleline'>
                <div className='middleline'>
                    <img className='grid-icon' src='assets/grid-icon.png'/>
                    <span>POSTS</span>
                </div>
            </div>
        </div>
        )
    }
};

export default Profile;

// regular in-line(span) only takes enough width and height, which depends on the size of the content.
// in-line block takes as much space left to right. wont add extra line 
// block (div) height will expand and add line break