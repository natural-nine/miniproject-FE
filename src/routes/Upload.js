import React, { useEffect, useRef, useState } from 'react';
import styled from "styled-components";


const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const UploadForm = styled.form`
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
`
const TitleBox = styled.div`
    display: flex;
    justify-content: space-between;
    width: 450px;
    margin-bottom: 25px;
`
const Input =styled.input`
    width: 365px;
    height: 30px;
    
`
const Btn = styled.button`

`

const Img = styled.img`
    width: 250px;
    height: 250px;
    margin-bottom: 2px;
`



const PriceDateBox = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    
`
const Span = styled.span`

`

const Input2 =styled.input`
    width: 300px;
    height: 30px;
   
`

const Upload = () => {
    const timeRef = useRef(null);
    const imgRef = useRef(null);
   
    const [enteredNum, setEnterdNum] = useState("0");
    const [isImg, setIsImg] = useState("");

    let curruntTime = new Date(new Date().getTime() - new Date().getTimezoneOffset() * 60000).toISOString().slice(0, -8);
    
    
     //일단 모든 alret 창 띄움 다음에 컴포넌트로 바꿀거임 
    const onSubmit = (e) => {
        e.preventDefault()
        

        let choiceTime = timeRef.current.value;
        let choiceTime2 = choiceTime.substring(0,10)
        let choiceTime3 = choiceTime.substring(11)
        if(enteredNum == 'NaN' || enteredNum == "0" ||choiceTime == ""){
            alert("가격과 시간을 입력해 주세요.")
        }
        // 시간 T없애고 - 입력
        let choiceTime4 = choiceTime2+"-"+choiceTime3
        // console.log(choiceTime4)
        // console.log(choiceTime , "input time 2")
        // console.log(typeof(enteredNum), "가격")
        // console.log(parseInt(enteredNum), "가격2")
        const commaRemovePrice = enteredNum.replace(/,/g,'')
        
        console.log(enteredNum, "comma 있음")
        console.log(commaRemovePrice, "comma 제거")

        console.log(isImg, "click img")
        
    }   
    const timeLimit = () => {
        let choiceTime = timeRef.current.value;
        if(choiceTime < curruntTime){
            alert("이전 시간은 선택할 수 없습니다.")
            console.log("hello!")
            choiceTime = curruntTime
        }
    }

    const onImgChange = (e) => {
        
        // setIsImg(imgRef.current.files[0])
        const reader = new FileReader();
        const file = imgRef.current.files[0];
        console.log(file);

        reader.readAsDataURL(file);
        reader.onloadend = () => {
        setIsImg(reader.result);
        console.log("이미지주소", reader.result);
    };

    }
    console.log(isImg ,"img setting")
    //숫자 입력시 , 입력 단 string
    //단위 입력 쉽게 보이기 위해 ,를 넣어줬으나 디테일 페이지에서 입찰시 가격을 + 해서 업데이트해줘야하기 때문에 
    //
    const priceComma = (e) => {
        const value = e.target.value;
        const removedCommaValue = Number(value.replaceAll(",", ""));
        setEnterdNum(removedCommaValue.toLocaleString());
        
    }
    console.log(typeof(enteredNum))
    return(
        
        <Wrap>
        <UploadForm onSubmit={onSubmit}>
            <TitleBox>
            <Input placeholder='상품명'/>
            <Btn>등록!</Btn>
            </TitleBox>

            <Img src={isImg} />   
            <Input style={{marginBottom:"20px"}} onChange={onImgChange} ref={imgRef} type="file" accept='image/*' />

            <Input2 placeholder='상품 설명'/>

            <PriceDateBox>
            <Span>최소 입찰가 및 시작가 ₩  KRW</Span>
            <Input2 onChange={priceComma} type='text' value={enteredNum} placeholder='Price'/>
            </PriceDateBox>
            
            <PriceDateBox>
            <Span>경매 종료 날짜 및 시간</Span>
            <Input2 onChange={timeLimit} ref={timeRef} type={"datetime-local"} placeholder='end time' min={curruntTime}/>
            </PriceDateBox>
         
            
        </UploadForm>
        </Wrap>
        
    )
}

export default Upload;