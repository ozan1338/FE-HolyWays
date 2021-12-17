export const loginUser = (data) => dispatch => {
    dispatch({type: 'LOGIN_SUCCESS'});
    // console.log(data);
    localStorage.setItem('currentUser', JSON.stringify(data));
}

export const logoutUser = () => dispatch => {
    localStorage.removeItem('currentUser');
    dispatch({type: 'LOGOUT_SUCCESS'});
}