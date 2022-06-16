import styled from "styled-components";

const Slider = () => {
  return (
    <>
      <Wrap>
        <Container>
          <Inner>
            <img src="https://img.etnews.com/photonews/1805/1071765_20180514163107_288_0001.jpg" />
          </Inner>
          <Inner>
            <img src="https://mblogthumb-phinf.pstatic.net/MjAxODAzMTJfMTQ0/MDAxNTIwODMwMjQ0MjMw.WLAQY0-NZYuS2v7Z2_Cq1AwiATUcc2DcDgMiJQq14twg.V7aWOL56NU5YnGo5XoWOaj8WLfW4zxNflDhqh7tZ6GIg.JPEG.daheechu/49299707-E909-482C-A4AE-28E6E324245F-1099-0000013E704186DF_file.JPG?type=w800" />
          </Inner>
          <Inner>
            <img src="https://usercontents-d.styleshare.io/images/25226061/640x-" />
          </Inner>
        </Container>
      </Wrap>
      <button>1</button>
      <button>2</button>
      <button>3</button>
    </>
  );
};
const Wrap = styled.div`
  overflow: hidden;
`;
const Container = styled.div`
  width: 300vw;
  transform: translate(-100vw);
`;

const Inner = styled.div`
  width: 100vw;
  float: left;

  & img {
    width: 100%;
  }
`;

const Btn1 = styled.button``;
export default Slider;
