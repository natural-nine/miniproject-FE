import React, { useEffect, useRef, useState } from "react";
import { storage } from "../redux/configStore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { createProduct, createProductDB } from "../redux/modules/productPost";
import axios from "axios";
import { useRecoilValue } from "recoil";
import { isDarkAtom } from "../recoilTheme";

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px 80px;
`;

const UploadForm = styled.form`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 15px 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 5px 5px 20px #dadada;
  align-items: center;
`;
const TitleBox = styled.div`
  //display: flex;
  // justify-content: space-between;
  //width: 450px;
  margin: 20px 0;
`;
const Input = styled.input`
  border-radius: 7px;
  width: 300px;
  height: 30px;
  padding: 3px 10px;
  outline: none;
  border: 1px solid #949494;
`;
const Btn = styled.button`
  width: 50px;
  height: 35px;
  margin-top: 15px;
  font-size: 17px;
  font-weight: 400;
  color:  ${(props)=>props.theme.textColor};
  background-color: #00c4c4;
  outline: none;
  border: none;
  border-radius: 3px;
  cursor: pointer;
`;

const Img = styled.img`
  width: 250px;
  height: 250px;
  margin-bottom: 2px;
`;

const PriceDateBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;
const Span = styled.span`
  color:  ${(props)=>props.theme.textColor};
  font-size: 14px;
`;

const Input2 = styled.input`
  width: 300px;
  height: 30px;
  padding: 3px 10px;
  border-radius: 7px;
  outline: none;
  border: 1px solid #949494;
`;

const Upload = () => {
  const timeRef = useRef(null);
  const imgRef = useRef(null);
  const titleRef = useRef(null);
  const desRef = useRef(null);
  const isAtom = useRecoilValue(isDarkAtom)
  const dispatch = useDispatch();

  const [enteredNum, setEnterdNum] = useState("0");
  const [isImg, setIsImg] = useState("");
  const [isFileUrl, setIsFileUrl] = useState("");

  let curruntTime = new Date(
    new Date().getTime() - new Date().getTimezoneOffset() * 60000
  )
    .toISOString()
    .slice(0, -8);

  //?????? ?????? alret ??? ?????? ????????? ??????????????? ????????????
  const onSubmit = async (e) => {
    e.preventDefault();
    
    let choiceTime = timeRef.current.value;
    let choiceTime2 = choiceTime.substring(0, 10);
    let choiceTime3 = choiceTime.substring(11);
    if (enteredNum == "NaN" || enteredNum == "0" || choiceTime == "") {
      alert("????????? ????????? ????????? ?????????.");
    }
    // ?????? T????????? - ??????
    let choiceTime4 = choiceTime2 + "-" + choiceTime3;
    // console.log(choiceTime4)
    // console.log(choiceTime , "input time 2")
    // console.log(typeof(enteredNum), "??????")
    // console.log(parseInt(enteredNum), "??????2")
    const commaRemovePrice = enteredNum.replace(/,/g, "");
    let numberPrice = parseInt(commaRemovePrice);

    // console.log(enteredNum, "comma ??????")
    // console.log(commaRemovePrice, "comma ??????")
    console.log(
      titleRef.current.value,
      desRef.current.value,
      isFileUrl,
      commaRemovePrice,
      choiceTime4,
      "final"
    );
    // dispatch(createUserDB(titleRef,isFileUrl,commaRemovePrice));

    // dispatch(
    //   createProductDB({
    //     titie:titleRef.current.value,
    //     image:isFileUrl,
    //     price:numberPrice,
    //     description:desRef.current.value,
    //     endtime:choiceTime4
    //   })
    // );

    dispatch(
      createProductDB(
        titleRef.current.value,
        isFileUrl,
        numberPrice,
        desRef.current.value,
        choiceTime4
      )
    );
    // let data = {
    //     title: titleRef.current.value,
    //     image: isFileUrl,
    //     price: commaRemovePrice,
    //     description:desRef.current.value,
    //     endtime:choiceTime4
    // };

    // await axios.post("http://54.180.99.78/product", data);
  };
  const timeLimit = () => {
    let choiceTime = timeRef.current.value;
    console.log(choiceTime, curruntTime);
    if (choiceTime < curruntTime) {
      alert("?????? ????????? ????????? ??? ????????????.");
      console.log("hello!");
      choiceTime = curruntTime;
    }
  };
  let fileUrl = "";
  const onImgChange = async (e) => {
    const reader = new FileReader();
    const file = imgRef.current.files[0];
    console.log(file);

    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setIsImg(reader.result);
      console.log("???????????????", reader.result);
    };
    const uploadFile = await uploadBytes(
      ref(storage, `images/${e.target.files[0].name}`),
      e.target.files[0]
    );

    fileUrl = await getDownloadURL(uploadFile.ref);
    imgRef.current = { url: fileUrl };
    console.log(e.target.files[0], "this is ffile");

    //?????? url state??? ??????
    setIsFileUrl(fileUrl);
  };

  console.log(isImg, "img setting");
  //?????? ????????? , ?????? ??? string
  //?????? ?????? ?????? ????????? ?????? ,??? ??????????????? ????????? ??????????????? ????????? ????????? + ?????? ??????????????????????????? ?????????
  //
  const priceComma = (e) => {
    const value = e.target.value;
    const removedCommaValue = Number(value.replaceAll(",", ""));
    setEnterdNum(removedCommaValue.toLocaleString());
  };
  console.log(typeof enteredNum);
  return (
    <Wrap>
      <UploadForm onSubmit={onSubmit}>
        {/* <TitleBox>
          <Input ref={titleRef} placeholder="?????????" />
          <Btn>??????!</Btn>
        </TitleBox> */}

        <Img src={isImg} />
        <input
          style={{ marginBottom: "20px" }}
          onChange={onImgChange}
          ref={imgRef}
          type="file"
          accept="image/*"
        />
        <Input ref={titleRef} placeholder="?????????" />
        <br />
        <Input2 ref={desRef} placeholder="?????? ??????" />

        <PriceDateBox>
          <Span>?????? ????????? ??? ????????? ??? KRW</Span>
          <Input2
            onChange={priceComma}
            type="text"
            value={enteredNum}
            placeholder="Price"
          />
        </PriceDateBox>

        <PriceDateBox>
          <Span>?????? ?????? ?????? ??? ??????</Span>
          <Input2
            onChange={timeLimit}
            ref={timeRef}
            type={"datetime-local"}
            placeholder="end time"
            min={curruntTime}
          />
        </PriceDateBox>
        <TitleBox>
          <Btn>??????</Btn>
        </TitleBox>
      </UploadForm>
    </Wrap>
  );
};

export default Upload;
