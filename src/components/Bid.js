import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Route, Routes, useParams } from "react-router-dom";
import styled from "styled-components";
import { loadProductDB } from "../redux/modules/productPost";
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
const Bid = (detailProduct) => {
    const [isBidDetail, setIsBidDetail] = useState(false);
    const [isEndTime, setIsEndTime] = useState(false);
    const [bidCount, setBidCount ] = useState(0)
    const dispatch = useDispatch();
    const params = useParams();
    

    

    let curruntTime = new Date(
        new Date().getTime() - new Date().getTimezoneOffset() * 60000
      ).toISOString().slice(0, -8);

    let choiceTime2 = curruntTime.substring(0, 10);
    let choiceTime3 = curruntTime.substring(11);
    let choiceTime4 = choiceTime2 + "-" + choiceTime3;
    // console.log(curruntTime, choiceTime4, detailProduct.props.endtime)
   
    let timeLimit1 = choiceTime4.substring(5,10).substring(0,2)
    let timeLimit2 = choiceTime4.substring(7,10).substring(1,3)
    let timeLimit3 = choiceTime4.substring(11).substring(0,2)
    let timeLimit4 = choiceTime4.substring(13).substring(1,3)
    const timeLimit5 = +timeLimit1+timeLimit2+timeLimit3+timeLimit4

    let time1 = detailProduct.props.endtime.substring(5,10).substring(0,2)
    let time2 = detailProduct.props.endtime.substring(7,10).substring(1,3)
    let time3 =  detailProduct.props.endtime.substring(11).substring(0,2)
    let time4 = detailProduct.props.endtime.substring(13).substring(1,3)
    const time5 = time1+time2+time3+time4

    const currentTimeLimit = parseInt(timeLimit5)
    const productTime = parseInt(time5)

    const bidClick = () => {
        setIsBidDetail((prev)=>!prev)
        console.log(isBidDetail)
    }
    

    useEffect(()=>{
        if(productTime <= currentTimeLimit){
            setIsEndTime(true);
            dispatch(loadProductDB());
            
        }
        // dispatch(loadProductDB())
    },[])
    // console.log(isEndTime)
    // const list = useSelector((state) => state?.product?.list);
    // const detailProduct = list[params.id];
    // console.log(productTime,currentTimeLimit)
    // console.log(detailProduct.props)
    
    return(
        
        <Wrap>
        <BidBox>
        
            <H4>경매 진행중</H4>
            
            <BidInnerBox>
                <span>금액</span><span>{detailProduct?.props.price.toLocaleString()}</span>
            </BidInnerBox>
            <BidInnerBox>
            <span>만료시간</span><span>{detailProduct?.props.endtime}</span>
            </BidInnerBox>
            <BidInnerBox>
            <span>입찰자</span><span>{detailProduct?.props.count}</span>
            </BidInnerBox>
            
        </BidBox>
        <DesBox><span>상품설명....</span></DesBox>
        <BidBtnBox>
            {isEndTime ? (<BidBtn>경매시간이 종료되었습니다.</BidBtn>) : (<BidBtn onClick={bidClick}>경매참여</BidBtn>)}
        </BidBtnBox>
        
    
        <div>
        {isBidDetail ? (<BidDetail detailProduct={detailProduct}/>) : ("")}
        {/* {isBidDetail ? (<BidDetail />) : ("")} */}
        </div>
        </Wrap>
        
    )
};

export default Bid;