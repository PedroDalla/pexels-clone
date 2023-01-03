import { StyledNavigator } from "./styles"

export const Navigator: React.FC = ({ children }): JSX.Element => {
    return <StyledNavigator>
        <ul>
            {children}
        </ul>
    </StyledNavigator>
}
