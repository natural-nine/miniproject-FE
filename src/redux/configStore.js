
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import {getStorage} from "firebase/storage"
import {initializeApp} from "firebase/app"
import thunk from "redux-thunk";
import user from "./modules/user";
import post from "./modules/post";
import product from "./modules/productPost"

// export const history = createBrowserHistory();

const firebaseConfig = {
    apiKey: "AIzaSyAUZHz2UAXJOo5p3oufPiuBFPQD1l67jkc",
    authDomain: "react-week5-6acfb.firebaseapp.com",
    projectId: "react-week5-6acfb",
    storageBucket: "react-week5-6acfb.appspot.com",
    messagingSenderId: "49204740083",
    appId: "1:49204740083:web:3087eb0c0c88c3661f1c86",
    measurementId: "G-MB2Q141N7N"
  };



const app = initializeApp(firebaseConfig);


const middlewares = [thunk];

const enhancer = applyMiddleware(...middlewares);
const rootReducer = combineReducers({ user,post, product });
const store = createStore(rootReducer, enhancer);
export const storage = getStorage();
export default store;
