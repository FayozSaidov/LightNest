import "./App.css";
import Header from "./components/Header";
import LeftSide from "./components/LeftSide";
import MainPage from "./components/MainPage";
import ModalForm from "./components/form/ModalForm";

function App() {
  return (
    <>
      <Header />
      <LeftSide/>
      <MainPage />
      <ModalForm/>
    </>
  );
}

export default App;

