import React from 'react';
import Header from '../Shared/Header';

const LayoutDefault = ({ children }) => (
  <div>
    <Header navPosition="right" className="reveal-from-bottom" />
    <main className="site-content">
      {children}
    </main>
  </div>
);

export default LayoutDefault;  
