export const setExpiredDateReducer =(state={expiredDateObject : []},action)=>{
    
    switch(action.type){
        case 'SET_EXPIRED_DATE':
            console.log(state);
            const alreadyExist = state.expiredDateObject.find(item => item.fundId === action.payload.fundId)
            
            if(alreadyExist){
                return{
                    ...state
                }
            }else{
                return {
            ...state ,
            expiredDateObject : [...state.expiredDateObject , action.payload]
            }
            }
        
        default : return state
    }
}