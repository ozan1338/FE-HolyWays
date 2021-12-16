import { modalReducer } from "./reducer/modalReducer";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, applyMiddleware, combineReducers } from "redux";

const finalReducer = combineReducers({
    modalReducer
})

const store = createStore(finalReducer, composeWithDevTools(
    applyMiddleware(thunk)
));

export default store;