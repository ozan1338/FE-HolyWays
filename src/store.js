import { modalReducer } from "./reducer/modalReducer";
import { loginReducer, registerUserReducer, getUserByIdReducer, addProfileReducer, updateUserReducer, updateProfileReducer } from "./reducer/userReducer";
import { getAllFundReducer, getFundByIdReducer, addFundReducer } from "./reducer/fundReducer";
import { addTransactionReducer, updateTransactionReducer } from "./reducer/transactionReducer";
import { setExpiredDateReducer } from "./reducer/dateExpiredReducer";
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
    setExpiredDateReducer
});

const expiredDateObject = []

const currentUser  = localStorage.getItem('currentUser') ? {login : true} : {};
const expiredDate = localStorage.getItem('expiredDate') ? JSON.parse(localStorage.getItem('expiredDate')) : {expiredDateObject}

const initialState = {
    loginReducer : currentUser,
    setExpiredDateReducer : expiredDate
}

const store = createStore(finalReducer, initialState ,composeWithDevTools(
    applyMiddleware(thunk)
));

export default store;