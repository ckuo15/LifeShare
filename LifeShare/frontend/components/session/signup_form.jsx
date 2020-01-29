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
        let divClassName = 'signupDiv'
        let signup = 'form-box-container'
        let login = 'login-form-container'
        if (this.props.location.pathname === '/'){
            return (
                <div className={divClassName}>
                    <form onSubmit={this.handleSubmit} className='form-box'>
                        <h1>Welcome to LifeShare</h1>
                        <h2> Simply upload, and share!</h2>
                        {this.renderErrors()}
                        <div className='form'>
                            <input type='text' value={this.state.email} onChange={this.update('email')} placeholder='Email' />
                            <br />
                            <input type='text' value={this.state.fullname} onChange={this.update('fullname')} placeholder='Full Name' />
                            <br/>
                            <input type='text' value={this.state.username} onChange={this.update('username')} placeholder='Username' />
                            <br />
                            <input type='password' value={this.state.password} onChange={this.update('password')} placeholder='Password' />
                            <br />
                            <button type='submit'>Sign Up</button>
                            <br />
                        </div>
                        <div className='signup-form-container'>
                            <p>Don't have an account? <span className='login'><Link to='/login'>Log In</Link></span></p>
                        </div>
                    </form>
                    
                </div>
            )
        } else {
            return (
                <div className={signup}>
                    <form onSubmit={this.handleSubmit} className='form-box'>
                        <h1>Welcome to LifeShare</h1>
                        <h2> Simply upload, and share!</h2>
                        {this.renderErrors()}
                        <div className='form'>
                            <input type='text' value={this.state.email} onChange={this.update('email')} placeholder='Email' />
                            <br />
                            <input type='text' value={this.state.fullname} onChange={this.update('fullname')} placeholder='Full Name' />
                            <br />
                            <input type='text' value={this.state.username} onChange={this.update('username')} placeholder='Username' />
                            <br />
                            <input type='password' value={this.state.password} onChange={this.update('password')} placeholder='Password' />
                            <br />
                            <button type='submit'>Sign Up</button>
                            <br />
                        </div>
                        <div className={login}>
                            <p>Don't have an account? <span className='login'><Link to='/login'>Log In</Link></span></p>
                        </div>
                    </form>

                </div>
            )
        }
    }
}

export default SignupForm;