export const modelReducer = (state={type: 'ClOSE_MODEL'} , action) => {
    switch(action.type){
        case 'OPEN_MODEL' : return{
            open : true,
            close : false
        }
        case 'CLOSE_MODEL' : return{
            open : false,
            close : true
        }
        default : return state
    }
}