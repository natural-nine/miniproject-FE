import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import App from "../css/App.css";

import Login from "../routes/Login";
import Signup from "../routes/Signup";
import { logoutDB } from "../redux/modules/user";
import { getCookie } from "../shared/cookie";
import Modal from "./Modal";

const Header = () => {
  const navigate = useNavigate();
  const test = useSelector((state) => state);

  const login = sessionStorage.getItem("is_login");
  const data = document?.cookie;
  const userName = data.split("=")[0];

  // 모달창 관련
  const [modalOpen, setModalOpen] = useState(false);
  const [modalOpen_, setModalOpen_] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  const openModal_ = () => {
    setModalOpen_(true);
  };
  const closeModal_ = () => {
    setModalOpen_(false);
  };

  return (
    <Wrap>
      <div>
        <h1
          onClick={() => {
            navigate("/");
          }}
        >
          경매나라
        </h1>
      </div>

      <Welcome>
        {/* {login ? <Username>{userName} 님 환영합니다 :) </Username> : ""} */}
        {login ? (
          <Span onClick={logoutDB}>로그아웃</Span>
        ) : (
          <Span onClick={openModal}>로그인</Span>
        )}
        {/* <Span onClick={openModal}>로그인</Span>
        <Span onClick={logoutDB}>로그아웃</Span> */}
        <Modal open={modalOpen} close={closeModal} header="">
          <Login />
        </Modal>

        {login ? (
          <Span
            onClick={() => {
              navigate("/upload");
            }}
          >
            새 글 등록
          </Span>
        ) : (
          <Span onClick={openModal_}>회원가입</Span>
        )}

        {/* <Span onClick={openModal_}>회원가입</Span> */}
        <Modal open={modalOpen_} close={closeModal_} header="">
          <Signup />
        </Modal>
      </Welcome>
    </Wrap>
  );
};

const Wrap = styled.div`
  //background-color: #9bd4d2;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  height: 58px;
  align-content: center;
  padding: 7px 80px;
  border-radius: 15px;

  & h1 {
    margin: 0px;
    cursor: pointer;
    font-family: "CookieRun-Regular";
  }
`;

const Span = styled.span`
  color: #333;
  font-weight: 400;
  font-size: 16px;
  margin-left: 10px;
  padding: 10px;
  cursor: pointer;

  &:hover {
    transition: background-color 0.2s ease-in-out;
    background-color: #f2f2f2;
    border-radius: 10px;
  }
`;

const Username = styled.span`
  color: #333;
  font-weight: 400;
  font-size: 16px;
  margin-left: 10px;
`;

const Welcome = styled.div`
  display: flex;
  width: 200px;
  justify-content: center;
  align-items: center;
`;

export default Header;
