import axios from "axios";

import { RESP } from "../../res";
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
// export function loadWidgets() {
//   return { type: LOAD };
// }

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
  //baseURL: "http://13.124.56.79",
  baseURL: "http://54.180.99.78",

  //baseURL: "http://localhost:5001",

  //   headers: { authorization: `Bearer ${getCookie("token")}` },
});

// 회원가입
export const createUserDB = (username, password) => {
  return function (dispatch) {
    instance
      .post("/user/signup", {
        username: username,
        password: password,
      })
      .then((res) => {
        console.log(res);
        window.alert("회원가입 완료!");
        window.location.replace("user/login");
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

// 로그인
export function loginUserDB(id, pwd) {
  return (dispatch) => {
    axios
      .post(
        "http://54.180.99.78/user/login",
        {
          username: id,
          password: pwd,
        }
        // { withCredentials: true }
      )
      // instance
      //   .post("/user/login", {
      //     username: id,
      //     password: pwd,
      //   },{ withCredentials: true })
      .then((res) => {
        console.log(res.data);
        // const currentUserId = res.data[0].id;
        // document.cookie = "id" + "=" + currentUserId;
        // console.log(document.cookie);
        // dispatch(
        //   setUser({
        //     username: res.data.username,
        //     id: res.data.id,
        //   })
        // );

        if (res.data.result === false) {
          alert(res.data.err_msg);
        } else {
          alert("로그인 성공");
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
