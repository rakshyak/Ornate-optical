import React, { Component } from 'react'
import Header from './Header'
import SignIn from './SignIn'
import SignUp from './SignUp'
import '../styles/login.css'

class Login extends Component {
    constructor(props) {
        super(props)
    }
    render () {
        return (
    <>
    <div className="login-bar">
    <SignIn {...this.props} setUser={this.props.setUser}/>
    <SignUp {...this.props} setUser={this.props.setUser}/>
    </div>
    </>
         )}
} 

export default Login
