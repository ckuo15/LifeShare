import React from 'react';
import NavBar from '../navbar/navbar';

class Profile extends React.Component {

    constructor(props){
        super(props);
        this.state = { show: false }
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
    }

    showModal(e) {
        e.preventDefault();
        this.setState( {show: true });
    };

    hideModal(e) {
        e.preventDefault();
        if (e.target.className === 'profileEditModal'){
            this.setState( { show: false })
        }
    };

    render () {
        const form = (
            <div onClick={ this.hideModal } className='profileEditModal'>
                <form className='editForm'>
                    <h1>Edit Profile</h1>
                    <div className='leftForm'>
                        <img className='profileimage' src='assets/puppy.png' />
                        <p>Change Profile Picture</p>
                    </div>
                    <div className='rightForm'>
                        <h1>Name: </h1>
                        <input type='text' className='namebox' placeholder='Name'/>
                        <h1>Bio: </h1>
                        <textarea rows="5" cols="8" className='biobox' placeholder='Type your bio here'></textarea>
                        <button>Update</button>
                    </div>
                </form>
            </div>
        )
        return (
        <div>
            <NavBar />
            { this.state.show && form }
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
                        <span>16895 followers</span>
                        <span>98 following</span>
                    </div>
                    <div className='top-row-description'>
                        <h1>goodboi88</h1>
                        <button onClick={ this.showModal } className='editprofile-button'>Edit Profile</button>
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