export const addTransactionReducer = (state={}, action) => {
    switch(action.type){
        case 'ADD_TRANSACTION_REQUEST' : return {
            loading: true,
        }
        case 'ADD_TRANSACTION_SUCCESS' : return {
            loading: false,
        }
        case 'ADD_TRANSACTION_FAILED' : return {
            loading: false,
            error: action.payload
        }
        default : return state
    }
}

export const updateTransactionReducer = (state={}, action) => {
    switch(action.type){
        case 'UPDATE_TRANSACTION_REQUEST' : return {
            loading: true,
        }
        case 'UPDATE_TRANSACTION_SUCCESS' : return {
            loading: false,
        }
        case 'UPDATE_TRANSACTION_FAILED' : return {
            loading: false,
            error: action.payload
        }
        default : return state
    }
}