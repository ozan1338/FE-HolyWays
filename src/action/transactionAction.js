import { API } from "../config/api";

export const addTransaction = (fundId, transaction) => async(dispatch) => {
    dispatch({type: 'ADD_TRANSACTION_REQUEST'});
    // let url
    // if(viewFund){
    //     url = `/view-fund/${fundId}`
    // }else{
    //     url = `/details/${fundId}`
    // }

    try {

        const config = {
            headers : {
                "Content-type": "multipart/form-data"
            }
        }

        await API.post(`fund/${fundId}`, transaction, config)
        dispatch({type: 'OPEN_ALERT_SUCCESS'})
        setTimeout(()=>{
            dispatch({type: 'ADD_TRANSACTION_SUCCESS'})
            dispatch({type: 'CLOSE_MODAL'})
            window.location.href = "/";
            dispatch({type: 'ClOSE_ALERT_SUCCESS'})

        }, 700)

    } catch (err) {
        dispatch({type: 'ADD_TRANSACTION_FAILED', payload: err.response.data.error.message})
        dispatch({type: 'OPEN_ALERT_ERROR'})
    }
}

export const updateTransaction = (fundId,userId,id) => async(dispatch) => {
    dispatch({type: 'UPDATE_TRANSACTION_REQUEST'});

    try {
        
        const config = {
            header : {
                "Content-type": "application/json"
            }
        }

        await API.patch(`fund/${fundId}/${userId}/${id}`, {"status":"success"}, config)
        dispatch({type: 'UPDATE_TRANSACTION_SUCCESS'})
        dispatch({type: 'CLOSE_MODAL'})
        //window.location.reload()
        window.location.href = `/`;

    } catch (err) {
        dispatch({type: 'UPDATE_TRANSACTION_FAILED', payload: err.response.data.error.message})
    }
}