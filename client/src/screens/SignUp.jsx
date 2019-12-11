import React, { Component } from 'react'
import { signUp, signInUser } from '../services/auth'
import '../styles/signup.css'


class SignUp extends Component {
    constructor() {
        super()

        this.state = {
            username: '',
            email: '',
            password: '',
            passwordConfirmation: '',
            isError: false,
            errorMsg: ''
        }
    }

    handleChange = event => 
    this.setState({
        [event.target.name]: event.target.value,
        isError: false, 
        errorMsg: ''
    })

    onSignUp = event => {
        event.preventDefault()

        const { history, setUser } = this.props

        signUp(this.state)
            .then(() => signInUser(this.state))
            .then(res => setUser(res.user))
            .then(() => history.push('/'))
            .catch(error => {
                console.error(error)
                this.setState({
                    email: '',
                    password: '',
                    passwordConfirmation: '',
                    isError: true,
                    errorMsg: 'Sign Up Details Invalid'
                })
            })
    }

    renderError = () => {
        const toggleForm = this.state.isError ? 'danger' : ''
        if(this.state.isError) {
            return (
                <button type="SUBMIT" className={toggleForm}>
                    {this.state.errorMsg}
                </button>
            )
        } else {
            return <button type="SUBMIT">SIGN UP</button>
        }
    }

    render() {
        const { email, username, password, passwordConfirmation } = this.state

        return (
            <div className="sup-container">
                <div className="form-container">
                    <h2>CREATE ACCOUNT</h2>
                    <form onSubmit={this.onSignUp}>
                        <div className="sup-username">
                        <label>USERNAME</label>
                        <input
                        required
                        type="text"
                        name="username"
                        value={username}
                        placeholder="Enter Username"
                        onChange={this.handleChange}
                        />
                        </div>
                        <div className="sup-email">
                        <label>EMAIL ADDRESS</label>
                        <input
                        required
                        type="email"
                        name="email"
                        value={email}
                        placeholder="Enter Email"
                        onChange={this.handleChange}
                        />
                        </div>
                        <div className="sup-pwd">
                        <label>PASSWORD</label>
                        <input
                        required
                        name="password"
                        value={password}
                        type="password"
                        placeholder="Password"
                        onChange={this.handleChange}
                        />
                        </div>
                        <div className="sup-pwdconf">
                        <label>PASSWORD CONFIRMATION</label>
                        <input
                        required
                        name="passwordConfirmation"
                        value={passwordConfirmation}
                        type="password"
                        placeholder="Confirm Password"
                        onChange={this.handleChange}
                        />
                        </div>
                        {this.renderError()}
                    </form>
                </div>
            </div>
        )
    }
}

export default SignUp