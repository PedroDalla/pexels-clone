import { useState } from 'react';

import { GlobalStyles } from './components/GlobalStyles/styles';
import {Nav} from './components/Nav'
import {Hero} from './components/Hero'
import { Navigator } from './components/Navigator';
import { ContentExplorer } from './components/ContentExplorer';
import { ContentVisualizer } from './components/ContentVisualizer';


function App() {
  const [showNavSearchBar, setShowNavSearchBar] = useState(false) 

  window.addEventListener('scroll', () => {
    setShowNavSearchBar(window.scrollY > 160)
  })

  return (
    <>
      <GlobalStyles></GlobalStyles>
      <Nav searchBarEnabled={showNavSearchBar} transparentBackground={!showNavSearchBar}></Nav>
      <Hero></Hero>
      <Navigator></Navigator>
      <ContentExplorer></ContentExplorer>
      
    </>
  );
}

export default App;
