import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WarehouseListing from './Components/WarehouseListing';
import WarehouseDetails from './Components/WarehouseDetails';

function App() {
  return (
    <div className="App">
      {/* <Router> */}
      <div>
        <Routes>
          <Route path="/" element={<WarehouseListing />} />
          <Route path="/warehouse/:id" element={<WarehouseDetails />} />
        </Routes>
      </div>
    {/* </Router> */}
    </div>
  );
}

export default App;
