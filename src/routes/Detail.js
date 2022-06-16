import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import Bid from "../components/Bid";
import ha from "../images/ha.jpg";
import { isDarkAtom } from "../recoilTheme";
import { loadProductDB } from "../redux/modules/productPost";
import { deleteProductDB } from "../redux/modules/productPost";

const Detail = () => {
  const isAtom = useRecoilValue(isDarkAtom)
  const dispatch = useDispatch();
  const params = useParams();

  React.useEffect(() => {
    dispatch(loadProductDB());
  }, []);
  //   console.log(list[params.id])

  const list = useSelector((state) => state?.product?.list);
  const detailProduct = list[params.id];
  console.log(detailProduct);
  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Wrap>
      <TitleBox>
        <Span>상품명</Span>
        <H2>{detailProduct?.title}</H2>
        <ImgBidBox>
          <ImgBox>
            <Img src={detailProduct?.image} />
          </ImgBox>

          <Bid props={detailProduct} />
        </ImgBidBox>
      </TitleBox>
      {/* <button onClick={deleteProductDB(detailProduct)}>삭제 test</button> */}
    </Wrap>
  );
};

const H2 = styled.h2`
  color: ${(props)=>props.theme.textColor};
`

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px 80px;
`;
const TitleBox = styled.div``;
const Span = styled.span`
  color:  ${(props)=>props.theme.textColor};
  `;
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
