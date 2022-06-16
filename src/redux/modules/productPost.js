import axios from "axios";

const CREATE = "product/CREATE";
const LOAD = "product/LOAD";
const DELETE = "product/DELETE";

// const instance = axios.create({
//     baseURL: "http://54.180.99.78/",
//     //   headers: { authorization: `Bearer ${getCookie("token")}` },
// });

const initialState = {
  // products: {
  //   title: "",
  //   image: "",
  //   price: "",
  //   description: "",
  //   endtime: "",
  // },
};

// 액션생성 함수
export function loadProduct(product_list) {
  return { type: LOAD, product_list };
}

export function createProduct(product) {
  return { type: CREATE, product };
}

export function deleteProduct(product) {
  return { tyep: DELETE, product };
}

// axios

// 조회
export const loadProductDB = () => {
  return function (dispatch) {
    // http://54.180.99.78/api/product

    axios // http://localhost:5001/LIST
      .get("http://54.180.99.78/api/product")
      .then((res) => {
        console.log(res);
        dispatch(loadProduct(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

// 등록
export const createProductDB = (title, img, price, des, time) => {
  console.log(title, img, price, des, time);
  return function (dispatch) {
    axios
      .post("http://54.180.99.78/api/product/1", {
        title: title,
        image: img,
        price: price,
        description: des,
        endtime: time,
      })
      .then((res) => {
        console.log(res);
        //dispatch(createProduct())
        window.alert("제품 등록 완료!");
        window.location.replace("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

// 삭제

export const deleteProductDB = () => {
  return function (dispatch) {
    axios
      .delete("")
      .then((res) => {
        console.log(res);
        // window.alert("리뷰가 삭제되었습니다!");
        // dispatch(deleteProduct(PId));
      })
      .catch((err) => {
        console.log("err");
      });
  };
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "product/LOAD": {
      return { list: action.product_list };
    }

    case "product/CREATE": {
      const new_product_list = [...state.list, action.product];
      return { list: new_product_list };
    }

    // case "product/DELETE": {
    //   const new_product_list = state.list.filter((c, idx) => {
    //     return action.post_id !== c.post_id;
    //   });
    //   return { list: new_product_list };
    // }

    default:
      return state;
  }
}
