import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Login from "../routes/Login";
import Modal from "./Modal";

const Header = () => {
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);
  

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <Wrap>
      <div>
        <h1>LOGO</h1>
      </div>

      <div>
        <Span onClick={openModal}>로그인</Span>
        <Modal open={modalOpen} close={closeModal} header="">
          <Login />
        </Modal>

        <Span
          onClick={() => {
            navigate("/user/signup");
          }}
        >
          회원가입
        </Span>
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
  padding: 0 80px;
`;

const Span = styled.span`
margin-left:10px;
cursor: pointer;
`;

export default Header;
