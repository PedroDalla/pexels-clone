import { StyledNav } from "./styles";
import { SearchBar } from "../SearchBar";

import { Settings } from "../Settings";
import { Logo } from "../Logo";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

interface NavProps {
  searchBarEnabled?: boolean;
  transparentBackground?: boolean;
  position?: "fixed" | "static";
}

export const Nav = ({
  searchBarEnabled,
  transparentBackground,
  position,
}: NavProps): JSX.Element => {
  const auth = useAuth();

  return (
    <StyledNav
      transparentBackground={transparentBackground}
      position={position}>
      <div id="nav-content">
        <Logo mode="text" />
        {searchBarEnabled ? <SearchBar navSearchBar></SearchBar> : null}
        <ul>
          <li id="explore-a-li" className="main-link">
            <Link to="/">Explore</Link>
          </li>
          <li id="license-a-li" className="main-link">
            <Link to="/">License</Link>
          </li>
          <li id="about-a-li" className="main-link">
            <Link to="/">About</Link>
          </li>
          <li id="auth-li">
            <Settings />
          </li>
          <li id="main-a-li">
            {auth.user ? (
              <Link id="main-a" to="/upload">
                Upload
              </Link>
            ) : (
              <Link id="main-a" to="/join">
                Join
              </Link>
            )}
          </li>
          {/* <li id="collapse-menu-li">
            <button id="collapse-menu-btn">
              <GiHamburgerMenu
                size="22px"
                color={
                  transparentBackground ? "white" : "black"
                }></GiHamburgerMenu>
            </button>
          </li> */}
        </ul>
      </div>
    </StyledNav>
  );
};
