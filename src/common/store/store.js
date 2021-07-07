import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import user from "./user/reducer/reducer";
import errors from "./errors/reducer/reducer";

const rootReducer = combineReducers({ user, errors });

const enchancer = applyMiddleware(thunk);

const store = createStore(rootReducer, enchancer);

export default store;
