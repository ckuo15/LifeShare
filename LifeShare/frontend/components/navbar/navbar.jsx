import React from 'react';
import { Link, withRouter } from 'react-router-dom';


class NavBar extends React.Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = { 
            show: false,
            photoFile: null,
            photoUrl: null,
            caption: '',
            searchUser: '',
            showResults: false
        };
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
        this.handleSubmitForm = this.handleSubmitForm.bind(this);
        this.handleCaption = this.handleCaption.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.renderSearch = this.renderSearch.bind(this);
    }


    renderSearch(){
        if (this.props.searchedUser.length > 0 && this.state.showResults && this.state.searchUser.length > 0){
            return(
                <div className="searchbar-result-container">
                    {this.props.searchedUser.map(user => (
                        <li className='search-user-item'
                            onMouseDown={e => {
                                this.props.history.push(`/user/${user.id}`)
                                this.setState({searchUser: ''})
                                }}>
                            <img src={user.photoUrl} className="searchbar-userpic"/>
                            <div className="search-username-fullname">
                                <span className="search-username-result">{user.username}</span>
                                <span className="search-fullname-result">{user.fullname}</span>
                            </div>
                        </li>
                    ))}
                </div>
            )
        }
    };

    handleFile(e) {
        const file = e.currentTarget.files[0];
        const fileReader = new FileReader();
        fileReader.onloadend = () => {

            this.setState({ photoFile: file, photoUrl: fileReader.result });
        };
        if (file) {
            fileReader.readAsDataURL(file);
        }
    }

    closeModal(){
        this.setState( { show: false })
    };

    showModal(e) {
        e.preventDefault();
        this.setState({ show: true })
    };

    hideModal(e){
        if ( e.target.className === 'uploadModal'){
            this.setState({ show: false })
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.processForm();
    };

    handleSubmitForm(e) {
        e.preventDefault();
        const formData = new FormData(); //need this to store photo
        if (this.state.photoFile) {
            formData.append('post[photo]', this.state.photoFile);
        }
        formData.append('post[caption]', this.state.caption);
        this.props.createPost(formData).then(() => this.closeModal());
        this.setState({photoUrl: null, caption: ''});
    }

    handleCaption(field){
        return e => {
            this.setState({ [field]: e.currentTarget.value })
        };
    }

    update(query) {
        this.setState({ searchUser: query }, () => {
            this.props.searchUser(this.state.searchUser);
        });
    };

    render (){
        const preview = this.state.photoUrl ? <img className='preview-post' src={this.state.photoUrl} /> : <img className='postimage' src={window.uploadimageURL} />;

        const form = (
            <div onClick= { this.hideModal } className='uploadModal'>
                <form className="uploadForm" onSubmit={this.handleSubmitPic}>
                    <div className='leftsideForm'>
                        { preview }
                        <input type="file" id="upload" onChange={this.handleFile.bind(this)} />
                        <label className='uploadfile' htmlFor="upload">Upload Image</label>
                    </div>
                    <div className='rightsideForm'>
                        <h1>Caption:</h1>
                        <textarea onChange={ this.handleCaption('caption') } rows="5" cols="15" className='captionbox' placeholder='Type your caption here'></textarea>
                        <button onClick={ this.handleSubmitForm} className='captionSubmit'>Submit</button>
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
                <div className='navbar-searchbar'>
                    <input 
                        type='text' 
                        value={this.state.searchUser} 
                        onChange={e => this.update(e.target.value)} 
                        placeholder='&#xF002; Search'
                        className='searchbar'
                        onFocus={e => this.setState({showResults: true})}
                        onBlur={e => this.setState({showResults: true})}
                    />
                    {this.renderSearch()}
                </div>
                <div className='right-icons'>
                    <a href="https://www.youtube.com/watch?v=bjvc6N6px64"><img className='explore-icon' src={window.exploreURL} /></a>
                    <img onClick={ this.showModal} className='addimage-icon' src={ window.uploadURL } />
                    { this.state.show && form }
                    <Link to={`/user/${this.props.currentUser}`}>
                        <img className='profile-icon' src={window.profileURL} />
                    </Link>
                    <button className='logout-button' onClick={this.handleSubmit} type='submit'>Log Out</button>
                </div>
            </div>
        )
    }
};

export default withRouter(NavBar);
