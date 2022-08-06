// import logo from './home_grey.svg';
import React from 'react';
import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './navigation/Navbar';

import Home from './routes/Home';
import Dashboard from './routes/Dashboard';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
          </BrowserRouter>
        </header>
      </div>
    );
  }
}

export default App;
