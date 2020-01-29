import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';


class navBar extends React.Component {
    render (){
        return (
            <div className='navbar'>
                <Link to='/'>
                    <img className='logo-icon' src="/assets/image5.png" />
                    <br/>
                    <p className='logo-name-icon'>| LifeShare</p>
                </Link>
                <Link to='/explore'>
                    <img className='explore-icon' src="/assets/explore.png" />
                </Link>
                <Link>
                    <img className='profile-icon' src="/assets/profile.png" />
                </Link>
            
            </div>
            
        )
    }
};

export default navBar;

// route for line 17 to profile (need help)