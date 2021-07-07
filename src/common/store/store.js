import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import user from "./user/reducer/reducer";
import loader from "./loader/reducer/reducer";

import { loaderMiddleware } from "./loader/middleware";

const rootReducer = combineReducers({ loader, user });

const enchancer = applyMiddleware(thunk, loaderMiddleware);

const store = createStore(rootReducer, enchancer);

export default store;
