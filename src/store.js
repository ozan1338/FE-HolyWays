import { modelReducer } from "./reducer/modelReducer";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, applyMiddleware, combineReducers } from "redux";

const finalReducer = combineReducers({
    modelReducer
})

const store = createStore(finalReducer, composeWithDevTools(
    applyMiddleware(thunk)
));

export default store;