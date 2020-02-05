import React from 'react';
import NavBarContainer from '../navbar/navbar_container';
import FormContainer from '../form/form_container';
import PostIndexContainer from '../posts/post_index_container';


class Profile extends React.Component {

    constructor(props){
        super(props);
        this.state = { show: false }
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        // this.handleUpdate = this.handleUpdate.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.props.fetchUser(this.props.match.params.userId)
    };

    componentDidUpdate(prevProps) {
        if ( prevProps.match.params.userId !== this.props.match.params.userId){
            this.props.fetchUser(this.props.match.params.userId)
        }
    };

    showModal(e) {
        e.preventDefault();
        this.setState( {show: true });
    };

    hideModal(e) {
        if (e.target.className === 'profileEditModal'){
            this.setState( { show: false })
        }
    };

    closeModal(){
        this.setState( {show: false })
    };

    // handleUpdate(field){
    //     return (e) => {
    //         this.setState({ [field]: e.currentTarget.value })
    //     }
    // };

    // handleSubmit(e){
    //     e.preventDefault();
    //     const user = { 
    //         id: this.props.user.id,
    //         fullname: this.state.fullname,
    //         bio: this.state.bio
    //     };

    //     this.props.updateUser(user).then( () => this.setState( { show: false }))
    // };

    render () {
        if (!this.props.user){return null};
        // const form = (
        //     <div onClick={ this.hideModal } className='profileEditModal'>
        //         <div className='editForm'>
        //             <h1>Edit Profile</h1>
        //             <div className='leftForm'>
        //                 <img className='profileimage' src={ window.puppyURL }/>
        //                 <FormContainer />
        //             </div>
        //             <div className='rightForm'>
        //                 <h1>Name: </h1>
        //                 <input onChange={ this.handleUpdate('fullname') } type='text' className='namebox' value={this.state.fullname}/>
        //                 <h1>Bio: </h1>
        //                 <textarea onChange={ this.handleUpdate('bio') } rows="5" cols="8" className='biobox' value={ this.state.bio } placeholder='Please type your bio here'></textarea>
        //                 <button onClick={this.handleSubmit}>Update</button>
        //             </div>
        //         </div>
        //     </div>
        // )
        const editButton = <button onClick={this.showModal} className='editprofile-button'>Edit Profile</button>;
        const showButton = (this.props.currentUser.id == this.props.match.params.userId) ? editButton : null;
        const photoUrl = this.props.user.photoUrl ? this.props.user.photoUrl : window.defaultPicURL;
        return (
        <div>
            <NavBarContainer />
            { this.state.show && <FormContainer closeModal={ this.closeModal } hideModal={ this.hideModal }/> }
            <div className='middle-container'>
                <div className='profile-picture'>
                    <img src={ photoUrl }/>
                </div>
                <div className='profile-header'>
                    <div className='profile-description'>
                        <p className='username'>{this.props.user.fullname.split(" ")[0]}</p>
                        <p className='bio'>{ this.props.user.bio }</p>
                    </div>
                    <div className='user-stats'>
                        <span>3 posts</span>
                        <span>16895 followers</span>
                        <span>98 following</span>
                    </div>
                    <div className='top-row-description'>
                        <h1>{this.props.user.username}</h1>
                        {/* <button onClick={ this.showModal } className='editprofile-button'>Edit Profile</button> */}
                        { showButton }
                    </div>
                </div>
            </div>
            <div className='profile-middleline'>
                <div className='middleline'>
                    <img className='grid-icon' src={ window.gridURL }/>
                    <span>POSTS</span>
                </div>
            </div>
            <PostIndexContainer/>
        </div>
        )
    }
};

export default Profile;

// regular in-line(span) only takes enough width and height, which depends on the size of the content.
// in-line block takes as much space left to right. wont add extra line 
// block (div) height will expand and add line break