export const modalReducer = (state={} , action) => {
    switch(action.type){
        case 'OPEN_LOGIN' : return{
            ...state,
            openLogin : true,
            openRegister : false,
            openModal : false,
            openApproveModal: false,
            openEditProfile: false,
            openDeleteModal: false
        }
        case 'OPEN_REGISTER' : return{
            ...state,
            openLogin : false,
            openRegister : true,
            openModal : false,
            openApproveModal: false,
            openEditProfile: false,
            openDeleteModal: false
        }
        case 'CLOSE_MODAL' : return{
            ...state,
            openLogin : false,
            openRegister : false,
            openModal : false,
            openApproveModal: false,
            openEditProfile: false,
            openAlertSuccess : false,
            openAlertError : false,
            openDeleteModal: false
        }
        case 'OPEN_MODAL' : return {
            ...state,
            openModal : true,
            openLogin : false,
            openRegister : false,
            openApproveModal: false,
            openEditProfile: false,
            openDeleteModal: false
        }
        case 'OPEN_APPROVE_MODAL' : return {
            ...state,
            openModal : false,
            openLogin : false,
            openRegister : false,
            openApproveModal: true,
            openEditProfile: false,
            data: action.payload,
            openDeleteModal: false
        }
        case 'OPEN_EDIT_PROFILE_MODAL' : return {
            ...state,
            openModal : false,
            openLogin : false,
            openRegister : false,
            openApproveModal: false,
            openEditProfile: true,
            openDeleteModal: false
        }
        case 'OPEN_ALERT_SUCCESS' : return {
            ...state,
            openAlertSuccess : true,
            openAlertError : false
        }
        case 'CLOSE_ALERT_SUCCESS' : return {
            ...state,
            openAlertSuccess : false
        }
        case 'OPEN_ALERT_ERROR' : return {
            ...state,
            openAlertError : true,
            openAlertSuccess : true
        }
        case 'CLOSE_ALERT_ERROR' : return {
            ...state,
            openAlertError : false
        }
        case 'OPEN_DELETE_MODAL' : return {
            ...state,
            openModal : false,
            openLogin : false,
            openRegister : false,
            openApproveModal: false,
            openEditProfile: false,
            openDeleteModal: true,
            
        }
        default : return state
    }
}
