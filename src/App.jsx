import "./App.css";
import Header from "./components/Header";
import LeftSide from "./components/LeftSide";
import MainPage from "./components/MainPage";
import ModalForm from "./components/form/ModalForm";
import React, { useState, useEffect } from "react";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isModalOpen]);

  return (
    <div>
      <Header openModal={() => setIsModalOpen(true)} />
      {isModalOpen && <ModalForm closeModal={() => setIsModalOpen(false)} />}

      <div className="h-screen overflow-hidden">
        <LeftSide />
        <MainPage />
      </div>
    </div>
  );
}

export default App;
