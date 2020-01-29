import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';


class navBar extends React.Component {
    render (){
        return (
            <div className='navbar'>
                <div className='left-icons'>
                    <Link to='/'>
                        <img className='logo-icon' src={window.logoURL} />
                        <br/>
                        <p className='logo-name-icon'>| LifeShare</p>
                    </Link>
                </div>
                <div className='right-icons'>
                    <Link to='/explore'>
                        <img className='explore-icon' src={window.exploreURL} />
                    </Link>
                    <Link>
                        <img className='profile-icon' src={window.profileURL} />
                    </Link>
                </div>
            </div>
            
        )
    }
};

export default navBar;

// route for line 17 to profile (need help)