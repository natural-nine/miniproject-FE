import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { getPostDB } from "../redux/modules/post";
import { RESP } from "../res";
import { IoIosArrowForward } from "react-icons/io";

const Main = () => {
  const dispatch = useDispatch();
  const list = useSelector((state) => state.post.list);

  useEffect(() => {
    dispatch(getPostDB());
  }, []);
  ////
  return (
    <Wrap>
      {list.map((item, idx) => {
        return (
          <ListItem key={idx} endChk={item.status}>
            <ItemBox>
              <div style={{ overflow: "hidden", height: "200px" }}>
                <Img src={item.image} />
              </div>
              <TitleBox>
                <Title>{item.title}</Title>
                <Desc>{item.description}</Desc>
                <Btn>
                  지금 참여하기 <IoIosArrowForward />
                </Btn>
              </TitleBox>
            </ItemBox>
          </ListItem>
        );
      })}
    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 40px 80px;
  box-sizing: border-box;
`;

const ListItem = styled.div`
  /* background-color: olive; */
  /* border:1px solid black; */
  width: 25%;
  padding: 0 16px;
  box-sizing: border-box;
  filter: ${(props) => (props.endChk ? "grayscale(100%)" : "")};
`;

const ItemBox = styled.div`
  border: 1px solid #ddd;
  height: 370px;
`;
const TitleBox = styled.div`
  padding: 0 16px;
  margin-top: 10px;
`;

const Img = styled.img`
  background-color: aliceblue;

  width: 100%;
  height: 200px;
  object-fit: cover;
  transition: all 0.2s linear;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
`;

const Title = styled.div`
  padding: 12px 16px;

  margin-bottom: 10px;
`;
const Desc = styled.div`
  padding: 12px 16px;
  height: 40px;
  border: 1px solid #ddd;
  margin-bottom: 10px;
`;

const Btn = styled.div`
  color: rgba(0, 0, 0, 0.54);
  font-weight: 300;
  font-size: 15px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export default Main;
