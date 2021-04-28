import React from 'react';
import Header from './components/header';
import Image from './images/docimage.png';
import SearchDoc from './components/searchdoc';

function App() {
  return <>
  <section className="header-section">
    <Header />
    <div className="header-wrapper" style={{padding:'0px'}}>
      <div className="find-doctor">
        <h2>Find a doctor and book online</h2>
        <span className="fn-d-pr">Easily book a doctor anywhere in the world with ala.doc</span>
        <SearchDoc />
      </div>
      <img className="doc-image" src={Image} alt=""/>
    </div>
  </section>
  </>
}

export default App;
