import { StyledNav } from './styles';
import { SearchBar } from '../SearchBar'
import { GiHamburgerMenu } from 'react-icons/gi'

import { Settings } from '../Settings'
import { Logo } from '../Logo';
import { Link } from 'react-router-dom';
import { useAuth } from "../../contexts/AuthContext"

interface NavProps {
    searchBarEnabled?: boolean,
    transparentBackground?: boolean;
}

export const Nav = ({searchBarEnabled, transparentBackground}: NavProps): JSX.Element => {
    const auth = useAuth()

    return (
        <StyledNav transparentBackground={transparentBackground}>
            <Logo mode="text"/>
            {searchBarEnabled? <SearchBar navSearchBar></SearchBar> : null}
            <ul>
                <li id='explore-a-li'>
                    <Link to="/explore">Explore</Link>
                </li>
                <li id='license-a-li'>
                    <Link to="/license">License</Link>
                </li>  
                <li id='about-a-li'>
                    <Link to="/about">About</Link>
                </li>  
                <li id='auth-li'>
                    <Settings/>
                </li>
                <li id='main-a-li'>
                    {auth.user? <Link id="main-a" to="/upload">Upload</Link> : <Link id="main-a" to="/join">Join</Link>}
                    
                </li>
                <li id='collapse-menu-li'>
                    <button id='collapse-menu-btn'>
                        <GiHamburgerMenu size='22px' color='white'></GiHamburgerMenu>
                    </button>
                </li>
            </ul>
        </StyledNav>
    )
}