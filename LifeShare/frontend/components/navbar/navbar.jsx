import React from 'react';
import { Link } from 'react-router-dom';


class NavBar extends React.Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = { show: false };
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
    }

    showModal(e) {
        e.preventDefault();
        this.setState({ show: true })
    };

    hideModal(e){
        e.preventDefault();
        if ( e.target.className === 'uploadModal'){
            this.setState({ show: false })
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.processForm();
    };

    render (){
        const form = (
            <div onClick= { this.hideModal } className='uploadModal'>
                <form className='uploadForm'>
                    <div className='leftsideForm'>
                        <img className='postimage' src='assets/uploadimage.png'/>
                        <p>Upload image</p>
                    </div>
                    <div className='rightsideForm'>
                        <h1>Caption:</h1>
                        <textarea rows="5" cols="15" className='captionbox' placeholder='Type your caption here'></textarea>
                        <button className='captionSubmit'>Submit</button>
                    </div>
                </form>
            </div>
        )
        return (
            <div className='navbar'>
                <div className='left-icons'>
                    <Link className='splash-link' to='/'>
                        <img className='logo-icon' src={window.logoURL} />
                        <p className='logo-name-icon'>| LifeShare</p>
                    </Link>
                </div>
                <div className='right-icons'>
                    <Link to='/explore'>
                        <img className='explore-icon' src={window.exploreURL} />
                    </Link>
                    <img onClick={ this.showModal} className='addimage-icon' src='assets/addpic.png' />
                    { this.state.show && form }
                    <Link to='/testing'>
                        <img className='profile-icon' src={window.profileURL} />
                    </Link>
                    <button className='logout-button' onClick={this.handleSubmit} type='submit'>Log Out</button>
                </div>
            </div>
        )
    }
};

export default NavBar;

// route for line 20 to profile (need help)
// have a container component to connect the slice of state for the id of the user
// props.userId
// container mSTP, takes in state and set up key of  userId: state.session.id 
// in here this.props.userId