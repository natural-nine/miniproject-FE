import { Router } from "react-router-dom";
import Header from "./components/Header";
import AppRouter from "./components/Router";
import { Mobile, Pc } from "./Media";

function App() {
  return (
    <>
      <Mobile />
      <Pc />
      <Header />
      <AppRouter />
    </>
  );
}

export default App;
