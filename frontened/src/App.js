import React from 'react'
import {BrowserRouter,Routes,Route} from 'rect-router-dom';
import LoginPage from './LoginPage.js';
import RegistrationPage from './RegistrationPage.js';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
           <Route path='/login' element={<LoginPage/>}/>
           <Route path='/registration' element={<RegistrationPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
