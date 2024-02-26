import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom"; 
import './App.css';
import Login from './components/Login/Login';
import Plus from './components/Plus/Plus';


function App() {
  return (
    <BrowserRouter>
          <div className='app-wrapper'>
            {/* <HeaderContainer />
            <Navbar /> */}
              <div class="app-wrapper-content">                    
                <Routes>
                  <Route path="/login/*" element={<Login />}/>
                  <Route path="/plus/*" element={<Plus />}/>
                </Routes>            
              </div>         
          </div>
      </BrowserRouter>
  );
}

export default App;
