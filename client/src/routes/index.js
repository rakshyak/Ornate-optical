import React from 'react'
import { Route, Switch } from 'react-router-dom'
import SignOut from '../screens/SignOut'
import Home from '../screens/Home'
import Items from '../screens/Items'
import Item from '../screens/Item'
import Login from '../screens/Login'
import AuthenticatedRoute from './AuthenticatedRoute'
const Routes = ({ user, setUser, clearUser, addItem, getItem }) => (
    <Switch>
        <Route
            exact
            path="/"
            render={props => <Home />}
        />
        <Route
            path="/login"
            render={props => <Login {...props} setUser={setUser} />}
        />
        <Route
            exact
            path="/sign-out"
            render={props => <SignOut {...props} clearUser={clearUser} />}
        />
        <Route
            exact
            path="/items/:id"
            render={props => <Item {...props} user={user} getItem={getItem} />}
        />

        <Route
            exact
            path="/glasses-men"
            render={props => <Items {...props} key={Math.floor(Math.random() * 100)}/>}
        />
        <Route
            exact
            path="/glasses-women"
            render={props => <Items {...props} key={Math.floor(Math.random() * 100)}/>}
        />
        <AuthenticatedRoute
            exact
            user={user}
            path="/users/:id/cart"
            render={props => <Items {...props} key={Math.floor(Math.random() * 100)}/>}
        />
    </Switch>
)

export default Routes