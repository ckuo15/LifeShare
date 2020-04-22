import React from 'react';
import { Link } from 'react-router-dom';


class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            fullname: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.loginDemonUser = this.loginDemonUser.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    loginDemonUser(e){
        e.preventDefault();
        const user= {
            username: 'cindykuo',
            password: 'hunter12'
        }
        this.props.processLogin(user);
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value });
    }

    renderErrors() {
        return (
            <ul className='errors signup'>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        let divClassName = 'signup-container'
        if (this.props.location.pathname === '/'){
            return (
                <div className={divClassName}>
                    <form onSubmit={this.handleSubmit} className='signup-box'>
                        <h1>Welcome to LifeShare</h1>
                        <h2> Simply upload, and share!</h2>
                        {this.renderErrors()}
                        <div className='signup-form'>
                            <input type='email' value={this.state.email} onChange={this.update('email')} placeholder='Email' />
                            <input type='text' value={this.state.fullname} onChange={this.update('fullname')} placeholder='Full Name' />
                            <input type='text' value={this.state.username} onChange={this.update('username')} placeholder='Username' />
                            <input type='password' value={this.state.password} onChange={this.update('password')} placeholder='Password' />
                            <button type='submit'>Sign Up</button>
                        </div>
                        <div className='demo-signup'>
                            <button className='demo-login-button-signup' onClick={ this.loginDemonUser }>Demo Login</button>
                        </div>
                    </form>
                    <div className='splash-ask'>
                        <p>Have an account? <span className='login'><Link onClick={this.props.clearErrors} to='/login'>Log In</Link></span></p>
                    </div>
                </div>
            )
        } else {
            return (
                <div className='splash-container'>
                    <div className='signup-container'>
                        <form onSubmit={this.handleSubmit} className='signup-box'>
                            <h1>Welcome to LifeShare</h1>
                            <h2> Simply upload, and share!</h2>
                            {this.renderErrors()}
                            <div className='signup-form'>
                                <input type='email' value={this.state.email} onChange={this.update('email')} placeholder='Email' />
                                <input type='text' value={this.state.fullname} onChange={this.update('fullname')} placeholder='Full Name' />
                                <input type='text' value={this.state.username} onChange={this.update('username')} placeholder='Username' />
                                <input type='password' value={this.state.password} onChange={this.update('password')} placeholder='Password' />
                                <button type='submit'>Sign Up</button>
                            </div>
                            <div className='demo-signup'>
                                <button className='demo-login-button-splash' onClick={this.loginDemonUser}>Demo Login</button>
                            </div>
                        </form>
                        <div className='splash-ask'>
                            <p>Have an account? <span className='login'><Link onClick={this.props.clearErrors} to='/login'>Log In</Link></span></p>
                        </div>
                    </div>
                </div>
            )
        }
    }
}

export default SignupForm;