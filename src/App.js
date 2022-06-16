import { Router } from "react-router-dom";
import Header from "./components/Header";
import AppRouter from "./components/Router";
import { Mobile, Pc } from "./Media";
import styled, { ThemeProvider } from "styled-components";
import { isDarkAtom } from "./recoilTheme";
import { useRecoilState } from "recoil";
import { darkMode, lightMode } from "./theme";

function App() {
  const [isAtom, setIsAtom] = useRecoilState(isDarkAtom)
  return (
    <ThemeProvider theme={isAtom ? darkMode : lightMode}>
    <Wrap>
      <Mobile />
      <Pc />
      <Header />
      <AppRouter />
    </Wrap>
    </ThemeProvider>
  );
}

const Wrap = styled.div`
  flex-wrap: wrap;
  font-family: "HallymGothic-Regular";
  background-color: ${(props)=>props.theme.bgColor};
`;
export default App;
