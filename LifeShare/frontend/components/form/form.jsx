import React from 'react';

export default class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            photoFile: null,
            photoUrl: this.props.currentUser.photoUrl,
            fullname: this.props.currentUser.fullname, 
            bio: this.props.currentUser.bio 
        };
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // componentDidMount() {
    //     this.props.fetchUser(this.props.sessionId)
    // }

    handleInput(e) {
        this.setState({ title: e.currentTarget.value });
    }

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

    handleUpdate(field) {
        return (e) => {
            this.setState({ [field]: e.currentTarget.value })
        }
    };

    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        if (this.state.photoFile) {
            formData.append('user[photo]', this.state.photoFile);
        }

        formData.append('user[fullname]', this.state.fullname);
        formData.append('user[bio]', this.state.bio);
        // append name and bio
        // update the info 
        this.props.updateUser(formData, this.props.sessionId).then(() => this.props.closeModal());
    }

    render() {
        console.log(this.state);
        const preview = this.state.photoUrl ? <img className='preview-image' src={this.state.photoUrl} /> : <img className='profileimage' src={window.defaultPicURL} />;
        return(
            <div onClick={this.props.hideModal} className='profileEditModal'>
                <div className='editForm'>
                    <h1>Edit Profile</h1>
                    <div className='leftForm'>
                       { preview }
                        <form onSubmit={this.handleSubmit.bind(this)}>
                            <input type="file" id="file" onChange={this.handleFile.bind(this)} />
                            <label className='inputfile' htmlFor="file">Change Profile Picture</label>
                        </form>
                    </div>
                    <div className='rightForm'>
                        <h1>Name: </h1>
                        <input onChange={this.handleUpdate('fullname')} type='text' className='namebox' value={this.state.fullname} />
                        <h1>Bio: </h1>
                        <textarea onChange={this.handleUpdate('bio')} rows="5" cols="6" maxLength="70" className='biobox' value={this.state.bio} placeholder='Please type your bio here'></textarea>
                        <button onClick={this.handleSubmit}>Update</button>
                    </div>
                </div>
            </div>
        )
    }
}
