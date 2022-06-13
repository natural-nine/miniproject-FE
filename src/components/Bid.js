import React, { useState } from "react";
import { Link, Route, Routes, useParams } from "react-router-dom";
import styled from "styled-components";
import BidDetail from "./BidDetail";



const Wrap = styled.div`
    /* display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; */
`

const BidBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
   
    width: 200px;
    
    
`
const H4 = styled.h4`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 0px;
    margin-bottom:20px;
`

const BidInnerBox = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 40px;
`
const DesBox = styled.div`
    border: 1px solid black;
    height: 50px;
    margin: 50px 0px 20px 0px;
    width: 230px;
`

const BidBtnBox = styled.div`
    border: 1px solid black;
    height: 30px;
    display: flex;
    justify-content: center;
`

const BidBtn = styled.button`
    
`
const Bid = () => {
    const [isBidDetail, setIsBidDetail] = useState(false);
    const param = useParams();
    const bidClick = () => {
        setIsBidDetail((prev)=>!prev)
        console.log(isBidDetail)
    }
    return(
    
        <Wrap>
        <BidBox>
        
            <H4>경매 진행중</H4>
            
            <BidInnerBox>
                <span>금액</span><span>????</span>
            </BidInnerBox>
            <BidInnerBox>
            <span>만료시간</span><span>????</span>
            </BidInnerBox>
            <BidInnerBox>
            <span>입찰자</span><span>????</span>
            </BidInnerBox>
            
        </BidBox>
        <DesBox><span>상품설명....</span></DesBox>
        <BidBtnBox>
            <BidBtn onClick={bidClick}>경매참여</BidBtn>
        </BidBtnBox>
        
    
        <div>
        {isBidDetail ? (<BidDetail/>) : ("")}
        </div>
        </Wrap>
        
    )
};

export default Bid;