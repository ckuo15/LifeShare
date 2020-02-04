import React from 'react';

class Feed extends React.Component {
    render (){
        return (
            <div>
                <img className='construction' src={ window.constructionURL }></img>
            </div>
        )
    }
};

export default Feed;