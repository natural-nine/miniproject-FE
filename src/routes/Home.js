import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { loadProductDB } from "../redux/modules/productPost";

import { IoIosArrowForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slide from "../components/Slide";

const Main = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const list = useSelector((state) => state.product.list);

  React.useEffect(() => {
    dispatch(loadProductDB());
  }, []);

  return (
    <>
      <Slide />
      <Wrap>
        {list !== undefined &&
          list.map((item, idx) => {
            return (
              <ListItem key={idx} endChk={item.status}>
                <ItemBox>
                  <div
                    style={{
                      overflow: "hidden",
                      height: "220px",
                    }}
                  >
                    <Img src={item.image} />
                  </div>
                  <TitleBox>
                    <Title>{item.title}</Title>
                    <Desc>{item.description}</Desc>
                    <Btn
                      onClick={() => {
                        navigate(`/detail/${idx}`);
                      }}
                    >
                      지금 참여하기 <IoIosArrowForward />
                    </Btn>
                  </TitleBox>
                </ItemBox>
              </ListItem>
            );
          })}
      </Wrap>
    </>
  );
};

const Wrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  min-width: 873px;
  padding: 40px 80px;
  box-sizing: border-box;
`;

const ListItem = styled.div`
  width: 25%;
  padding: 0 16px;
  margin-bottom: 30px;

  box-sizing: border-box;
  filter: ${(props) => (props.endChk ? "" : "grayscale(100%)")};
`;

const ItemBox = styled.div`
  border: 1px solid #ddd;
  height: 390px;
`;
const TitleBox = styled.div`
  padding: 0 16px;
  margin-top: 10px;
`;

const Img = styled.img`
  //background-color: aliceblue;
  width: 100%;
  height: 220px;
  object-fit: fill;
  transition: all 0.2s linear;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
`;

const Title = styled.div`
  padding: 12px 16px;
  margin-bottom: 10px;
  font-size: 15px;
  font-weight: 900;
  color: #212121;
`;
const Desc = styled.div`
  padding: 5px 16px;
  height: 40px;
  /* border: 1px solid #ddd; */
  margin-bottom: 20px;
  color: #212121;
  font-size: 15px;
  align-items: center;
`;

const Btn = styled.div`
  color: #949494;
  font-weight: 300;
  font-size: 15px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export default Main;
