import { StyledNavigator } from "./styles"

export const Navigator = () : JSX.Element => {
    return <StyledNavigator>
        <ul>
            <li className='selected'>Home</li>
            <li>Discover</li>
            <li>Videos</li>
        </ul>
    </StyledNavigator>
}
