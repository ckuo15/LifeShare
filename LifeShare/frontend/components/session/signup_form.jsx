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
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value });
    }

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

    render() {
        let divClassName = 'signup-container'
        let signup = 'form-box-container'
        let login = 'login-form-container'
        if (this.props.location.pathname === '/'){
            return (
                <div className={divClassName}>
                    <form onSubmit={this.handleSubmit} className='signup-box'>
                        <h1>Welcome to LifeShare</h1>
                        <h2> Simply upload, and share!</h2>
                        {this.renderErrors()}
                        <div className='signup-form'>
                            <input type='text' value={this.state.email} onChange={this.update('email')} placeholder='Email' />
                            <input type='text' value={this.state.fullname} onChange={this.update('fullname')} placeholder='Full Name' />
                            <input type='text' value={this.state.username} onChange={this.update('username')} placeholder='Username' />
                            <input type='password' value={this.state.password} onChange={this.update('password')} placeholder='Password' />
                            <button type='submit'>Sign Up</button>
                        </div>
                    </form>
                    <div className='splash-ask'>
                        <p>Have an account? <span className='login'><Link to='/login'>Log In</Link></span></p>
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
                                <input type='text' value={this.state.email} onChange={this.update('email')} placeholder='Email' />
                                <input type='text' value={this.state.fullname} onChange={this.update('fullname')} placeholder='Full Name' />
                                <input type='text' value={this.state.username} onChange={this.update('username')} placeholder='Username' />
                                <input type='password' value={this.state.password} onChange={this.update('password')} placeholder='Password' />
                                <button type='submit'>Sign Up</button>
                            </div>
                        </form>
                        <div className='splash-ask'>
                            <p>Have an account? <span className='login'><Link to='/login'>Log In</Link></span></p>
                        </div>
                    </div>
                </div>
            )
        }
    }
}

export default SignupForm;