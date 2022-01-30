import { modalReducer } from "./reducer/modalReducer";
import { loginReducer, registerUserReducer, getUserByIdReducer, addProfileReducer, updateUserReducer, updateProfileReducer } from "./reducer/userReducer";
import { getAllFundReducer, getFundByIdReducer, addFundReducer, updateFundReducer, deleteFundReducer } from "./reducer/fundReducer";
import { addTransactionReducer, updateTransactionReducer } from "./reducer/transactionReducer";
import { notifReducer } from "./reducer/notifReducer";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, applyMiddleware, combineReducers } from "redux";

const finalReducer = combineReducers({
    modalReducer,
    loginReducer,
    registerUserReducer,
    getUserByIdReducer,
    getAllFundReducer,
    getFundByIdReducer,
    addFundReducer,
    addTransactionReducer,
    updateTransactionReducer,
    addProfileReducer,
    updateUserReducer,
    updateProfileReducer,
    notifReducer,
    updateFundReducer,
    deleteFundReducer
});


const currentUser  = localStorage.getItem('currentUser') ? {login : true} : {};
const notification = localStorage.getItem('notif') ? JSON.parse(localStorage.getItem('notif')) : {idSender:[]}

const initialState = {
    loginReducer : currentUser,
    notifReducer : {...notification}
}

const store = createStore(finalReducer, initialState ,composeWithDevTools(
    applyMiddleware(thunk)
));

export default store;