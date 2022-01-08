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
            dispatch(addProfile(res.data.data.user.id))
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
        dispatch({type: 'GET_USER_FAILED', payload: err.response?.data.error.message})
    }
}

export const addProfile = (userId) => async(dispatch) => {
    dispatch({type: "ADD_PROFILE_SUCCESS"});

    try {
        const config = {
            headers: {
                'Content-type' : "application/json"
            }
        }
        const data = {}

        await API.post(`/profile/${userId}`, data, config)
        dispatch({type: 'ADD_PROFILE_SUCCESS'})
    } catch (err) {
        dispatch({type: 'ADD_PROFILE_FAILED', payload: err})
    }
}

export const updateProfile = (profileId, data) => async(dispatch) => {
    dispatch({type: "UPDATE_PROFILE_SUCCESS"});

    try {
        const config = {
            headers : {
                "Content-type": "multipart/form-data"
            }
        }

        await API.patch(`/profile/${profileId}`, data, config)
        dispatch({type: "UPDATE_PROFILE_SUCCESS"});
        
    } catch (err) {
        dispatch({type: 'UPDATE_PROFILE_FAILED', payload: err.response?.data.error.message})   
    }
}

export const updateUser = (userId,data) => async(dispatch) => {
    dispatch({type: "UPDATE_USER_REQUEST"});

    try {
        const config = {
            headers : {
                "Content-type": "application/json"
            }
        }

        await API.patch(`/user/${userId}`, data, config)
        dispatch({type: 'OPEN_ALERT_SUCCESS'})
        setTimeout(()=>{
            dispatch({type: 'UPDATE_USER_SUCCESS'})
            dispatch({type: 'CLOSE_MODAL'})
            window.location.reload();
            dispatch({type: 'ClOSE_ALERT_SUCCESS'})

        }, 700)
        
    } catch (err) {
        dispatch({type: 'UPDATE_USER_FAILED', payload: err.response?.data.error.message})
        dispatch({type: 'OPEN_ALERT_ERROR'})
    }
}