import React from 'react'
import { Route, Switch } from 'react-router-dom'
import SignIn from '../screens/SignIn'
import SignOut from '../screens/SignOut'
import SignUp from '../screens/SignUp'
<<<<<<< HEAD
=======
import Home from '../screens/Home'
import Items from '../screens/Items'
>>>>>>> bba077653099de789c5bcd1bafe7ca9313ca65e9
import Login from '../screens/Login'
import AuthenticatedRoute from './AuthenticatedRoute'
const Routes = ({ setUser, clearUser }) => (
    <Switch>
<<<<<<< HEAD
        {/* <Route
        path="/sign-in"
        render={props => <SignIn {...props} setUser={setUser} />}
        />
        <Route
        path="/sign-up"
        render={props => <SignUp {...props} setUser={setUser}/>}
        /> */}
=======
        <Route
        exact
        path="/"
        render={props => <Home />}
        />
        <Route
        path="/login"
        render={props => <Login {...props} setUser={setUser} />}
        />
>>>>>>> bba077653099de789c5bcd1bafe7ca9313ca65e9
        <Route
        exact
        path="/sign-out"
        render={props => <SignOut {...props} clearUser={clearUser}/>}
        />
<<<<<<< HEAD
        <AuthenticatedRoute
        exact
        path="/login"
        render= {<Login />} />

=======
        
>>>>>>> bba077653099de789c5bcd1bafe7ca9313ca65e9
    </Switch>
)

export default Routes