import React from 'react';
import ReactGA from 'react-ga';

import Header from './../container/Header';
import Content from './../container/Content';
import Footer from './../container/Footer';

import './app.scss';

ReactGA.initialize('UA-167534205-1');
ReactGA.pageview(window.location.pathname + window.location.search);

function App() {
  return (
    <>
      <Header />
      <Content />
      <Footer />
    </>
  );
}

export default App;
