import { StyledNav } from './styles';
import { SearchBar } from '../SearchBar'
import { BiBell } from 'react-icons/bi'
import { GiHamburgerMenu } from 'react-icons/gi'

import { AuthSettings } from '../AuthSettings'

interface NavProps {
    searchBarEnabled?: boolean,
    transparentBackground?: boolean;
}

export const Nav = ({searchBarEnabled, transparentBackground}: NavProps): JSX.Element => {
    return (
        <StyledNav transparentBackground={transparentBackground}>
            <a href='/'>
            <svg xmlns="http://www.w3.org/2000/svg" width="32px" height="32px" viewBox="0 0 32 32">
                <path d="M2 0h28a2 2 0 0 1 2 2v28a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z" fill="#05A081"></path>
                <path d="M13 21h3.863v-3.752h1.167a3.124 3.124 0 1 0 0-6.248H13v10zm5.863 2H11V9h7.03a5.124 5.124 0 0 1 .833 10.18V23z" fill="#fff"></path>
            </svg>
            <span>Pexels</span>
            </a>
            {searchBarEnabled? <SearchBar navSearchBar></SearchBar> : null}
            <ul>
                <li id='explore-a-li'>
                    <a href='/explore/'>
                        Explore
                    </a>
                </li>
                <li id='license-a-li'>
                    <a href='/license/'>
                        License
                    </a>
                </li>
                <li>
                    <div>
                        <button id='notifications-btn'>
                           <BiBell size='22px' color='white'>
                            </BiBell> 
                        </button>
                    </div>
                </li>   
                <li id='auth-li'>
                <AuthSettings>
                    </AuthSettings>
                </li>
                <li id='upload-a-li'>
                    <a id='upload-a' href='/upload/'>
                        Upload
                    </a>
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