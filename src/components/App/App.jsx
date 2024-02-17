import React from "react";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import style from './App.module.scss';
import Main from '../Main/Main';
import PopUp from '../PopUp/PopUp';

function App() {

  const [isPopup, setPopup] = useState(false);

  const handleOpenPopup = () => {
    setPopup(true);
  }

  const handleClosePopup = () => {
    setPopup(false);
  }

  return (
    <div className={style.page}>
      <Routes>
        <Route
          path="/" 
          element={
            <Main 
              handleOpenPopup={handleOpenPopup}
            />
          }
        />
      </Routes>
      <PopUp 
        isOpen={isPopup}
        onClose={handleClosePopup}
      />
    </div>
  );
}

export default App;