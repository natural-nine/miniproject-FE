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
export const loadCountDB = (pid) => {
  return function (dispatch) {
    // http://54.180.99.78/api/product

    axios // http://localhost:5001/LIST
      .get(`http://54.180.99.78/bid/${pid}`)
      .then((res) => {
        console.log(res);
        //dispatch(loadCount(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const loadProductDB = () => {
  return function (dispatch) {
    // http://54.180.99.78/api/product

    axios // http://localhost:5001/LIST
      .get("http://54.180.99.78/api/product")
      .then((res) => {
        // console.log(res);
        dispatch(loadProduct(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
// title, img, price, des, time
// title: title,
//         image: img,
//         price: price,
//         description: des,
//         endtime: time,
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

export const deleteProductDB = (uid) => {
  return function (dispatch) {
    axios
      .delete(`http://54.180.99.78/api/product/1/${uid}`)
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

export const bidProductDB = (pid, uid, price) => {
  return function (dispatch) {
    axios
      .post(`http://54.180.99.78/bid/${pid}/${uid}`, { price: price })
      .then((res) => {
        console.log(res);
        window.alert("입찰 완료!");
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
