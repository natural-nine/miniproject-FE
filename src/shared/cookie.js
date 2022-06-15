//쿠키 가져오기
const getCookie = (name) => {
  return sessionStorage.getItem(name);
};

//쿠키 저장
const setCookie = (name, value) => {
  sessionStorage.setItem(name, value);
};

//쿠키 삭제
const deleteCookie = (name) => {
  sessionStorage.removeItem(name);
};

export { getCookie, setCookie, deleteCookie };
