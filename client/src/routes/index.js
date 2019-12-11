import React from 'react'
import { Route, Switch } from 'react-router-dom'
import SignIn from '../screens/SignIn'
import SignOut from '../screens/SignOut'
import SignUp from '../screens/SignUp'
import Items from '../screens/Items'
import Item from '../screens/Item'
import Login from '../screens/Login'
import AuthenticatedRoute from './AuthenticatedRoute'
const Routes = ({ user, setUser, clearUser, addItem, getItem }) => (
    <Switch>
        <Route
            exact
            path="/"
            render={props => (<SignIn />)}
        />
        <Route
            exact
            path="/items/:id"
            render={props => <Item {...props} />}
        />
        <AuthenticatedRoute
            exact
            path="/login"
            render={props => <Login />}
        />

    </Switch>
)

export default Routes