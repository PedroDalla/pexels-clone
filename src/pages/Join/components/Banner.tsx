import styled from "styled-components";

export const Banner = (): JSX.Element => {
  const StyledBanner = styled.section`
    width: 55%;
    height: 700px;
    overflow: hidden;
    display: flex;
    flex-direction: row;

    @media (max-width: 1000px) {
      width: 450px;
      margin-top: 2rem;
    }

    div {
      width: 33.3%;
      @media (max-width: 1000px) {
        width: 50%;
      }
      display: flex;
      flex-direction: column;
      padding: 0 8px;

      &:first-child {
        margin-top: -15px;
      }

      &:nth-child(2) {
        margin-top: -25px;
      }

      &:nth-child(3) {
        margin-top: -35px;
      }

      img {
        border-radius: 24px;
        margin-bottom: 1rem;
      }
    }
  `;
  return (
    <StyledBanner>
      <div className="photo-column">
        <img
          alt="Background Item"
          className="photo"
          src="https://images.pexels.com/photos/4207892/pexels-photo-4207892.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=582&w=398"></img>
        <img
          alt="Background Item"
          className="photo"
          src="https://images.pexels.com/photos/3250360/pexels-photo-3250360.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=578&w=398"></img>
        <img
          alt="Background Item"
          className="photo"
          src="https://images.pexels.com/photos/3831862/pexels-photo-3831862.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=590&w=398"></img>
      </div>
      <div className="photo-column">
        <img
          alt="Background Item"
          className="photo"
          src="https://images.pexels.com/photos/4171211/pexels-photo-4171211.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=484&w=398"></img>
        <img
          alt="Background Item"
          className="photo"
          src="https://images.pexels.com/photos/3831862/pexels-photo-3831862.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=490&w=398"></img>
        <img
          alt="Background Item"
          className="photo"
          src="https://images.pexels.com/photos/3683587/pexels-photo-3683587.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=582&w=398"></img>
        <img
          alt="Background Item"
          className="photo"
          src="https://images.pexels.com/photos/4156467/pexels-photo-4156467.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=582&w=398"></img>
      </div>
      {window.innerWidth >= 1000 && (
        <div className="photo-column">
          <img
            alt="Background Item"
            className="photo"
            src="https://images.pexels.com/photos/3689772/pexels-photo-3689772.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=282&w=398"></img>
          <img
            alt="Background Item"
            className="photo"
            src="https://images.pexels.com/photos/3831862/pexels-photo-3831862.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=542&w=398"></img>
          <img
            alt="Background Item"
            className="photo"
            src="https://images.pexels.com/photos/2437299/pexels-photo-2437299.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=502&w=398"></img>
        </div>
      )}
    </StyledBanner>
  );
};
