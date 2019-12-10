import React from 'react'
import { Route, Switch } from 'react-router-dom'
import SignIn from '../screens/SignIn'
import SignOut from '../screens/SignOut'
import SignUp from '../screens/SignUp'
import Login from '../screens/Login'
import AuthenticatedRoute from './AuthenticatedRoute'

const Routes = ({ setUser, clearUser }) => (
    <Switch>
        <Route
        path="/sign-in"
        render={props => <SignIn {...props} setUser={setUser} />}
        />
        <Route
        path="/sign-up"
        render={props => <SignUp {...props} setUser={setUser}/>}
        />
        <Route
        exact
        path="/sign-out"
        render={props => <SignOut {...props} clearUser={clearUser}/>}
        />
        <AuthenticatedRoute
        exact
        path="/login"
        render={ <Login /> } />

    </Switch>
)

export default Routes