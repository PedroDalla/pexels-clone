import { useEffect, useState } from "react";
import { IoPersonCircle } from "react-icons/io5";
import { RiPencilFill } from "react-icons/ri";
import { Link, useParams } from "react-router-dom";
import { Nav } from "../../components/Nav";
import { useAuth } from "../../contexts/AuthContext";
import { IUser } from "../../interfaces";
import { fetchUser } from "../../services/firebase";
import { Navigator } from "../../components/Navigator";
import { UserGallery } from "./components/UserGallery";
import { StyledProfile } from "./styles";
import { Footer } from "../../components/Footer";
import { Collections } from "./components/Collections";

interface ProfileNavigator {
  galleryCount: number;
  collectionCount: number;
  followerCount: number;
  followingCount: number;
}

export const Profile: React.FC<{ page: "Gallery" | "Collections" }> = ({
  page,
}) => {
  const { user } = useAuth();
  const { uid } = useParams();

  const [profileInfo, setProfileInfo] = useState<IUser>();

  const [navigatorInfo, setNavigatorInfo] = useState<ProfileNavigator>({
    galleryCount: 0,
    collectionCount: 0,
    followerCount: 0,
    followingCount: 0,
  });

  useEffect(() => {
    //Scroll up for when redirected from another page
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    if (uid) {
      fetchUser(uid)
        .then((result: IUser) => {
          setProfileInfo(result);
        })
        .catch((err) => console.error(err));
    }
  }, [uid, user]);

  useEffect(() => {
    if (profileInfo) {
      setNavigatorInfo({
        galleryCount: profileInfo.gallery
          ? Object.keys(profileInfo.gallery).length
          : 0,
        collectionCount: profileInfo.collections
          ? Object.keys(profileInfo.collections).length
          : 0,
        followerCount: profileInfo.totalFollowers,
        followingCount: profileInfo.totalFollowing,
      });
    }
  }, [profileInfo]);

  let renderedScreen;
  switch (page) {
    case "Gallery":
      renderedScreen = <UserGallery user={profileInfo} />;
      break;
    case "Collections":
      renderedScreen = <Collections user={profileInfo} />;
      break;
  }

  if (!profileInfo) return null;
  return (
    <>
      <Nav searchBarEnabled={true} transparentBackground={false}></Nav>
      <StyledProfile>
        <div id="title-section">
          {profileInfo && (
            <>
              {profileInfo.photoURL ? (
                <img
                  alt="user"
                  src={profileInfo.photoURL}
                  referrerPolicy="no-referrer"></img>
              ) : (
                <IoPersonCircle size="130px" />
              )}
              <div id="profile-name">{profileInfo.displayName}</div>
            </>
          )}
        </div>
        {user && uid && user.uid === uid ? (
          <Link id="edit-profile" to="/edit-profile">
            <RiPencilFill size={24}></RiPencilFill>Edit Profile
          </Link>
        ) : null}

        <div id="statistics-section">
          <Link to="stats" className="statistic-container">
            <span className="statistic-title">Total views</span>
            <span className="statistic-value">{profileInfo?.views || 0}</span>
          </Link>
          <Link
            to="../leaderboard/all-time"
            className="statistic-container divider">
            <span className="statistic-title">All-time rank</span>
            <span className="statistic-value">1</span>
          </Link>
          <Link to="../leaderboard/30-day" className="statistic-container">
            <span className="statistic-title">30-day rank</span>
            <span className="statistic-value">1</span>
          </Link>
        </div>
        <div id="navigator-container">
          <Navigator>
            <li className={page === "Gallery" ? "selected" : ""}>
              <Link to={`/profile/${profileInfo.uid}/gallery`}>
                Gallery{" "}
                <span className="counter">{navigatorInfo.galleryCount}</span>
              </Link>
            </li>
            <li className={page === "Collections" ? "selected" : ""}>
              <Link to={`/profile/${profileInfo.uid}/collections`}>
                {" "}
                Collections
                <span className="counter">{navigatorInfo.collectionCount}</span>
              </Link>
            </li>
            <li>Statistics</li>
            <li>
              Followers{" "}
              <span className="counter">{navigatorInfo.followerCount}</span>
            </li>
            <li>
              Following{" "}
              <span className="counter">{navigatorInfo.followingCount}</span>
            </li>
          </Navigator>
        </div>
        {renderedScreen}
      </StyledProfile>
      <Footer />
    </>
  );
};
