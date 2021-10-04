import { StyledAuthSettings } from './styles'
import { IoPersonCircleSharp } from 'react-icons/io5'
import { IoIosArrowDown } from 'react-icons/io'

interface AuthSettingsProps{

}

export const AuthSettings = ({}: AuthSettingsProps): JSX.Element => {
    return (
        <StyledAuthSettings>
            <IoPersonCircleSharp size='28px'></IoPersonCircleSharp>
            <IoIosArrowDown size='24px'></IoIosArrowDown>
        </StyledAuthSettings>
    )
}