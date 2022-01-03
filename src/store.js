import { modalReducer } from "./reducer/modalReducer";
import { loginReducer, registerUserReducer, getUserByIdReducer } from "./reducer/userReducer";
import { getAllFundReducer, getFundByIdReducer, addFundReducer } from "./reducer/fundReducer";
import { addTransactionReducer, updateTransactionReducer } from "./reducer/transactionReducer";
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
    updateTransactionReducer
});

const currentUser  = localStorage.getItem('currentUser') ? {login : true} : {}

const initialState = {
    loginReducer : currentUser
}

const store = createStore(finalReducer, initialState ,composeWithDevTools(
    applyMiddleware(thunk)
));

export default store;