import React from "react";
import { Route, Routes } from "react-router-dom";
import style from './App.module.scss';
import Main from '../Main/Main';
import PopUp from '../PopUp/PopUp';

function App() {
  return (
    <div className={style.page}>
      <Routes>
        <Route
          path="/" 
          element={<PopUp />}
        />
      </Routes>
      {/* <PopUp /> */}
    </div>
  );
}

export default App;