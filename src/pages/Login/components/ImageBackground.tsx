import styled from "styled-components"

export const ImageBackground = (): JSX.Element => {

    const StyledOverlay = styled.div`
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
        background: rgba(0,0,0,0.5);

    `

    const StyledImageBackground = styled.div`
        overflow: hidden;
        display: flex;
        flex-direction: row;
        user-select: none;
        height: 100%;
        max-width: 1200px;

        padding-top: 1rem;
        margin: 0 auto;

        z-index: -10;

        div {
            width: 33.3%;
            @media (max-width: 1000px) {
                width: 50%;
            }
            display: flex;
            flex-direction: column;
            padding: 0 8px;

            img{
                margin-bottom: 1rem;
            }
        }

    `
    return (
        <>
            <StyledImageBackground>
                <div className="photo-column">
                    <img className="photo" src="https://images.pexels.com/photos/11829347/pexels-photo-11829347.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500 500w, https://images.pexels.com/photos/11829347/pexels-photo-11829347.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500 1000w"></img>
                    <img className="photo" src="https://images.pexels.com/photos/11939705/pexels-photo-11939705.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500 500w, https://images.pexels.com/photos/11939705/pexels-photo-11939705.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500 1000w"></img>
                    <img className="photo" src="https://images.pexels.com/photos/11831940/pexels-photo-11831940.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500 500w, https://images.pexels.com/photos/11831940/pexels-photo-11831940.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500 1000w"></img>

                </div>
                <div className="photo-column">
                    <img className="photo" src="https://images.pexels.com/photos/11893778/pexels-photo-11893778.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500 500w, https://images.pexels.com/photos/11893778/pexels-photo-11893778.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500 1000w"></img>
                    <img className="photo" src="https://images.pexels.com/photos/11866150/pexels-photo-11866150.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500 500w, https://images.pexels.com/photos/11866150/pexels-photo-11866150.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500 1000w"></img>
                    <img className="photo" src="https://images.pexels.com/photos/2697239/pexels-photo-2697239.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500 500w, https://images.pexels.com/photos/2697239/pexels-photo-2697239.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500 1000w"></img>
                </div>
                {
                    window.innerWidth >= 1000 &&
                    <div className="photo-column">
                        <img className="photo" src="https://images.pexels.com/photos/11780921/pexels-photo-11780921.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500 500w, https://images.pexels.com/photos/11780921/pexels-photo-11780921.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500 1000w"></img>
                        <img className="photo" src="https://images.pexels.com/photos/11887829/pexels-photo-11887829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500 500w, https://images.pexels.com/photos/11887829/pexels-photo-11887829.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500 1000w"></img>
                        <img className="photo" src="https://images.pexels.com/photos/11991550/pexels-photo-11991550.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500 500w, https://images.pexels.com/photos/11991550/pexels-photo-11991550.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500 1000w"></img>
                    </div>
                }
            </StyledImageBackground>
            <StyledOverlay />
        </>
    )

}