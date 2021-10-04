import React from 'react';

import {Nav} from './components/Nav'
import {Hero} from './components/Hero'

function App() {
  return (
    <>
      <Nav searchBarEnabled={false} transparentBackground></Nav>
      <Hero></Hero>
    </>
  );
}

export default App;
