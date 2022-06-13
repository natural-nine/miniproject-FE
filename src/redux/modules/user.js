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
    username: "",
    password: "",
  },
  isLogin: false,
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

// export function removeWidget(widget) {
//   return { type: REMOVE, widget };
// }

//axios

const instance = axios.create({
  baseURL: "http://localhost:5001",
  //   headers: { authorization: `Bearer ${getCookie("token")}` },
});

// 회원가입
export const createUserDB = (username, password) => {
  return function (dispatch) {
    instance
      .post("/user", {
        username: username,
        password: password,
      })
      .then((res) => {
        console.log(res);
        window.alert("회원가입 완료!");
        //window.location.replace("user/login");
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

// 회원가입 시 아이디 중복 체크

// export function IdCheckFB(username) {
//   return (dispatch, getState) => {
//     // console.log("아이디가 들어와버렷", id); 
//     instance
//       .post("/user", {
//         username: username,
//       })
//       .then((res) => {
//         console.log(res);
//         if (res.data) {
//           console.log("아이디 사용가능");
//           window.alert("사용 가능한 아이디입니다!");
//         } else {
//           console.log("아이디 중복");
//           window.alert("이미 사용중인 아이디입니다!");
//         }
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//    };
// }


// 로그인
export function loginUserDB(id, pwd) {
//   const res = RESP.LOGIN;
//   console.log(res);
//   const accessToken = res.user.token;
//   if (!accessToken) {
//     window.alert("없어");
//   }
//   return (dispatch) => {
//     if (accessToken) {
//       console.log(accessToken);
//       //쿠키에 토큰 저장
//       setCookie("is_login", `${accessToken}`);

//       window.alert("로그인성공~~~~");
//     }
//   };
    return (dispatch) => {
        instance
          .post("/user", {
            username: id,
            password: pwd,
          })
          .then((res) => {
            console.log(res);
            dispatch(
              setUser({
                email: res.data.email,
                nickname: res.data.nickname,
              })
            );
            const accessToken = res.data.token;
            //쿠키에 토큰 저장
            setCookie("is_login", `${accessToken}`);
            //document.location.href = "/";
          });
}

}

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    // do reducer stuff
    case "SET_USER":
      console.log(action, state);
      return {};
    default:
      return state;
  }
}
