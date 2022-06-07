import { StyledAuthSettings } from './styles'
import { BsThreeDots } from 'react-icons/bs'
import { Tooltip } from '../Tooltip'
import styled from 'styled-components'
import { FaFacebook, FaTwitter, FaInstagram, FaPinterest, FaYoutube } from 'react-icons/fa'
import { useAuth } from "../../contexts/AuthContext"
import { useMemo } from 'react'

const StyledDiv = styled.div`
    min-width: 340px;
    margin: 0;
    user-select: none;

    ul{
        list-style: none;
        margin: 8px 0;
        padding: 0;

        li{
            margin: 0;

            button{
                padding-left: 8px;
                background: white;
                font-size: 15px;
                width: 100%;
                padding: 10px 0 10px 14px;
                border: none;
                outline: none;
                text-align: left;

                font-family: 'Poppins';
                font-weight: 500;
                line-height: 1.4;
                color: #5e5e5e;

                &:hover{
                    background: #E8E8E8;
                    color: #1A1A1A;
                    cursor: pointer;
                }
            }
        } 
    }

    #media-links{

        ul{
            list-style: none;
            margin: 10px 0 10px 0;
            padding: 0 10px 0 10px;
            display: flex;
            flex-direction: row;

            li{
                width: 20%;

                button{
                    width: 100%;
                    color: black;
                    padding: 0;
                    display: flex;
                    padding: 10px 0 10px 0;
                    justify-content: center;

                    &:hover{
                        background: #232A34;
                        color: white;

                    }
                }
            }
        }
    }
`



export const Settings = (): JSX.Element => {
    const auth = useAuth()

    const tooltipContent = useMemo(() => <StyledDiv>
        <ul id='options'>
            {!auth.user && <>
                <li><button>Login</button></li>
                <li><button>Join</button></li>
            </> }
            <li><button>Change Language</button></li>
            <li><button>Image & Video API</button></li>
            <li><button>Apps & Plugins</button></li>
            <li><button>FAQ</button></li>
            <li><button>Partnership</button></li>
            <li><button>Imprint & Terms</button></li>
        </ul>
        <div id='media-links'>
            <ul>
                <li><button><FaFacebook size={19} /></button></li>
                <li><button><FaTwitter size={19} /></button></li>
                <li><button><FaInstagram size={19} /></button></li>
                <li><button><FaPinterest size={19} /></button></li>
                <li><button><FaYoutube size={19} /></button></li>
            </ul>
        </div>
    </StyledDiv>, [auth])

    return (
        <Tooltip tooltipContent={tooltipContent} activateOn='hover'>
            <StyledAuthSettings>
               <BsThreeDots size='28px'></BsThreeDots>
            </StyledAuthSettings>
        </Tooltip>
    )
}