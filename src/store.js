import { modalReducer } from "./reducer/modalReducer";
import { loginReducer } from "./reducer/userReducer";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, applyMiddleware, combineReducers } from "redux";

const finalReducer = combineReducers({
    modalReducer,
    loginReducer
});

const currentUser  = localStorage.getItem('currentUser') ? {login : true} : {}

const initialState = {
    loginReducer : currentUser
}

const store = createStore(finalReducer, initialState ,composeWithDevTools(
    applyMiddleware(thunk)
));

export default store;