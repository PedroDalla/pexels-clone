import { Logo } from '../Logo';
import { StyledNavAuth } from './styles';

interface NavAuthProps {
    page: 'login' | 'join';
    type?: 'dark' |  'light'
}

//Navbar that appears in the join/login pages
export const NavAuth = ({ page, type = 'light'}: NavAuthProps): JSX.Element => {
    const rendered = page == 'login' ?
        <StyledNavAuth page={page} type={type}>
            <Logo mode='large' />
            <div>
                <span color="#fff">New to Pexels?</span>
                <a href='/join/'>
                    Join
                </a>
            </div>
        </StyledNavAuth> :

        <StyledNavAuth page={page} type={type}> 
            <Logo mode='text' />
            <div>
                <span>Have an account?</span>
                <a href='/login/'>
                    Sign In
                </a>
            </div>
        </StyledNavAuth>
    return rendered
}