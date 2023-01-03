import { useState } from 'react';

import { Nav } from '../../components/Nav'
import { Hero } from '../../components/Hero'
import { Navigator } from '../../components/Navigator';
import { ContentExplorer } from '../../components/ContentExplorer';
import styled from 'styled-components';


const StyledNavigatorWrapper = styled.div`
display: flex;
justify-content: center;
`

export function Home() {
  const [showNavSearchBar, setShowNavSearchBar] = useState(false)

  window.addEventListener('scroll', () => {
    setShowNavSearchBar(window.scrollY > 100)
  })

  return (
    <>
      <Nav searchBarEnabled={showNavSearchBar} transparentBackground={!showNavSearchBar}></Nav>
      <Hero></Hero>
      <StyledNavigatorWrapper>
        <Navigator>
          <li className='selected'>Home</li>
          <li>Discover</li>
          <li>Videos</li>
        </Navigator>
      </StyledNavigatorWrapper>
      <ContentExplorer></ContentExplorer>
    </>
  )
}