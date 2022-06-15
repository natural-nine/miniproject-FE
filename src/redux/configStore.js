import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import user from "./modules/user";
import post from "./modules/post";

// export const history = createBrowserHistory();

const middlewares = [thunk];

const enhancer = applyMiddleware(...middlewares);
const rootReducer = combineReducers({ user, post });
const store = createStore(rootReducer, enhancer);

export default store;
