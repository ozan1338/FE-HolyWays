export const notifAction = (idSender) => (dispatch,getState) => {
    dispatch({type: "NOTIF", payload: {idSender}})
    localStorage.setItem("notif" , JSON.stringify(getState().notifReducer))
}

export const deleteNotif = (id) => (dispatch,getState) => {
    dispatch({type: "NOTIF_DELETE", payload: id})
    localStorage.setItem("notif" , JSON.stringify(getState().notifReducer))
}