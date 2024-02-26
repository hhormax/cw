import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom"; 
import './App.css';
import Login from './components/Login/Login';
import Plus from './components/Plus/Plus';
import Navbar from "./components/Navbar/Navbar";
import HeaderContainer from "./components/Header/HeaderContainer";
import MainPage from "./components/MainPage/MainPage";


function App() {
  return (
    <div className="content">
      <BrowserRouter>               
        <Routes>
          <Route path="/login/*" element={<Login />}/>
          <Route path="/mainPage/*" element={<MainPage />}/>
        </Routes>                 
      </BrowserRouter>
    </div>
  );
}

export default App;
