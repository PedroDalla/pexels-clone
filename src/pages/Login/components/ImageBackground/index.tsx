import { StyledImageBackground, StyledOverlay } from "./styles";

export const ImageBackground = (): JSX.Element => {
  return (
    <>
      <StyledImageBackground>
        <div className="photo-column">
          <img
            className="photo"
            src="https://images.pexels.com/photos/11829347/pexels-photo-11829347.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500 500w, https://images.pexels.com/photos/11829347/pexels-photo-11829347.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500 1000w"></img>
          <img
            className="photo"
            src="https://images.pexels.com/photos/11939705/pexels-photo-11939705.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500 500w, https://images.pexels.com/photos/11939705/pexels-photo-11939705.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500 1000w"></img>
          <img
            className="photo"
            src="https://images.pexels.com/photos/11831940/pexels-photo-11831940.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500 500w, https://images.pexels.com/photos/11831940/pexels-photo-11831940.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500 1000w"></img>
        </div>
        <div className="photo-column">
          <img
            className="photo"
            src="https://images.pexels.com/photos/11893778/pexels-photo-11893778.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500 500w, https://images.pexels.com/photos/11893778/pexels-photo-11893778.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500 1000w"></img>
          <img
            className="photo"
            src="https://images.pexels.com/photos/11866150/pexels-photo-11866150.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500 500w, https://images.pexels.com/photos/11866150/pexels-photo-11866150.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500 1000w"></img>
          <img
            className="photo"
            src="https://images.pexels.com/photos/2697239/pexels-photo-2697239.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500 500w, https://images.pexels.com/photos/2697239/pexels-photo-2697239.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500 1000w"></img>
        </div>
        {window.innerWidth >= 1000 && (
          <div className="photo-column">
            <img
              className="photo"
              src="https://images.pexels.com/photos/11780921/pexels-photo-11780921.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500 500w, https://images.pexels.com/photos/11780921/pexels-photo-11780921.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500 1000w"></img>
            <img
              className="photo"
              src="https://images.pexels.com/photos/11887829/pexels-photo-11887829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500 500w, https://images.pexels.com/photos/11887829/pexels-photo-11887829.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500 1000w"></img>
            <img
              className="photo"
              src="https://images.pexels.com/photos/11991550/pexels-photo-11991550.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500 500w, https://images.pexels.com/photos/11991550/pexels-photo-11991550.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500 1000w"></img>
          </div>
        )}
      </StyledImageBackground>
      <StyledOverlay />
    </>
  );
};
