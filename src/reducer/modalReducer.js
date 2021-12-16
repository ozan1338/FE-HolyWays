export const modalReducer = (state={} , action) => {
    switch(action.type){
        case 'OPEN_LOGIN' : return{
            openLogin : true,
            openRegister : false
        }
        case 'OPEN_REGISTER' : return{
            openLogin : false,
            openRegister : true
        }
        case 'CLOSE_MODAL' : return{
            openLogin : false,
            openRegister : false
        }
        default : return state
    }
}