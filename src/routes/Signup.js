import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import React from "react";

import { pwdCheck, idCheck } from "../shared/common";
import { useDispatch } from "react-redux";
import { createUserDB } from "../redux/modules/user";
import axios from "axios";

const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [id, setId] = React.useState("");
  const [pwd, setPwd] = React.useState("");
  const [pwd_chk, setPwdChk] = React.useState("");

  // const id_ref = React.useRef();
  // const pw_ref = React.useRef();
  // const pwchk_ref = React.useRef();

  const signup = () => {
    // const id = id_ref.current.value;
    // const pwd = pw_ref.current.value;
    // const pwd_chk = pwchk_ref.current.value;

    if (id === "" || pwd === "" || pwd_chk === "") {
      window.alert("모두 입력해 주세요!");
      return;
    }

    if (!idCheck(id)) {
      window.alert("아이디 형식이 맞지 않습니다!");
      return;
    }
    if (!pwdCheck(pwd)) {
      window.alert("비밀번호 형식이 맞지 않습니다!");
      return;
    }

    // if (pwd !== pwd_chk) {
    //   window.alert("비밀번호가 일치하지 않습니다!");
    //   return;
    // }

    dispatch(createUserDB(id, pwd, pwd_chk));
  };

  return (
    <Wrap>
      <Container>
        <h2>회원가입</h2>
        <Input
          type="text"
          placeholder="아이디 (영문,숫자 포함 6~20자)"
          onChange={(e) => {
            setId(e.target.value);
          }}
        />
        {/* <span onClick={idChk}>중복확인</span> */}
        <br />
        {!idCheck(id) ? (
          <p style={{ fontSize: "12px", color: "red" }}>
            영문 숫자 포함 6~20자
          </p>
        ) : null}
        <Input
          type="password"
          placeholder="비밀번호 (영문,숫자 포함 6~20자)"
          onChange={(e) => {
            setPwd(e.target.value);
          }}
        />
        <br />
        {!pwdCheck(pwd) ? (
          <p style={{ fontSize: "12px", color: "red" }}>
            영문 숫자 포함 6~20자
          </p>
        ) : null}
        <Input
          type="password"
          placeholder="비밀번호 확인"
          onChange={(e) => {
            setPwdChk(e.target.value);
          }}
        />
        <br />
        {pwd !== pwd_chk && pwd.length >= 1 ? (
          <p style={{ fontSize: "12px", color: "red" }}>
            비밀번호가 일치하지 않습니다.
          </p>
        ) : null}
        {pwd === pwd_chk && pwd.length > 5 ? (
          <p style={{ fontSize: "12px", color: "green" }}>
            비밀번호가 일치합니다.
          </p>
        ) : null}
        <button onClick={signup}>가입하기</button>
        <div>
          <p>
            이미 계정이 있나요 ?
            <Point
              onClick={() => {
                navigate("/user/login");
              }}
            >
              로그인
            </Point>
          </p>
        </div>
      </Container>
    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin: auto;
`;
const Container = styled.div`
  box-sizing: border-box;

  & button {
    width: 368px;
    height: 48px;
    margin-top: 15px;
    font-size: 17px;
    font-weight: 400;
    color: white;
    background-color: #00c4c4;
    outline: none;
    border: none;
    border-radius: 3px;
    cursor: pointer;
  }

  & p {
    font-size: 14px;
  }
`;
const Input = styled.input`
  width: 368px;
  height: 48px;
  box-sizing: border-box;
  margin-bottom: 10px;
  padding: 0 16px;
  border: 1px solid #ddd;

  &::placeholder {
    color: #ddd;
  }

  &:hover {
    border: 1px solid #696969;
    transition: border 0.3s ease-in-out;
  }

  &:focus {
    outline: none;
  }
`;

const Point = styled.span`
  color: #00c4c4;
  text-decoration: underline;
  cursor: "pointer";
  margin-left: 15px;
`;

export default Signup;
