import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Bid from "../components/Bid";
import ha from "../images/ha.jpg"
import { loadProductDB } from "../redux/modules/productPost";


const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const TitleBox = styled.div`

`
const Span = styled.span`

`
const ImgBidBox = styled.div`
    display: flex;
    justify-content: space-between;
    
    width: 600px;
`

const ImgBox = styled.div`

`
const Img = styled.img`
    width: 250px;
    height: 250px ;
`

const BidInnerBox = styled.div`

`

const Form = styled.form`
    display: flex;
    flex-direction: column;
`


const Detail =  () => {
    
    const dispatch = useDispatch();
    const params = useParams();
  React.useEffect(() => {
    dispatch(loadProductDB());
  }, []);
//   console.log(list[params.id])
    
    const list = useSelector((state) => state?.product?.list);  
  const detailProduct = list[params.id];
  const onSubmit = (e) => {
    e.preventDefault();
  }
    return(
        <Wrap>
     
        <TitleBox>
            <Span>상품명</Span>
            <h2>{detailProduct?.title}</h2>
            <ImgBidBox>
                <ImgBox>
                    <Img src={detailProduct?.image} />
                </ImgBox>
                <Bid props={detailProduct}/>
                {/* <Bid props={detailProduct}/> */}
                {/* <Form onSubmit={onSubmit}>
                    <input/>
                        <input/>
                    <input ref={priceRef} type="number"/>
                    <button>입찰!</button>
        </Form> */}
            </ImgBidBox>
        </TitleBox>
        </Wrap>
    )
}

export default Detail;