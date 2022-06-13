import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Signup = () => {
  const navigate = useNavigate();
  return (
    <Wrap>
      <Container>
        <h2>회원가입</h2>
        <Input type="text" placeholder="아이디" />
        <br />
        <Input type="password" placeholder="비밀번호" />
        <br />
        <Input type="password" placeholder="비밀번호 확인" />
        <br />
        <button>가입하기</button>
        <div>
          <p>
            이미 계정이 있나요 ?  
            <Point
              onClick={() => {
                navigate("/user/login");
              }}
            >
              로그인
            </Point>
          </p>
        </div>
      </Container>
    </Wrap>
  );
};


const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:center;
 
  margin: auto;
`;
const Container = styled.div`
  box-sizing: border-box;

  & button {
    width: 368px;
    height: 48px;
    margin-top: 15px;
    font-size: 17px;
    font-weight: 500;
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
  margin-left:15px;
`;

export default Signup;
