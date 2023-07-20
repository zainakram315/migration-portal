import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './components/login';
import Imex from './components/imex';
// import SaasOptions from './components/saasOptions.js'; // Update the filename to "saasOptions.js"
import Saas from './components/saas';
import CustomCheckbox from './components/CustomCheckbox';
import ApiOptions from './components/ApiOptions';

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Login />} /> */}
        {/* <Route path="/imex-page" element={<Imex />} /> */}
        {/* <Route path="/" element={<CustomCheckbox/>}></Route> */}
        {/* <Route path="/saas" element={<Saas />} /> */}
        <Route exact path="/" element={<ApiOptions/>}></Route>
        
        
      </Routes>
    </Router>
  );
}

export default App;
