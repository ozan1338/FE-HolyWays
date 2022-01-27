export const getAllFundReducer = (state = {funds : []}, action) => {
    switch(action.type){
        case 'GET_FUND_REQUEST' : return {
            loading: true
        }
        case 'GET_FUND_SUCCESS' : return {
            loading: false,
            funds : action.payload
        }
        case 'GET_FUND_FAILED' : return {
            loading: false,
            error: action.payload
        }
        default : return state
    }
}

export const getFundByIdReducer = (state = {fund : []}, action) => {
    switch(action.type){
        case 'GET_FUND_BYID_REQUEST' : return {
            loading: true,
        }
        case 'GET_FUND_BYID_SUCCESS' : return {
            loading: false,
            fund: action.payload
        }
        case 'GET_FUND_BYID_FAILED' : return {
            loading: false,
            error: action.payload
        }
        default : return state;
    }
}

export const addFundReducer = (state = {}, action) => {
    switch(action.type){
        case 'ADD_FUND_REQUEST' : return {
            loading: true,
        }
        case 'ADD_FUND_SUCCESS' : return {
            loading: false,
        }
        case 'ADD_FUND_FAILED' : return {
            loading: false,
            error: action.payload
        }
        default : return state;
    }
}

export const updateFundReducer = (state = {}, action) => {
    switch(action.type){
        case 'UPDATE_EXPIRED_DATE_REQUEST' : return {
            loading: true,
        }
        case 'UPDATE_EXPIRED_DATE_SUCCESS' : return {
            loading: false,
        }
        case 'UPDATE_EXPIRED_DATE_FAILED' : return {
            loading: false,
            error: action.payload
        }
        default : return state;
    }
}