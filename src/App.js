import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom"; 
import './App.css';
import Login from './components/Login/Login';
import MainPage from "./components/MainPage/MainPage";
import ProjectCreationWindow from "./components/ProjectCreationWindow/ProjectCreationWindow";


function App() {
  return (
    <div className="content">
      <BrowserRouter>               
        <Routes>
          <Route path="/login/*" element={<Login />}/>
          <Route path="/mainPage/*" element={<MainPage />}/>
          <Route path="/projectCreationWindow/*" element={<ProjectCreationWindow />}/>
        </Routes>                 
      </BrowserRouter>
    </div>
  );
}

export default App;
