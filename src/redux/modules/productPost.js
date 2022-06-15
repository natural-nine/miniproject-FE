import axios from "axios";

const CREATE = "product/CREATE"


// const instance = axios.create({
//     baseURL: "http://54.180.99.78/",
//     //   headers: { authorization: `Bearer ${getCookie("token")}` },
// });


const initialState = {
products: {
    title: "",
    image: "",
    price:"",
    description:"",
    endtime:"",

},
};

export const createProductDB = (title, des, img, price, time) => {
    return function (dispatch) {
      
      axios.post("http://54.180.99.78/product", {
            title : title,
            image : img,
            price : price,
            description : des,
            endtime : time
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
      // do reducer stuff
      case "product/LOAD":
        console.log(action, state);
        return {
            products:action.products
        };
      default:
        return state;
    }
}


export function createProduct(product) {
    return { type: CREATE, product};
}