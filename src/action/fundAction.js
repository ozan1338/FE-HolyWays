//import { config } from "npm"
import {API} from "../config/api";

export const getAllFund = () => async(dispatch)=>{
    dispatch({type: "GET_FUND_REQUEST"})

    try{
        const res = await API.get('/fund')
         dispatch({type: "GET_FUND_SUCCESS", payload : res.data.data.funds})
         //console.log(res.data.data)
        
    }catch(err){
        dispatch({type: "GET_FUND_FAILED", payload : err?.response.data.error.message})
        console.log(err.response);
    }
}

export const getFundById = (fundId) => async(dispatch) => {
    dispatch({type: "GET_FUND_BYID_REQUEST"})

    try {
        const res = await API.get(`/fund/${fundId}`)
        dispatch({type: "GET_FUND_BYID_SUCCESS", payload: res.data.data.fund})
        //console.log(res.data.data.fund)
        
    } catch (err) {
        dispatch({type: "GET_FUND_BYID_FAILED", payload: err.response?.data.error.message})
        console.log(err.response)
    }
}

export const addFund = (fund) => async(dispatch) => {
    dispatch({type: "ADD_FUND_REQUEST"})
    try {
        const config = {
            headers : {
                "Content-type": "multipart/form-data"
            }
        }
        await API.post('/fund', fund, config)
        dispatch({type: "OPEN_ALERT_SUCCESS"})
        setTimeout(()=>{
            dispatch({type: "ADD_FUND_SUCCESS"})
            //history.push('/')
            window.location.href = "/"
            dispatch({type: "CLOSE_ALERT_SUCCESS"})
        }, 800)
        
        
    } catch (err) {
        dispatch({type: "ADD_FUND_FAILED", payload: err.response?.data.error.message})
        dispatch({type: "OPEN_ALERT_ERROR"})
        console.log(err.response)
    }
}