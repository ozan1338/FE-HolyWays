import {API} from '../config/api'

export const registerUser = (data) => async (dispatch) => {
    dispatch({type: 'USER_REGISTER_REQUEST'})

    try {
        const config = {
            headers: {
                'Content-type' : "application/json"
            }
        }


        const res = await API.post('/user/register', data, config);

        
        dispatch({type: 'OPEN_ALERT_SUCCESS'})
        setTimeout(()=>{
            dispatch({type: 'LOGIN_SUCCESS'})
            dispatch({type: 'USER_REGISTER_SUCCESS'})
            localStorage.setItem('currentUser', JSON.stringify(res.data.data.user.token));
            dispatch({type: 'CLOSE_MODAL'})
            dispatch({type: 'CLOSE_ALERT_SUCCESS'})
        },700)
        //console.log(res.data);
        
        //localStorage.setItem('token', )
    } catch (err) {
        dispatch({type: 'USER_REGISTER_FAILED', payload: err.response.data.error.message});
        dispatch({type: "OPEN_ALERT_ERROR"});
        //console.log(err);
    }

}

export const loginUser = (data) => async(dispatch) => {
    dispatch({type: 'LOGIN_REQUEST'});
    // console.log(data);
    try{
        const config = {
            headers: {
                'Content-type' : "application/json"
            }
        }
        
        const res = await API.post('/user/login', data, config);
        
        dispatch({type: 'OPEN_ALERT_SUCCESS'})
        setTimeout(()=>{
            dispatch({type: 'LOGIN_SUCCESS'})
            localStorage.setItem('currentUser', JSON.stringify(res.data.data.user.token));
            dispatch({type: 'CLOSE_MODAL'})
            dispatch({type: 'CLOSE_ALERT_SUCCESS'})
        },700)
        //dispatch({type: 'CLOSE_MODAL'})
        //console.log(res);
        

        
        
    }catch(err){
        dispatch({type: 'LOGIN_FAILED', payload: err.response?.data.error.message});
        dispatch({type: "OPEN_ALERT_ERROR"})
        //console.log(err.response.data.error);
    }
}

export const logoutUser = () => dispatch => {
    localStorage.removeItem('currentUser');
    dispatch({type: 'LOGOUT_SUCCESS'});
}

export const getUserById = (userId) => async (dispatch) => {
    dispatch({type: 'GET_USER_REQUEST'});

    try {
        const res = await API.get(`/user/${userId}`)
        dispatch({type: 'GET_USER_SUCCESS', payload: res.data.data.user})

    } catch (err) {
        dispatch({type: 'GET_USER_FAILED', payload: err.response.data.error.message})
    }
}