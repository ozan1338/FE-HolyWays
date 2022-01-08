export const setExpiredDateAction = (expiredDate, fundId) => (dispatch,getState) => {
    const expiredDateObject = {
        expiredDate,
        fundId
    }
    console.log(expiredDateObject);
    dispatch({type: "SET_EXPIRED_DATE", payload: expiredDateObject})

    localStorage.setItem('expiredDate', JSON.stringify(getState().setExpiredDateReducer.expiredDateObject))
     
}