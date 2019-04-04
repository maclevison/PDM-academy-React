import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Login from './pages/Login/Login'
import Timeline from "./pages/Timeline/Timeline";

// const PrivateRoute = ({ component: Component, ...rest }) => (
//     <Route
//         {...rest}
//         render={props =>
//             isAuthenticated() ? (
//                 <Component {...props} />
//             ) : (
//                 <Redirect to={{ pathname: '/', state: { from: props.location } }} />
//             )
//         }
//     />
// )

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={'/'} component={Login}/>
                <Route path={'/'} component={Timeline}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes