import { useState } from 'react';

import {Nav} from '../../components/Nav'
import {Hero} from '../../components/Hero'
import { Navigator } from '../../components/Navigator';
import { ContentExplorer } from '../../components/ContentExplorer';

export function Home() {
    const [showNavSearchBar, setShowNavSearchBar] = useState(false) 

    window.addEventListener('scroll', () => {
      setShowNavSearchBar(window.scrollY > 160)
    })

    return (
        <>
        <Nav searchBarEnabled={showNavSearchBar} transparentBackground={!showNavSearchBar}></Nav>
        <Hero></Hero>
        <Navigator></Navigator>
        <ContentExplorer></ContentExplorer>
        </>

    )
}