import React from 'react';
import Feed from './feed/feed';
import NavBar from './navbar/navbar_container';

const Mainpage = () => {
    return(
        <div>
            <NavBar/>
            <Feed/>
        </div>
    )
};

export default Mainpage;