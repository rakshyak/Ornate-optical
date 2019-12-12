import React from 'react'
import { Route, Switch } from 'react-router-dom'
import SignIn from '../screens/SignIn'
import SignOut from '../screens/SignOut'
import SignUp from '../screens/SignUp'
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
<<<<<<< HEAD
        <Route
            exact
            path="/items/:id"
            render={props => <Item {...props} user={user} getItem={getItem} />}
        />


=======
        <Route 
        exact
        path = "/glasses-men"
        render={props => <Items {...props}/> }
        />
        <Route 
        exact 
        path = "/glasses-women"
        render={props => <Items {...props}/>}
        />
        
>>>>>>> 5f7892b7f74d016a030c444ba67623afcd1089bd
    </Switch>
)

export default Routes