import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import React from "react";

const Signup = () => {
  const navigate = useNavigate();

  const [id, setId] = React.useState("");
  const [pwd, setPwd] = React.useState("");
  const [pwd_chk, setPwdChk] = React.useState("");
  


// const passwordCheck = () => {
//   if (!id_ref.current.value || !pw_ref.current.value || !name_ref.current.value) {
//     alert("아직 입력하지 않은 항목이 있습니다."); return false;
//   } if (pw_ref.current.value === pw2_ref.current.value) {
//     // signupFB();
//   } else {
//     window.alert("비밀번호가 일치 하지 않습니다.");
//   }
//   };

console.log(id,pwd)
  const signup = () => {
    
    if (id === "" || pwd === "" || pwd_chk === "") {
      window.alert("모두 입력해 주세요!");
      return;
    }

    if (pwd !== pwd_chk) {
      window.alert("비밀번호와 비밀번호 확인이 일치하지 않습니다!");
      return;
    }
  };



  
  return (
    <Wrap>
      <Container>
        <h2>회원가입</h2>
        <Input
          type="text"
          placeholder="아이디"
          onChange={(e) => {
            setId(e.target.value);
          }}
          defaultValue={id}
        />
        <br />
        <Input
          type="password"
          placeholder="비밀번호"
          onChange={(e) => {
            setPwd(e.target.value);
          }}
          defaultValue={pwd}
        />
        <br />
        <Input
          type="password"
          placeholder="비밀번호 확인"
          onChange={(e) => {
            setPwdChk(e.target.value);
          }}
          defaultValue={pwd_chk}
        />
        <br />
        <button onClick={signup}>가입하기</button>
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
  justify-content: center;

  margin: auto;
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

export default Signup;
