import { useEffect, useState } from "react"
import { IoPersonCircle } from "react-icons/io5"
import { RiPencilFill } from "react-icons/ri"
import { Link, useNavigate, useParams } from "react-router-dom"
import styled from "styled-components"
import { Nav } from "../../components/Nav"
import { useAuth } from "../../contexts/AuthContext"
import { IUser } from "../../interfaces"
import { fetchUser } from "../../services/firebase"
import { Navigator } from "../../components/Navigator"

const StyledProfile = styled.div`
    max-width: 1600px;
    margin: 0 auto;
    margin-top: 120px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    #title-section{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        > img{
            border-radius: 50%;
            width: 130px;
        }
        > #profile-name{
            margin: 15px 0;
            font-size: 52px;
            font-family: "Poppins";
            font-weight: 500;
            color: #2C343E;
        }
    }

    #edit-profile{
        display: flex;
        justify-content: center;
        background: #05a081;
        color: #fff;
        font-family: "Poppins";
        text-decoration: none;
        font-size: 16px;
        border: 0;
        outline: 0;
        border-radius: 6px;
        padding: 0.8rem 1.3rem;
        transition: 0.2s ease;
        font-weight: 500;
        margin-bottom: 20px;

        svg{
            margin-right: 2px;
        }

        &:hover {
          opacity: .7;
          transform: translateY(-2px);
        }
    }

    #statistics-section{
        font-family: "Poppins";
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 2px;

        a{
            text-decoration: none;
        }

        .statistic-container{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 5px 25px;
            position: relative;

            &:not(:last-child)::after{
                position: absolute;
                top: 50%;
                right: 0;
                width: 1px;
                height: 20px;
                content: "";
                transform: translateY(-50%);
                background: #dfdfe0;
                transition: 0.2s ease; 
            }

            .statistic-title{
                font-size: 14px;
                color: #7f7f7f;
                transition: 0.2s ease; 

            }

            .statistic-value{
                font-size: 24px;
                color: #2c343e;
                transition: 0.2s ease; 
            }

            &:hover{
                .statistic-title{
                    color: #2c343e;
                }

                .statistic-value{
                    color: black;
                }

                &::after{
                    background-color: #636363;
                }
            }
        }
    }

    #navigator-container{
        width: 100%;

        .counter{
            padding-left: 2px;
            color: #7f7f7f;
            font-size: 14px;
        }
    }
   
`

export const Profile: React.FC = () => {
    const { user } = useAuth()
    const { uid } = useParams()
    const navigate = useNavigate()

    const [profileInfo, setProfileInfo] = useState<IUser>()

    useEffect(() => {
        if (!uid) {
            if (user) {
                setProfileInfo(user)
            } else {
                navigate("/login")
            }
        } else {
            fetchUser(uid.substring(1)).then((result: IUser) => {
                setProfileInfo(result)
                console.log(result)
            }).catch((err) => console.error(err))
        }
    }, [uid])

    return <>
        <Nav searchBarEnabled={true} transparentBackground={false}></Nav>
        <StyledProfile>
            <div id="title-section">
                {profileInfo &&
                    <>
                        {profileInfo.photoURL ?
                            <img alt="user" src={profileInfo.photoURL} referrerPolicy="no-referrer"></img> : <IoPersonCircle size='130px' />
                        }
                        <div id="profile-name">{profileInfo.displayName}</div>
                    </>
                }
            </div>
            <Link id="edit-profile" to="/edit-profile"><RiPencilFill size={24}></RiPencilFill>Edit Profile</Link>
            <div id="statistics-section">
                <Link to="stats" className="statistic-container">
                    <span className="statistic-title">Total views</span>
                    <span className="statistic-value">{profileInfo?.views || 0}</span>
                </Link>
                <Link to="../leaderboard/all-time" className="statistic-container divider">
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
                    <li className='selected'>Gallery <span className="counter">{profileInfo?.gallery?.length || 0}</span></li>
                    <li>Collections <span className="counter">{profileInfo?.collections?.length || 0}</span></li>
                    <li>Statistics</li>
                    <li>Followers <span className="counter">{profileInfo?.totalFollowers || 0}</span></li>
                    <li>Following <span className="counter">{profileInfo?.totalFollowing || 0}</span></li>
                </Navigator>
            </div>
        </StyledProfile>
    </>
}