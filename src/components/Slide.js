import React, { Component } from "react";
import Slider from "react-slick";
import styled from "styled-components";

const Slide = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Wrap>
      <Slider {...settings}>
        <ImgBox>
          {/* <Img1 src="https://i.pinimg.com/564x/85/06/e5/8506e51f26a85bc13658d354638470da.jpg" /> */}
        </ImgBox>
        <ImgBox2>
          {/* <Img1 src="https://i.pinimg.com/564x/c9/37/c3/c937c3255b76874c7ba44c0af24ee3f4.jpg" /> */}
        </ImgBox2>
        <ImgBox3>
          {/* <Img1 src="https://i.pinimg.com/736x/3b/5b/52/3b5b52feb2cee553b19ae5504d292092.jpg" /> */}
        </ImgBox3>
        <ImgBox4>
          {/* <Img1 src="https://i.pinimg.com/564x/bb/85/46/bb8546ee05240773e0e86e7b2a6cdc7f.jpg" /> */}
        </ImgBox4>
        {/* <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div> */}
      </Slider>
    </Wrap>
  );
};

const Wrap = styled.div`
  margin-top: 10px;
  box-sizing: border-box;
  padding: 40px 80px;
`;
const ImgBox = styled.div`
  // padding-left: 80px;
  // background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
  background-image: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.2),
      rgba(0, 0, 0, 0.2)
    ),
    url("https://i.pinimg.com/564x/0c/47/a9/0c47a9c1c64f1450e4c082e49c268b7e.jpg");
  background-position: 20% 50%;
  background-size: contain;
  //background-repeat: no-repeat;
  width: 100%;
  height: 300px;
`;
const ImgBox2 = styled.div`
  //padding-left: 80px;
  // background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
  background-image: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.2),
      rgba(0, 0, 0, 0.2)
    ),
    url("https://i.pinimg.com/564x/c9/37/c3/c937c3255b76874c7ba44c0af24ee3f4.jpg");
  background-position: 20% 30%;
  background-size: contain;
  width: 100%;
  height: 300px;
`;
const ImgBox3 = styled.div`
  //padding-left: 80px;
  // background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
  background-image: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.2),
      rgba(0, 0, 0, 0.2)
    ),
    url("https://i.pinimg.com/736x/3b/5b/52/3b5b52feb2cee553b19ae5504d292092.jpg");
  background-position: 20% 30%;
  background-size: contain;
  width: 100%;
  height: 300px;
`;
const ImgBox4 = styled.div`
  //padding-left: 80px;
  // background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
  background-image: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.3),
      rgba(0, 0, 0, 0.3)
    ),
    url("https://i.pinimg.com/564x/b5/86/4b/b5864b1f41b1db72bb973924c018228a.jpg");
  background-position: 20% 30%;
  background-size: contain;
  //background-repeat: no-repeat;
  width: 100%;
  height: 300px;
`;
const Img1 = styled.img`
  width: 80%;
  height: 250px;
  object-fit: contain;
`;

export default Slide;
