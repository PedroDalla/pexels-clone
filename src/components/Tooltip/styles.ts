import styled from "styled-components";

export const StyledTooltip = styled.div<{
  visible: boolean;
  arrowOptions?: {
    size?: number;
    background?: string;
    top?: number;
    left?: number;
    right?: number;
    bottom?: number;
  };
}>`
  .tooltip-trigger {
    width: 100%;
    height: 100%;
    margin: 0;
    border: none;
    padding: none;
  }
  #tooltip-main {
    #tooltip-arrow,
    #tooltip-arrow::before {
      background: ${(p) => p.arrowOptions?.background || "white"};
      width: ${(p) =>
        p.arrowOptions?.size ? p.arrowOptions.size + "px" : "8px"};
      height: ${(p) =>
        p.arrowOptions?.size ? p.arrowOptions.size + "px" : "8px"};
      position: absolute;
      ${(p) => (p.arrowOptions?.top ? `top: ${p.arrowOptions.top}px;` : "")}
      ${(p) => (p.arrowOptions?.left ? `left: ${p.arrowOptions.left}px;` : "")}
        ${(p) =>
        p.arrowOptions?.right ? `right: ${p.arrowOptions.right}px;` : ""}
        ${(p) =>
        p.arrowOptions?.bottom ? `bottom: ${p.arrowOptions.bottom}px;` : ""}
    }

    #tooltip-arrow {
      visibility: hidden;

      &::before {
        visibility: visible;
        content: "";
        transform: rotate(45deg);
      }
    }
  }
`;
