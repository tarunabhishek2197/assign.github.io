import React from 'react';
// import Calculator from './screens/Calculator';
// import Tab from './screens/Tab';
// import Tab4 from './screens/Tab4';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Splash from './screens/Splash';
import SignUp from './screens/SignUp';

// import FirstTab from './screens/FirstTab';


function App() {
  return (

    <div>
      

    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Splash/>} /> 
          <Route path="/signup" element={<SignUp/>} /> 
          {/* <Route path="/notification" element={<FirstTab/>} />
          <Route path="/photo" element={<Tab/>} />
          <Route path="/text" element={<Tab4/>} />
          <Route path="/calculator" element={<Calculator/>} />       */}
          </Routes>
      </BrowserRouter>
      </div>
  );
}

export default App;