import React from 'react';
import FeedIndex from './feed/feed_index_container';
import NavBar from './navbar/navbar_container';

const Mainpage = () => {
    return(
        <div>
            <NavBar/>
            <FeedIndex/>
        </div>
    )
};

export default Mainpage;