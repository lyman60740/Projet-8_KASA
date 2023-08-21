// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Error from './pages/Error';
import Home from './pages/Home';
import About from './pages/About';
import Product from './pages/Product';
import './index.css';
import './mobile.css';

function App() {
  return (
    <Router>
      <div className="container">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="*" element={<Error />} />
        </Routes>

      </div>
      <Footer />
    </Router>
  );
}

export default App;
