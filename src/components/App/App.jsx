import React from "react";
import { Route, Routes } from "react-router-dom";
import './App.css'
import Main from '../Main/Main';
import PopUp from '../PopUp/PopUp';

function App() {
  return (
    <div className="page">
      <Routes>
        <Route
          path="/" 
          element={<Main />}
        />
      </Routes>
      <PopUp />
    </div>
  );
}

export default App;