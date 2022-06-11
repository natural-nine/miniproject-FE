import React, { useEffect, useRef, useState } from 'react';
import styled from "styled-components";


const UploadForm = styled.form`
    display: flex;
    flex-direction: column;
`

const Input =styled.input`
`
const Btn = styled.button`

`


const Upload = () => {
    const timeRef = useRef(null)
   
    const [enteredNum, setEnterdNum] = useState("0");

    let curruntTime = new Date(new Date().getTime() - new Date().getTimezoneOffset() * 60000).toISOString().slice(0, -8);
    
    
     //일단 모든 alret 창 띄움 다음에 컴포넌트로 바꿀거임 
    const onSubmit = (e) => {
        e.preventDefault()
        if(enteredNum == 'NaN' || enteredNum == "0"){
            alert("가격을 입력해주세요.")
        }

        let choiceTime = timeRef.current.value;
        let choiceTime2 = choiceTime.substring(0,10)
        let choiceTime3 = choiceTime.substring(11)
        // 시간 T없애고 - 입력
        let choiceTime4 = choiceTime2+"-"+choiceTime3
        console.log(choiceTime4)
        console.log(choiceTime , "input time 2")
        // console.log(typeof(enteredNum), "가격")
        // console.log(parseInt(enteredNum), "가격2")
        const commaRemovePrice = enteredNum.replace(/,/g,'')
        
        console.log(enteredNum, "comma 있음")
        console.log(commaRemovePrice, "comma 제거")

        
    }   
    const timeLimit = () => {
        let choiceTime = timeRef.current.value;
        if(choiceTime < curruntTime){
            alert("이전 시간은 선택할 수 없습니다.")
            choiceTime = curruntTime
        }
    }
    
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
        <>
        <UploadForm onSubmit={onSubmit}>
            <span>Title</span>
            <Input placeholder='Title'/>

            <span>Description</span>
            <Input placeholder='Description'/>

            <span>price KRW</span>
            <Input onChange={priceComma} type='text' value={enteredNum} placeholder='Price'/>

            <span>expire date</span>
            <Input onChange={timeLimit} ref={timeRef} type={"datetime-local"} placeholder='end time' min={curruntTime}/>
            <Btn>Submit</Btn>
        </UploadForm>
        </>
    )
}

export default Upload;