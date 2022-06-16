import React, { useState } from "react";
import { Link, Route, Routes, useParams } from "react-router-dom";
import styled from "styled-components";
import BidDetail from "./BidDetail";
import Modal from "./Modal";

const Bid = () => {
  const [isBidDetail, setIsBidDetail] = useState(false);

  const param = useParams();
  const bidClick = () => {
    setIsBidDetail((prev) => !prev);
    //console.log(isBidDetail);
  };
  return (
    <Wrap>
      <BidBox>
        <H4>경매 진행중</H4>

        <BidInnerBox>
          <span>금액</span>
          <span>500,000</span>
        </BidInnerBox>
        <BidInnerBox>
          <span>만료시간</span>
          <span>2022-06-24-18:13</span>
        </BidInnerBox>
        <BidInnerBox>
          <span>입찰자</span>
          <span>13 명</span>
        </BidInnerBox>
      </BidBox>
      <DesBox>
        <span>상품설명</span>
      </DesBox>
      <BidBtnBox>
        <BidBtn onClick={bidClick}>경매참여</BidBtn>
      </BidBtnBox>

      <div>{isBidDetail ? <BidDetail /> : ""}</div>
    </Wrap>
  );
};

const Wrap = styled.div`
  /* display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; */

  box-sizing: border-box;

  padding: 15px 20px;
  height: 450px;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 5px 5px 20px #dadada;
  & span {
    width: 150px;
    padding-right: 15px;
    font-size: 16px;
    color: #212121;
  }
`;

const BidBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const H4 = styled.h4`
  display: flex;
  //justify-content: center;
  align-items: center;
  margin-top: 0px;
  margin-bottom: 20px;
`;

const BidInnerBox = styled.div`
  //justify-content: space-between;
  margin-top: 40px;
`;
const DesBox = styled.div`
  border: 1px solid #ddd;
  height: 50px;
  margin: 50px 0px 20px 0px;
  padding: 5px;
  width: 230px;
  box-sizing: border-box;
`;

const BidBtnBox = styled.div`
  //border: 1px solid black;
  height: 30px;
  display: flex;
  justify-content: center;
`;

const BidBtn = styled.button`
  width: 100px;
  height: 35px;
  margin-top: 15px;
  font-size: 17px;
  font-weight: 400;
  color: white;
  background-color: #00c4c4;
  outline: none;
  border: none;
  border-radius: 3px;
  cursor: pointer;
`;

export default Bid;
