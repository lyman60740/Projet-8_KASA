import React from 'react';
import Header from './Header';
import Footer from './Footer';

function Template({ children }) {
  return (
    <>
    <div className="container">
        <Header />
        {children}
    </div>
    <Footer />
    </>
  );
}

export default Template;
