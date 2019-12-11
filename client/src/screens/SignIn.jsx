import React, { Component } from 'react'
import { signInUser } from '../services/auth'
import '../styles/signin.css'

class SignIn extends Component {
    constructor() {
        super()

        this.state = {
            username: '',
            password: '',
            isError: false,
            errorMsg: ''
        }
    }
    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value,
            isError: false,
            errorMsg: ''
        })
    }

    onSignIn = event => {
        event.preventDefault()

        const { history, setUser } = this.props
        const user = {
            username: this.state.username,
            password: this.state.password
        }
        signInUser(user, 2)
            .then(res => setUser(res.user))
            .then(() => history.push('/'))
            .catch(error => {
                console.error(error)
                this.setState({
                    isError: true,
                    errorMsg: 'Invalid Credentials',
                    username: '',
                    password: ''
                })
            })
    }

    renderError = () => {
        const toggleForm = this.state.isError ? 'danger' : ''
        if (this.state.isError) {
            return (
                <button type="submit" className={toggleForm}>
                    {this.state.errorMsg}
                </button>
            )
        } else {
            return <button type="submit">LOGIN</button>
        }
    }

    render() {
        const { username, password } = this.state

        return (
            <div className="sin-container">
                <div className="form-container">
                <h2>LOGIN</h2>
                <p>RETURNING CUSTOMER? SIGN IN HERE.</p>
                    <form onSubmit={this.onSignIn}>
                        <div className="sin-username">
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
                        <div className="sin-pwd">
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
                        {this.renderError()}
                    </form>
                </div>
            </div>
        )
    }
}
export default SignIn