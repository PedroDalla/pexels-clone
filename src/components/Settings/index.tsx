import { StyledAuthSettings, StyledProfilePicture, StyledTooltipContent } from './styles'
import { BsThreeDots } from 'react-icons/bs'
import { IoPersonCircle } from 'react-icons/io5'
import { Tooltip } from '../Tooltip'
import { FaFacebook, FaTwitter, FaInstagram, FaPinterest, FaYoutube } from 'react-icons/fa'
import { AuthContext, useAuth } from "../../contexts/AuthContext"
import { useNavigate } from 'react-router-dom'

const TooltipContent: React.FC<{ auth: AuthContext }> = ({ auth }) => {
    const navigate = useNavigate()

    return <StyledTooltipContent>
        <ul id='options'>
            {!auth.user ? <>
                <li><button onClick={() => navigate('/login')}>Login</button></li>
                <li><button onClick={() => navigate('/join')}>Join</button></li>
            </> : <>
                <li><button onClick={() => navigate('/profile', { state: { uid: auth.user?.uid } })}>Your Profile</button></li>
                <li><button onClick={() => navigate('/profile')}>Your Collections</button></li>
                <li><button onClick={() => navigate(`/settings`)}>Settings</button></li>
                <li><button onClick={() => auth.functions.Logout()}>Logout</button></li>
            </>}
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
    </StyledTooltipContent>
}


const ProfilePicture: React.FC<{ auth: AuthContext }> = ({ auth }) => {
    return <StyledProfilePicture>
        {auth.user && auth.user.photoURL ?
            <img alt="user" src={auth.user.photoURL} referrerPolicy="no-referrer"></img>
            :
            <IoPersonCircle size='28px' />
        }
    </StyledProfilePicture>
}

export const Settings: React.FC = () => {
    const auth = useAuth()

    return (
        <Tooltip tooltipContent={<TooltipContent auth={auth} />} activateOn='hover' arrowOptions={{ top: -2 }}>
            <StyledAuthSettings>
                {auth.user ? <ProfilePicture auth={auth} /> : <BsThreeDots size='28px' />}
            </StyledAuthSettings>
        </Tooltip>
    )
}