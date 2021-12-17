export const loginReducer = (state={}, action) => {
    switch(action.type){
        case 'LOGIN_SUCCESS': return {
            ...state,
            login: true,
        }
        case 'LOGOUT_SUCCESS' : return {
            ...state,
            login: false
        }
        default: return state
    }
}