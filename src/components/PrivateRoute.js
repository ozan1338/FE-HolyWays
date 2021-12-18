import React from 'react'
import { useHistory, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

export default function PrivateRoute({component: Component, path}) {

    const history = useHistory();
    const dispatch = useDispatch();
    const loginState = useSelector(state => state.loginReducer );
    const {login} = loginState;
    //console.log(login);
    const redirect = () => {
        history.push('/');
        dispatch({type: 'OPEN_LOGIN'})
    }
    //const isLogin = true;

    //console.log(Component , path);

    return (
        <>
         {login ? <Route component={Component} path={path} /> : redirect()}
        </>
    )
}
