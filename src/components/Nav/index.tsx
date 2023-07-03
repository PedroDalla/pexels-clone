import { StyledNav } from "./styles";
import { SearchBar } from "../SearchBar";
import { GiHamburgerMenu } from "react-icons/gi";
import { Settings } from "../Settings";
import { Logo } from "../Logo";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { useState } from "react";
import { MobileMenu } from "../MobileMenu";
import { createPortal } from "react-dom";
import { IoMdClose } from "react-icons/io";

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
  const [displayMenu, setDisplayMenu] = useState(false);

  return (
    <StyledNav
      transparentBackground={transparentBackground && !displayMenu}
      background={displayMenu ? "black" : "white"}
      position={position}>
      <div id="nav-content">
        <Logo mode="text" />
        {(searchBarEnabled || displayMenu) && (
          <SearchBar navSearchBar></SearchBar>
        )}
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
          <li id="collapse-menu-li">
            <button
              id="collapse-menu-btn"
              onClick={() => setDisplayMenu((dM) => !dM)}>
              {displayMenu ? (
                <IoMdClose size="26px" color="white"></IoMdClose>
              ) : (
                <GiHamburgerMenu
                  size="22px"
                  color={
                    transparentBackground ? "white" : "black"
                  }></GiHamburgerMenu>
              )}
            </button>
          </li>
        </ul>
      </div>
      {displayMenu && createPortal(<MobileMenu />, document.body)}
    </StyledNav>
  );
};
