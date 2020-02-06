import React from 'react';
import { formatDate } from '../../utils/date_util';


class PostIndexItem extends React.Component {
    constructor(props){
        super(props),
        this.state={ show: false };
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
    };

    showModal(e){
        e.preventDefault();
        this.setState({ show: true})
    }

    hideModal(e){
        if (e.target.className === 'postshowModal'){
        this.setState({show: false})
        }
    };

    render(){
        const profilepicUrl = this.props.user.photoUrl ? this.props.user.photoUrl : window.defaultPicURL;
        const photoUrl = this.props.post.photoUrl;
        const postModal = (
            <div onClick={ this.hideModal } className='postshowModal'>
                <form className='postshowForm'>
                    <div className='left-postimage'>
                        <img className='postshow-pic' src={photoUrl} />
                    </div>
                    <div className='right-postshow'>
                        <div className='postshow-cred'>
                            <img className='profilepicshow' src={ profilepicUrl }/>
                            <p className='usernameshow'>{this.props.user.username}</p>
                        </div>
                        <div className='comments'>
                        
                        </div>
                        <div className='heartscomments'>
                            <img className='heart-icon' src={ window.hearticonURL }/>
                            <img className='comment-icon' src={window.commenticonURL} />
                            <p className='datecreated'>{formatDate(this.props.post.created_at)}</p>
                        </div>
                        <div className='addComment'>
                            <input type='text' placeholder='Add a comment...'/>
                            <p className='postbutton'>Post</p>
                        </div>
                    </div>
                </form>
            </div>
        )
        return(
            <li key={this.props.post.id} className='post'>
                <img onClick={ this.showModal } className='post-pic' src={ photoUrl } />
                { this.state.show && postModal}
            </li>
        )
    }
}

export default PostIndexItem;

// showing this post on the index
