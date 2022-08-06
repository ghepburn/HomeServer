// import logo from './home_grey.svg';
import React from 'react';
import './css/App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './navigation/Navbar';

import Home from './routes/Home';
import Dashboard from './routes/Dashboard';
import Photos from './routes/Photos';

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
            </Routes>
          </BrowserRouter>
        </header>
      </div>
    );
  }
}

export default App;
