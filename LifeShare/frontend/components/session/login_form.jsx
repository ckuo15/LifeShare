import React from 'react';
import { Link } from 'react-router-dom';

class LoginForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            email: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    };

    update(field){
        return e => this.setState({ [field]: e.currentTarget.value});
    };

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }


    render () {
        return (
            <div className='splash-container'>
                <div className='signup-container'>
                    <form onSubmit={this.handleSubmit} className='login-box'>
                        <h1>Welcome to LifeShare</h1>
                        <h2> Simply upload, and share!</h2>
                        {this.renderErrors()}
                        <div className='login-form'>
                            <input type='text' value={this.state.username} onChange={this.update('username')} placeholder='Username'/>
                            <input type='password' value={this.state.password} onChange={this.update('password')} placeholder='Password'/>
                            <button type='submit'>Log In</button>
                        </div>
                    </form>
                    <div className='splash-login-ask'>
                        <p>Don't have an account? <span className='login'><Link to='/signup'>Sign Up</Link></span></p>
                    </div>
                </div>
            </div>
        )
    }
}

export default LoginForm;