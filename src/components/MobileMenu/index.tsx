import { useEffect } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { StyledMobileMenu } from "./styles";

export const MobileMenu: React.FC = () => {
  const { user } = useAuth();

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);
  return (
    <StyledMobileMenu>
      <div id="menu-main-links">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">Discover Photos</Link>
          </li>
          <li>
            <Link to="/">Popular Searches</Link>
          </li>
        </ul>
        {user ? (
          <ul>
            <li>
              <Link to={`/profile/${user.uid}`}>Your Profile</Link>
            </li>
            <li>
              <Link to="/upload">Upload</Link>
            </li>
            <li>
              <Link to="/license">License</Link>
            </li>
            <li>
              <Link to="/settings">Settings</Link>
            </li>
            <li>
              <Link to="/">Logout</Link>
            </li>
          </ul>
        ) : (
          <ul>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/join">Join</Link>
            </li>
            <li>
              <Link to="/">Popular Searches</Link>
            </li>
            <li>
              <Link to="/license">License</Link>
            </li>
          </ul>
        )}
      </div>
      <div id="menu-media-links">
        <ul>
          <li>
            <Link to="/">
              <FaFacebook size={25} />
            </Link>
          </li>
          <li>
            <Link to="/">
              <FaTwitter size={25} />
            </Link>
          </li>
          <li>
            <Link to="/">
              <FaInstagram size={25} />
            </Link>
          </li>
          <li>
            <Link to="/">
              <FaPinterest size={25} />
            </Link>
          </li>
          <li>
            <Link to="/">
              <FaYoutube size={25} />
            </Link>
          </li>
        </ul>
      </div>
    </StyledMobileMenu>
  );
};
