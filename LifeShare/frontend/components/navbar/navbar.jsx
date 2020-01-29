import React from 'react';
import { Link } from 'react-router-dom';


class NavBar extends React.Component {

    constructor(props) {
        debugger;
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.processForm();
    };

    render (){
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
                    <Link to=''>
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