import styled from "styled-components";

export const StyledCollectionThumbnail = styled.div<{ imageCount: number }>`
  cursor: pointer;
  transition: filter 0.25s ease;
  padding: 0 20px;
  &:hover {
    filter: brightness(0.5);
  }
  .collection-thumbnail {
    border-radius: 15px;
    overflow: hidden;
    width: 100%;
    margin-bottom: 10px;
    position: relative;
    padding-top: 85%;

    > .collection-images-container {
      position: absolute;
      inset: 0;
      width: 100%;

      display: grid;
      gap: 10px;
      grid-template-rows: ${({ imageCount }) => {
        switch (imageCount) {
          case 0:
          case 1:
          case 2:
            return "1fr";
          case 3:
            return "50% 50%";
        }
      }};
      grid-template-columns: ${({ imageCount }) => {
        switch (imageCount) {
          case 0:
          case 1:
            return "1fr";
          case 2:
          case 3:
            return "1fr 1fr";
        }
      }};

      .empty-collection {
        width: 100%;
        height: 100%;
        background: #d4d4d4;
      }

      > div {
        &:first-child {
          grid-row: ${({ imageCount }) => {
            if (imageCount === 3) {
              return "1/3";
            } else {
              return "1";
            }
          }};
        }

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }
  }

  .ct-text {
    padding: 0 5px;
    display: flex;
    justify-content: space-between;
    color: #7f7f7f;
    max-width: 100%;
    .ct-title {
      font-size: 22px;
      font-weight: 500;

      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      max-width: 80%;
    }

    .ct-count {
      display: flex;
      justify-content: center;
      align-items: center;
      > svg {
        fill: #7f7f7f;
      }
      > span {
        font-size: 18px;
        font-weight: 500;
      }
    }
  }
`;
