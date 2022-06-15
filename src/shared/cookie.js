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

// import { Cookies } from "react-cookie";

// const cookies = new Cookies();

// export const setCookie = (username, value, options) => {
//   return cookies.set(username, value, { ...options });
// };

// export const getCookie = (name) => {
//   return cookies.get(name);
// };

// export const removeCookie = () => {
//   return cookies.remove();
// };

const getCookie = (name) => {
  let value = "; " + document.cookie;

  let parts = value.split(`; ${name}=`);

  if (parts.length === 2) {
    return parts.pop().split(";").shift();
  }
};

const setCookie = (name, value, exp = 5) => {
  let date = new Date();
  date.setTime(date.getTime() + exp * 24 * 60 * 60 * 1000);

  document.cookie = `${name}=${value}; expires=${date.toUTCString()}`;
};

const deleteCookie = (name) => {
  let date = new Date("2020-01-01").toUTCString();

  document.cookie = name + "=; expires=" + date;
};

export { getCookie, setCookie, deleteCookie };
