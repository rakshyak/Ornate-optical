import React, { Component } from 'react'
import Header from './Header'
import SignIn from './SignIn'
import SignUp from './SignUp'
import '../styles/login.css'

class Login extends Component {
    render () {
        return (
    <>
    <div className="login-bar">
    <SignIn />
    <SignUp />
    </div>
    </>
         )}
} 

export default Login
