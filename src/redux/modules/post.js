import axios from "axios";


// 액션
// const LOAD = "posts/LOAD";
// const CREATE = "posts/CREATE";
// // const UPDATE = "posts/UPDATE";
const GET = "posts/GET";

// 액션생성함수
// export function load_posts(post_list) {
//   return { type: LOAD, post_list };
// }

export function getPost(post_list) {
  return { type: GET, post_list };
}

// export function update_post(post_data) {
//   return { type: UPDATE, post_data };
// }

//미들웨어
export const getPostDB = () => {
  return function (dispatch) {
    axios
      .get("http://localhost:5001/LIST")
        .then((res) => {
        //   console.log(res)
        dispatch(getPost(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

// 초기값
const initialState = {
  list: [],
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    // case "posts/LOAD": {
    //   return { is_loaded: true, list: action.post_list };
    // }

      case "posts/GET": {
          return {list: action.post_list}
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
