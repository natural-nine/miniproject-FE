import React from "react";
import styled from "styled-components";
import Bid from "../components/Bid";
import ha from "../images/ha.jpg";
import { deleteProductDB } from "../redux/modules/productPost";

const Detail = () => {
  return (
    <Wrap>
      <TitleBox>
        <Span>상품명</Span>
        <h2>이거슨 상품입니다</h2>
        <ImgBidBox>
          <ImgBox>
            <Img src={ha} />
          </ImgBox>

          <Bid />
        </ImgBidBox>
      </TitleBox>
      {/* <button onClick={deleteProductDB}>삭제 test</button> */}
    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px 80px;
`;
const TitleBox = styled.div``;
const Span = styled.span``;
const ImgBidBox = styled.div`
  display: flex;
  justify-content: space-between;

  width: 600px;
`;

const ImgBox = styled.div``;
const Img = styled.img`
  width: 250px;
  height: 250px;
`;

const BidInnerBox = styled.div``;
export default Detail;
