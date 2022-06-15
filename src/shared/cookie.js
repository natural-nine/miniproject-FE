// //import { Cookies } from "react-cookie";

// //const cookie = new Cookies();

// //쿠키 가져오기
// const getCookie = (name) => {
//   //return cookie.get(name);
//   return sessionStorage.getItem(name);
// };

// //쿠키 저장
// const setCookie = (name, value) => {
//   sessionStorage.setItem(name, value);
//   //return cookie.set(name, value);
// };

// //쿠키 삭제
// const deleteCookie = (name) => {
//   sessionStorage.removeItem(name);
// };

// export { getCookie, setCookie, deleteCookie };

import { Cookies } from "react-cookie";

const cookies = new Cookies();

export const setCookie = (name, value, options) => {
  return cookies.set(name, value, { ...options });
};

export const getCookie = (name) => {
  return cookies.get(name);
};
