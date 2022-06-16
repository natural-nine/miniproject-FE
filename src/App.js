import { Router } from "react-router-dom";
import Header from "./components/Header";
import AppRouter from "./components/Router";
import { Mobile, Pc } from "./Media";
import styled from "styled-components";

function App() {
  return (
    <Wrap>
      <Mobile />
      <Pc />
      <Header />

      <AppRouter />
    </Wrap>
  );
}

const Wrap = styled.div`
  flex-wrap: wrap;
  font-family: "HallymGothic-Regular";
`;
export default App;
