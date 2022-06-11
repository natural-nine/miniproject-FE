

// Actions
const SET_USER = "user/SET_USER";
// const CREATE = "my-app/widgets/CREATE";
// const UPDATE = "my-app/widgets/UPDATE";
// const REMOVE = "my-app/widgets/REMOVE";

const initialState = {
  userInfo: {
    username: "",
    password: "",
  },
  isLogin: false,
};


// Action Creators
// export function loadWidgets() {
//   return { type: LOAD };
// }

export function setUser (user) {
  return { type: SET_USER, user };
}

// export function updateWidget(widget) {
//   return { type: UPDATE, widget };
// }

// export function removeWidget(widget) {
//   return { type: REMOVE, widget };
// }

// side effects, only as applicable
// e.g. thunks, epics, etc
// export function getWidget() {
//   return (dispatch) =>
//     get("/widget").then((widget) => dispatch(updateWidget(widget)));
// }

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    // do reducer stuff
    default:
      return state;
  }
}
