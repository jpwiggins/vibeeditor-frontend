import React from 'react';
import Header from './Header';
import Footer from './Footer';

function Layout({ children, onSignIn, showFooter = true }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header onSignIn={onSignIn} />
      <main className="flex-grow">
        {children}
      </main>
      {showFooter && <Footer />}
    </div>
  );
}

export default Layout;