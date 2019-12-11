import React from 'react'
import SignIn from './SignIn'
import SignUp from './SignUp'
import Layout from '../shared/Layout'

const Login = () => {
    return (
        <Layout>
            <SignIn />
            <SignUp />
        </Layout>
    )
}
export default Login