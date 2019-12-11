import React, { Component } from 'react'
import Header from './Header'
import SignIn from './SignIn'
import SignUp from './SignUp'
<<<<<<< HEAD
import SignOut from './SignOut'

const Login = () => {
    return(
    <>
=======
import '../styles/login.css'

class Login extends Component {
    render () {
        return (
>>>>>>> bba077653099de789c5bcd1bafe7ca9313ca65e9
    <>
    <div className="login-bar">
    <SignIn />
<<<<<<< HEAD
    </>
    <>
    <SignOut />
    </>
    </>
    )
}

export default Login

=======
    <SignUp />
    </div>
    </>
         )}
} 

export default Login
>>>>>>> bba077653099de789c5bcd1bafe7ca9313ca65e9
