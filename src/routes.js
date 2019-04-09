import React from 'react'
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'

import Login from './pages/Login/Login'
import Timeline from "./pages/Timeline/Timeline";

import {isAuthenticated} from './services/auth'

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            isAuthenticated() ? (
                <Component {...props} />
            ) : (
                <Redirect to={{ pathname: '/', state: { from: props.location } }} />
            )
        }
    />
)

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={'/'} component={Login}/>
                <PrivateRoute path={'/timeline'} component={Timeline}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes