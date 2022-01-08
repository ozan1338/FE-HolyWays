import React from 'react'
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function PrivateRoute({component: Component, ...rest}) {

    const loginState = useSelector(state => state.loginReducer );
    const {login} = loginState;
    
    return (
        <>
            <Route
                {...rest}
                render={(props) =>
                    login ? <Component {...props} /> :  <Redirect to="/" />
                }
            />
        </>

    )
}

