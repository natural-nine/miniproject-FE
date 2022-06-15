import axios from "axios";

// 액션
const LOAD = "post/LOAD";
// const CREATE = "posts/CREATE";
// // const UPDATE = "posts/UPDATE";

// 초기값
const initialState = {
  list: [],
};

// 액션생성함수

export function loadPost(post_list) {
  return { type: LOAD, post_list };
}

// export function update_post(post_data) {
//   return { type: UPDATE, post_data };
// }

//미들웨어
export const loadPostDB = () => {
  return function (dispatch) {
    // http://54.180.99.78/products

    axios // http://localhost:5001/LIST
      .get("http://54.180.99.78/products")
      .then((res) => {
        console.log(res);
        dispatch(loadPost(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "post/LOAD": {
      return { list: action.post_list };
    }

    // case "posts/CREATE": {
    //   const new_post_list = [...state.posts, action.post_data];
    //   return { ...state, list: new_post_list };
    // }

    // case "posts/UPDATE": {
    //   const new_post_list = state.list.map((a) =>
    //     parseInt(action.post_data.id) === a.id ? { ...action.post_data } : a
    //   );
    //   return { ...state, list: new_post_list };
    // }

    default:
      return state;
  }
}
