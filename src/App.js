// import logo from './home_grey.svg';
import React from 'react';
import './css/App.scss';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './services/home/Home';
import Dashboard from './services/dashboard/Dashboard';
import Photos from './services/photoService/Photos';

import FinanceService from './services/financeService/FinanceService';
import SpendingService from './services/financeService/subServices/spendingService/SpendingService';

import Navbar from "./services/navigation/Navbar";

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <div className="app-content">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
            <Navbar />
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/dashboard/photos" element={<Photos />} />
              <Route path="/dashboard/finances" element={<FinanceService />} />
              <Route path="/dashboard/finances/spending" element={<SpendingService />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    );
  }
}

export default App;
