import styled from "styled-components";

export const StyledLogo = styled.a<{size: number}>`
    &:hover {
      opacity: .7;
    }
    
    display: flex;
    align-items: center;
    text-decoration: none;
    transition: .2s ease;

    margin-right: 2.15rem;
    @media (max-width: 1000px) {
      margin-right: 1rem;
    }

    > svg {
      height: ${({size}) => `${size}px`};
      width: ${({size}) => `${size}px`};
      border-radius: 8px;
    }
    > span {
      margin-left: 1rem;
      font-size: 18px;
      font-family: "Poppins";
      font-weight: 500;
      display: flex;
      align-items: center;

      @media (max-width: 1000px) {
        display: none;
      }
    }
`