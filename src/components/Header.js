import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Login from "../routes/Login";
import Signup from "../routes/Signup";
import Modal from "./Modal";

const Header = () => {
  const navigate = useNavigate();
  
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
          LOGO
        </h1>
      </div>

      <div>
        <Span onClick={openModal}>로그인</Span>
        <Modal open={modalOpen} close={closeModal} header="">
          <Login />
        </Modal>

        {/* <Span
          onClick={() => {
            navigate("/user/signup");
          }}
        >
          회원가입
        </Span> */}

        <Span onClick={openModal_}>회원가입</Span>
        <Modal open={modalOpen_} close={closeModal_} header="">
          <Signup />
        </Modal>
      </div>
    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  height: 58px;
  align-content: center;
  padding: 7px 80px;

  & h1 {
    margin: 0px;
    cursor: pointer;
  }
`;

const Span = styled.span`
  color: #333;
  font-weight: 400;
  font-size: 16px;
  margin-left: 10px;
  cursor: pointer;
`;

export default Header;
