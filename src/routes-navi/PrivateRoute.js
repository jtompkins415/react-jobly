import React, {useContext} from 'react';
import {Route, redirect} from 'react-router-dom';
import UserContext from '../UserContext';

const PrivateRoute = ({exact, path, children}) => {
    const {currUser} = useContext(UserContext);

    /** If no current user, redirect to login page */

    if(!currUser) {
        return redirect('/login')
    }

    /** If valid user, continue to the route */
    return (
        <Route exact={exact} path={path}>
            {children}
        </Route>
    );
}

export default PrivateRoute;

