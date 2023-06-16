import {
  AiFillAndroid,
  AiFillApple,
  AiFillFacebook,
  AiFillInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";
import { BsPinterest } from "react-icons/bs";
import { Link } from "react-router-dom";
import { StyledFooter } from "./styles";

export function Footer() {
  return (
    <StyledFooter>
      <div id="footer-main">
        <div id="social-links">
          <div id="sl-title">
            Free photos and videos shared by talented creators.
          </div>
          <div id="sl-downloads">
            <div id="sl-downloads-title">Download one of our apps.</div>
            <div id="sl-downloads-btns">
              <button id="downloads-apple-btn">
                <AiFillApple size={28}></AiFillApple> iOS
              </button>
              <button id="downloads-android-btn">
                <AiFillAndroid size={28}></AiFillAndroid> Android
              </button>
            </div>
          </div>
          <div id="sl-social">
            <button>
              <AiFillFacebook size={32}></AiFillFacebook>
            </button>
            <button>
              <AiOutlineTwitter size={32}></AiOutlineTwitter>
            </button>
            <button>
              <AiFillInstagram size={32}></AiFillInstagram>
            </button>
            <button>
              <BsPinterest size={24}></BsPinterest>
            </button>
          </div>
        </div>
        <div id="useful-links">
          <div className="pexels-links">
            <div className="pl-title">Pexels</div>
            <ul id="pl-list">
              <li>
                <Link to="/">Free stock photos</Link>
              </li>
              <li>
                <Link to="/">Free videos</Link>
              </li>
              <li>
                <Link to="/">Popular searches</Link>
              </li>
              <li>
                <Link to="/">Collections</Link>
              </li>
              <li>
                <Link to="/">Challenges</Link>
              </li>
              <li>
                <Link to="/">Leaderboard</Link>
              </li>
              <li>
                <Link to="/">Other plugins & apps</Link>
              </li>
            </ul>
          </div>
          <div className="company-links">
            <div className="pl-title">Company</div>
            <ul>
              <li>
                <Link to="/">About</Link>
              </li>
              <li>
                <Link to="/">Blog</Link>
              </li>
              <li>
                <Link to="/">FAQ</Link>
              </li>
              <li>
                <Link to="/">Become a hero</Link>
              </li>
              <li>
                <Link to="/">Partner with Pexels</Link>
              </li>
              <li>
                <Link to="/">Image & Video API</Link>
              </li>
            </ul>
          </div>
        </div>
        <div id="popular-searches">
          <div id="ps-title">Free Stock Photos</div>
          <ul id="ps-links">
            <li>
              <Link to="/">Black and white photography</Link>
            </li>
            <li>
              <Link to="/">Happy birthday images</Link>
            </li>
            <li>
              <Link to="/">Free business videos</Link>
            </li>
            <li>
              <Link to="/">Happy new year images</Link>
            </li>
            <li>
              <Link to="/">Cool wallpapers</Link>
            </li>
            <li>
              <Link to="/">Best HD wallpapers</Link>
            </li>
            <li>
              <Link to="/">Galaxy wallpaper</Link>
            </li>
            <li>
              <Link to="/">Lock screen wallpaper</Link>
            </li>
            <li>
              <Link to="/">iPhone wallpaper</Link>
            </li>
            <li>
              <Link to="/">4K wallpaper</Link>
            </li>
            <li>
              <Link to="/">Samsung wallpaper</Link>
            </li>
            <li>
              <Link to="/">Love wallpaper</Link>
            </li>
            <li>
              <Link to="/">Mobile wallpaper</Link>
            </li>
          </ul>
        </div>
      </div>
      <div id="footer-bottom">
        <div id="copyright">© 2023 Pexels</div>
        <div id="fb-links">
          <ul>
            <li>
              <Link to="/">Terms of Use</Link>
            </li>
            <li>
              <Link to="/">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/">License</Link>
            </li>
            <li>
              <Link to="/">Imprint Cookies Policy</Link>
            </li>
          </ul>
        </div>
        <div id="fb-lang">
          <div>🌎 English</div>
        </div>
      </div>
    </StyledFooter>
  );
}
