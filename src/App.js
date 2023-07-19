import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './components/login';
import Imex from './components/imex';
import Options from './components/options';
// import SaasOptions from './components/saasOptions.js'; // Update the filename to "saasOptions.js"
import Saas from './components/saas';
import ApigeeOptions from './components/ApigeeOptions';
import CustomCheckbox from './components/CustomCheckbox';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/imex-page" element={<Imex />} />
        <Route exact path="/ApigeeOptions" element={<ApigeeOptions/>}/>
        <Route exact path="/CustomCheckBox" element={<CustomCheckbox/>}></Route>
        <Route path="/options-page" element={<Options />} />
        {/* <Route path="/saasoptions-page" element={<SaasOptions />} /> */}
        <Route path="/saas" element={<Saas />} />
      </Routes>
    </Router>
  );
}

export default App;
