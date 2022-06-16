import { async } from "@firebase/util";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";

import styled from "styled-components";
import { isDarkAtom } from "../recoilTheme";
import { bidProductDB, loadCountDB, loadProductDB } from "../redux/modules/productPost";

const Form = styled.form`
    display: flex;
    flex-direction: column;
    margin-top: 60px;
`
const Input = styled.input`
    padding: 12px;
    border-radius: 5px;
`

const Btn = styled.button`
    width: 100px;
    height: 35px;
    margin-top: 15px;
    margin-left: 28%;
    font-size: 17px;
    font-weight: 400;
    color: white;
    background-color: #00c4c4;
    outline: none;
    border: none;
    border-radius: 3px;
    
`
const BidDetail = (detailProduct) => {
    const [enteredNum, setEnterdNum] = useState("0");
    const [cuPrice, setCuPrice] = useState(0);
    const isAtom = useRecoilValue(isDarkAtom)
    const priceRef = useRef(null)
    const params = useParams()
    const dispatch = useDispatch()
    let currentPrice = detailProduct.detailProduct.props.price
    
    // const pid = detailProduct.detailProduct.props.pid
    

    useEffect(()=>{
        // dispatch(loadCountDB(pid))
        dispatch(loadProductDB());
        
    })
    const list = useSelector((state) => state);
    

    const onSubmit = async (e) => {
        e.preventDefault()
        
        console.log(cuPrice, "hahaha")
        // let currentPrice = detailProduct.detailProduct.props.price;
        // console.log(currentPrice, "haha")
        const commaRemovePrice = enteredNum.replace(/,/g, "");
        let numberPrice = parseInt(commaRemovePrice);
        if(currentPrice => numberPrice){
            alert("입찰금액은 현재금액 보다 높아야 합니다.")
        }else{
            e.preventDefault()

            console.log(detailProduct.detailProduct.props.pid, params.id)
            const pid = detailProduct.detailProduct.props.pid
            const uid = parseInt(params.id)+2
            dispatch(bidProductDB(pid,uid,numberPrice))
        }
        // if(numberPrice )
        
        // let bidPrice = priceRef.current.value
        // let intBidPrice = parseInt(bidPrice)

        

        
        
        // dispatch(loadCountDB(pid))
        // await axios.post(`http://54.180.99.78/bid/${detailProduct.detailProduct.props.pid}/${params.id}`, );
    }
    const priceComma = (e) => {
        let currentPrice = detailProduct.detailProduct.props.price;
        setCuPrice(currentPrice)
        console.log(currentPrice, "price")
        const value = e.target.value;
        const removedCommaValue = Number(value.replaceAll(",", ""));
        setEnterdNum(removedCommaValue.toLocaleString());
      };
    return(
        
        <Form onSubmit={onSubmit}>
        <Input value={enteredNum} onChange={priceComma} placeholder="금액을 입력해주세요." type="text"/>
        <Btn>입찰!</Btn>
        </Form>
        //  ref={priceRef}
    )
}

export default BidDetail;