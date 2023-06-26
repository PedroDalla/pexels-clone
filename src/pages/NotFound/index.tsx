import { Link } from "react-router-dom";
import { Nav } from "../../components/Nav";
import { Footer } from "../../components/Footer";
import { StyledNotFound } from "./styles";

export function NotFound() {
  return (
    <StyledNotFound>
      <Nav position="fixed" searchBarEnabled />
      <div id="not-found-content">
        <div id="banner-section">
          <img
            alt=""
            src="https://images.pexels.com/photos/2748817/pexels-photo-2748817.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350"></img>
        </div>
        <div id="main-section">
          <div id="title">Oops, we couldn't find this page.</div>
          <div id="sub-title">Here are some helpful links instead:</div>
          <ul id="links-list">
            <li>
              📷 Discover free <Link to="/">photos</Link>
            </li>
            <li>
              🔍 View the most <Link to="/">popular searches</Link>
            </li>
            <li>
              🌎 <Link to="/">Change your language</Link>
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </StyledNotFound>
  );
}
