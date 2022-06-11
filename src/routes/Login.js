import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Login = () => {
  const navigate = useNavigate();


  
  return (
    <Wrap>
      <Container>
        <h2>로그인</h2>
        <Input type="text" placeholder="ID" />
        <br />
        <Input type="password" placeholder="PASSWORD" />
        <br />
        <button>로그인</button>

        <p>
          아직 계정이 없나요 ?{" "}
          <Point
            style={{ cursor: "pointer" }}
            onClick={() => {
              navigate("/user/signup");
            }}
          >
            회원가입
          </Point>
        </p>
      </Container>
    </Wrap>
  );
};


const Wrap = styled.div`
display:flex;
flex-direction:column;
align-items:center;

`;
const Container = styled.div`
  box-sizing: border-box;

  & button {
    width: 368px;
    height: 48px;
    margin-top: 15px;
    font-size: 17px;
    font-weight: 400;
    color: white;
    background-color: #00c4c4;
    outline: none;
    border: none;
    border-radius: 3px;
    cursor: pointer;
  }

  & p {
    font-size: 14px;
  }
`;
const Input = styled.input`
  width: 368px;
  height: 48px;
  box-sizing: border-box;
  margin-bottom: 10px;
  padding: 0 16px;
  border: 1px solid #ddd;

  &::placeholder {
    color: #ddd;
  }

  &:hover {
    border: 1px solid #696969;
    transition: border 0.3s ease-in-out;
  }

  &:focus {
    outline: none;
  }
`;

const Point = styled.span`
  color: #00c4c4;
  text-decoration: underline;
  cursor: "pointer";
  margin-left: 15px;
`;

export default Login;
