import axios from "axios";

import { setCookie } from "../../shared/cookie";

// Actions
const SIGNUP = "user/SIGNUP";
const LOGIN = "user/LOGIN";
const SET_USER = "user/SET_USER";
// const UPDATE = "my-app/widgets/UPDATE";
// const REMOVE = "my-app/widgets/REMOVE";

const initialState = {
  user: {
    user: null,
    is_Login: false,
  },
};

// Action Creators

export function createUser(user) {
  return { type: SIGNUP, user };
}

export function loginUser(user) {
  return { type: LOGIN, user };
}
export function setUser(user) {
  return { type: SET_USER, user };
}

//axios

const instance = axios.create({
  //baseURL: "http://localhost:5001",

  baseURL: "http://54.180.99.78/",

  //   headers: { authorization: `Bearer ${getCookie("token")}` },
});

export const createUserDB = (username, password) => {
  return function (dispatch) {
    instance
      .post(
        "/user/signup",
        { username: username, password: password },
        { withCredentials: true }
      )
      .then((res) => {
        window.alert("회원가입 완료!");
        window.location.href = "/user/login";
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

// 로그인

export function loginUserDB(id, pwd) {
  return (dispatch) => {
    instance
      .post(
        "/user/login",
        { username: id, password: pwd },
        { withCredentials: true }
      )
      .then((res) => {
        console.log(res);
        const token = res.headers.jsessionid;
        setCookie("is_login", `${token}`);
        let response = res.data;
        if (!response.result) {
          alert(response.err_msg);
        } else {
          // Server에서 쿠키를 만들어서 보낼 때
          // window.location.href = "/";
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    // do reducer stuff
    case "user/SET_USER":
      console.log(action);
      return {};
    default:
      return state;
  }
}
