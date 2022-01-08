export const loginReducer = (state={}, action) => {
    switch(action.type){
        case 'LOGIN_REQUEST': return {
            ...state,
            loading: true
        }
        case 'LOGIN_SUCCESS': return {
            ...state,
            loading: false,
            login: true,
            error: false
        }
        case 'LOGIN_FAILED' : return {
            ...state,
            loading: false,
            login: false,
            error: action.payload
        }
        case 'LOGOUT_SUCCESS' : return {
            ...state,
            login: false
        }
        default: return state
    }
}

export const registerUserReducer = (state={}, action) => {
    switch(action.type){
        case 'USER_REGISTER_REQUEST': return {
            ...state,
            loading:true
        }
        case 'USER_REGISTER_SUCCESS': return {
            ...state,
            loading :false,
        }
        case 'USER_REGISTER_FAILED': return {
            ...state,
            loading: false,
            error : action.payload
        }
        default: return state
    }
}

export const getUserByIdReducer = (state={user: []}, action) => {
    switch(action.type){
        case 'GET_USER_REQUEST': return {
            ...state,
            loading: true
        }
        case 'GET_USER_SUCCESS': return {
            ...state,
            loading: false,
            user: action.payload
        }
        case 'GET_USER_FAILED': return {
            ...state,
            loading: false,
            error: action.payload
        }
        default : return state
    }
}

export const addProfileReducer = (state={}, action) => {
    switch(action.type){
        case 'ADD_PROFILE_REQUEST': return {
            ...state,
        }
        case 'ADD_PROFILE_SUCCESS': return {
            ...state,
        }
        case 'ADD_PROFILE_FAILED': return {
            ...state,
            error: action.payload
        }
        default : return state
    }
}

export const updateProfileReducer = (state={}, action) => {
    switch(action.type){
        case 'UPDATE_PROFILE_REQUEST': return {
            ...state,
        }
        case 'UPDATE_PROFILE_SUCCESS': return {
            ...state,
        }
        case 'UPDATE_PROFILE_FAILED': return {
            ...state,
            error: action.payload
        }
        default : return state
    }
}

export const updateUserReducer = (state={}, action) => {
    switch(action.type){
        case 'UPDATE_USER_REQUEST' : return {
            loading: true,
        }
        case 'UPDATE_USER_SUCCESS' : return {
            loading: false,
        }
        case 'UPDATE_USER_FAILED' : return {
            loading: false,
            error: action.payload
        } 
        default : return state
    }
}