import styled from "styled-components";

export const StyledNavigator = styled.div`
  > ul {
    margin: 2rem 0;
    list-style: none;
    display: flex;
    flex-direction: row;
    padding: 0;
    max-width: 100%;
    overflow: overlay;

    li {
      margin: 0 4px;
      font-size: 17px;
      transition: 0.2s color ease;
      cursor: pointer;
      padding: 12px 20px;
      font-weight: 500;
      border: 1px solid transparent;
      border-radius: 30px;
      height: 45px;

      white-space: nowrap;

      a,
      span {
        text-decoration: none;
        color: #4a4a4a;
      }

      &:hover {
        a,
        span {
          color: black;
        }
      }

      &.disabled {
        cursor: not-allowed;
      }

      &.selected {
        a,
        span {
          color: #fff;
        }

        background-color: black;

        &:hover {
          background-color: #2c343e;
          color: #fff;
        }
      }
    }
  }
`;
