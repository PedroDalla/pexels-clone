import { StyledNavigator } from "./styles"

interface NavigatorProps{

}

export const Navigator = ({}: NavigatorProps) : JSX.Element => {
    return <StyledNavigator>
        <ul>
            <li className='selected'>Home</li>
            <li>Discover</li>
            <li>Videos</li>
            <li>Leaderboard</li>
            <li>Challenges</li>
        </ul>
    </StyledNavigator>
}
