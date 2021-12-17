export const modalReducer = (state={} , action) => {
    switch(action.type){
        case 'OPEN_LOGIN' : return{
            ...state,
            openLogin : true,
            openRegister : false,
            openModal : false,
            openApproveModal: false
        }
        case 'OPEN_REGISTER' : return{
            ...state,
            openLogin : false,
            openRegister : true,
            openModal : false,
            openApproveModal: false
        }
        case 'CLOSE_MODAL' : return{
            ...state,
            openLogin : false,
            openRegister : false,
            openModal : false,
            openApproveModal: false
        }
        case 'OPEN_MODAL' : return {
            ...state,
            openModal : true,
            openLogin : false,
            openRegister : false,
            openApproveModal: false
        }
        case 'OPEN_APPROVE_MODAL' : return {
            ...state,
            openModal : false,
            openLogin : false,
            openRegister : false,
            openApproveModal: true
        }
        default : return state
    }
}
