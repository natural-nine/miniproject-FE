import axios from "axios";

const CREATE = "product/CREATE";
const LOAD = "product/LOAD";

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
  return function (dispatch) {
    axios
      .post("http://54.180.99.78/api/product", {
        title: title,
        image: img,
        price: price,
        description: des,
        endtime: time,
      })
      .then((res) => {
        console.log(res);
        window.alert("제품 등록 완료!");
        //window.location.replace("user/login");
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "product/LOAD": {
      return { list: action.product_list };
    }

    default:
      return state;
  }
}
