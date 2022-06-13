export const pwdCheck = (pwd_check) => {
  let pwdreg = /^[a-zA-Z0-9]{6,20}$/; 
  return pwdreg.test(pwd_check);
};

export const idCheck = (id_check) => {
  let idreg = /^[a-zA-Z0-9]{6,20}$/;
  return idreg.test(id_check);
};