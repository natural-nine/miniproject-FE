import { async } from "@firebase/util";
import axios from "axios";
import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import styled from "styled-components";
import { bidProductDB, loadCountDB, loadProductDB } from "../redux/modules/productPost";

const Form = styled.form`
    display: flex;
    flex-direction: column;
`

const BidDetail = (detailProduct) => {
    console.log(detailProduct.detailProduct.props, "is biddetial")
    const priceRef = useRef(null)
    const params = useParams()
    const dispatch = useDispatch()

    // const pid = detailProduct.detailProduct.props.pid
    

    useEffect(()=>{
        // dispatch(loadCountDB(pid))
        dispatch(loadProductDB());
    })
    const list = useSelector((state) => state);
    console.log(list, "haha")
    const onSubmit = async (e) => {
        e.preventDefault()
        let bidPrice = priceRef.current.value
        let intBidPrice = parseInt(bidPrice)
        console.log(detailProduct.detailProduct.props.pid, params.id)
        const pid = detailProduct.detailProduct.props.pid
        const uid = parseInt(params.id)+2
        dispatch(bidProductDB(pid,uid,intBidPrice))
        bidPrice= "";
        dispatch(loadCountDB(pid))
        // await axios.post(`http://54.180.99.78/bid/${detailProduct.detailProduct.props.pid}/${params.id}`, );
    }
    
    return(
        
        <Form onSubmit={onSubmit}>
        <input/>
        <input/>
        <input ref={priceRef} type="number"/>
        <button>입찰!</button>
        </Form>
        
    )
}

export default BidDetail;