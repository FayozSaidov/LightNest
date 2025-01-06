import "./App.css";
import Header from "./components/Header";
import LeftSide from "./components/LeftSide";
import MainPage from "./components/MainPage";
import Search from "./components/Search";

function App() {
  return (
    <>
      <Header />
      <LeftSide/>
      <Search/>
      <MainPage />
    </>
  );
}

export default App;

