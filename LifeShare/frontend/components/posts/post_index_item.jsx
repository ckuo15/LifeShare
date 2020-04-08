import React from 'react';
import { formatDate } from '../../utils/date_util';
import CommentContainer from "../comments/comments_container";


class PostIndexItem extends React.Component {
    constructor(props){
        super(props),
        this.state={ 
            show: false,
            dotShow: false,
            editShow: false,
            caption: this.props.post.caption,
            comment: ''
         };
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.showEditModal = this.showEditModal.bind(this);
        this.handleCaption = this.handleCaption.bind(this);
        this.handleSubmitForm = this.handleSubmitForm.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.handleComment = this.handleComment.bind(this);
    }

    showModal(e){
        e.preventDefault();
        this.setState({ show: true})
    }

    closeModal() {
        this.setState({ editShow: false })
    };
    
    showEditModal(e){
        e.preventDefault();
        this.setState({ editShow: true })
    }

    hideModal(e){
        if (e.target.className === 'postshowModal'){
        this.setState({show: false})
        this.setState({ dotShow: false })
        } else if (e.target.className === 'editModal'){
            this.setState({ editShow: false })
            this.setState({ dotShow: false })
        } else if (e.target.className === 'captionEditSubmit') {
            this.setState({ dotShow: false })
        }
    };

    handleDelete(){
        this.props.deletePost(this.props.post.id);
    };

    handleCaption(field) {
        return e => {
            this.setState({ [field]: e.currentTarget.value })
        };
    }

    handleSubmitForm(e) {
        e.preventDefault();
        // const formData = new FormData(); //need this to store photo
        // if (this.state.photoFile) {
        //     formData.append('post[photo]', this.state.photoFile);
        // }
        // formData.append('post[caption]', this.state.caption);
        this.props.updatePost({caption: this.state.caption, id: this.props.post.id}).then(() => this.closeModal());
    };

    handleComment(){
        if (this.state.comment === '') return;
        this.props.createComment({
            body: this.state.comment,
            post_id: this.props.post.id
        }).then(() => {
            this.setState({comment: ''})
        });
    }

    render(){
        const profilepicUrl = this.props.user.photoUrl ? this.props.user.photoUrl : window.defaultPicURL;
        const photoUrl = this.props.post.photoUrl;
        const dotsmenu = (
            <ul className='dotsmenu'>
                <div className='arrow'></div>
                <li onClick={this.showEditModal}>
                    Edit Caption
                </li>
                <li onClick={ this.handleDelete }>
                    Delete Post
                </li>
                <li onClick={e => this.setState({dotShow: false})}>
                    Cancel
                </li>
            </ul>
        )
        const dot = (
            <div className='dots'>
                <img onClick={e => this.setState({ dotShow: true })} className='moreicon' src={window.moreiconURL} />
                {this.state.dotShow && dotsmenu}
            </div>
        );
        const postModal = (
            <div onClick={ this.hideModal } className='postshowModal'>
                <form className='postshowForm'>
                    <div className='left-postimage'>
                        <img className='postshow-pic' src={photoUrl} />
                    </div>
                    <div className='right-postshow'>
                        <div className='postshow-cred'>
                            <div className='picusername'>
                                <img className='profilepicshow' src={ profilepicUrl }/>
                                <span className='usernameshow'>{this.props.user.username}</span>
                            </div>
                            {/* <div className='dots'>
                                <img onClick={ e => this.setState({ dotShow: true })}className='moreicon' src={window.moreiconURL}/>
                                { this.state.dotShow && dotsmenu }
                            </div> */}
                            { this.props.user.id === this.props.currentUserId && dot }
                        </div>
                        <div className='comments'>
                            <div className='userblock'> 
                                <img className='profilepiccaption' src={profilepicUrl} />
                                <div className='usernamecaption'>
                                    <span className='usernamedisplay'>{this.props.user.username}</span>
                                    <span className='caption'>{this.props.post.caption}</span>
                                </div>
                            </div>
                            <CommentContainer commentIds={this.props.post.comment_ids}/>
                        </div>
                        <div className='heartscomments'>
                            <img className='heart-icon' src={ window.hearticonURL }/>
                            <img className='comment-icon' src={window.commenticonURL} />
                            <p className='datecreated'>{formatDate(this.props.post.created_at)}</p>
                        </div>
                        <div className='addComment'>
                            <input type='text' placeholder='Add a comment...' onChange={e => this.setState({comment: e.target.value})} value={this.state.comment}/>
                            <p className='postbutton' onClick={this.handleComment}>Post</p>
                        </div>
                    </div>
                </form>
            </div>
        )
        const editModal = (
            <div onClick={ this.hideModal }className='editModal'>
                <form className='captionEditForm'>
                    <h1 className='editheader'>Edit Caption</h1>
                    <h1>Caption:</h1>
                    <textarea onChange={this.handleCaption('caption')} rows="5" cols="15" className='captioneditbox' placeholder='Type your caption here' value={ this.state.caption }></textarea>
                    <button onClick={this.handleSubmitForm} className='captionEditSubmit'>Update</button>
                </form>
            </div>
        )
        return(
            <li key={this.props.post.id} className='post'>
                <img onClick={ this.showModal } className='post-pic' src={ photoUrl } />
                { this.state.show && postModal}
                {this.state.editShow && editModal}
            </li>
        )
    }
}

export default PostIndexItem;

// showing this post on the index
