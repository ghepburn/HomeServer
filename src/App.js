// import logo from './home_grey.svg';
import React from 'react';
import './css/App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './services/navigation/Navbar';

import Home from './services/home/Home';
import Dashboard from './services/dashboard/Dashboard';
import Photos from './services/photoService/Photos';
import Finances from './services/financesService/Finances';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/photos" element={<Photos />} />
              <Route path="/finances" element={<Finances />} />
            </Routes>
          </BrowserRouter>
        </header>
      </div>
    );
  }
}

export default App;
