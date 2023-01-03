import { IoCheckmarkCircle } from "react-icons/io5"
import styled from "styled-components"
import { Nav } from "../../components/Nav"

const StyledUpload = styled.main`
    display: flex;
    justify-content: center;
    flex-direction: column;
    max-width: 1600px;
    padding: 0 90px;
    margin: 0 auto;

    @media (max-width: 1000px){
            padding: 0 20px;
        }


    #upload-panel{
        padding: 20px;
        border-radius: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin-top: 130px;
        border: 3px #DFDFE0 dashed;

        
        > svg {
            fill: #05a081;
            margin-top: 15px;
        }

        > h1 {
            font-family: "Poppins";
            font-size: 32px;
            color: #2c343e;
            font-weight: 500;
            margin-top: 30px;
            margin-bottom: 30px;
            text-align: center;
            line-height: 40px;

        }

        > button{
            display: flex;
            justify-content: center;
            background: #05a081;
            color: #fff;
            font-family: "Poppins";
            text-decoration: none;
            font-size: 16px;
            border: 0;
            outline: 0;
            border-radius: 6px;
            padding: 0.8rem 1.7rem;
            transition: 0.2s ease;
            font-weight: 500;
            margin-bottom: 20px;
            cursor: pointer;

            &:hover {
                opacity: .7;
                transform: translateY(-2px);
            }
        }
    }

    #upload-details{
        padding: 10px 50px;
        font-family: "Poppins";
        font-size: 15px;
        font-weight: 500;
        color: #2c343e;

        #ud-grid{
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            row-gap: 20px;
            list-style: none;
            padding: 0;

            a{
                border-bottom: 2px dotted #c7c7c7;
                text-decoration: none;
                color: #2c343e;
                transition: 0.1s ease-in;

                &:hover{
                    border-bottom: 2px dotted #7c7c7c;
                }
            }

            @media (max-width: 1360px){
                grid-template-columns: 1fr 1fr;
            }

            @media (max-width: 800px){
                grid-template-columns: 1fr;
            }

            li{
                display: flex;
                align-items: center;

                svg {
                fill: #05A081;
                margin-right: 2px;
                }
            }

            
        }
    }
`

export const Upload: React.FC = () => {
    return <>
        <Nav searchBarEnabled={true} transparentBackground={false}></Nav>
        <StyledUpload>
            <div id="upload-panel">
                <svg viewBox="0 0 208.516 89.43" width="208.516" height="89.43">
                    <g id="upload-172afa182ae81b6782e86ad229e2228f_Group_6049" transform="translate(-615.898 -486)"><g id="upload-172afa182ae81b6782e86ad229e2228f_Group_5107" transform="matrix(0.966, 0.259, -0.259, 0.966, 759.659, 496.524)"><rect id="upload-172afa182ae81b6782e86ad229e2228f_Rectangle_2628" width="62.552" height="58.559" rx="23" transform="translate(2.785 0)" fill="#eef2f2"></rect><path id="upload-172afa182ae81b6782e86ad229e2228f_Path_2162" d="M66.238,18.736A22.6,22.6,0,0,0,64.7,11,15.511,15.511,0,0,0,60.89,5.353a16.3,16.3,0,0,0-5.838-3.672,24.912,24.912,0,0,0-8-1.481C43.518.037,42.4,0,33.44,0s-10.078.037-13.6.187a24.855,24.855,0,0,0-8,1.481A16.161,16.161,0,0,0,5.991,5.353a15.648,15.648,0,0,0-3.8,5.639A22.657,22.657,0,0,0,.656,18.723C.488,22.134.449,23.217.449,31.869S.488,41.6.643,45a22.6,22.6,0,0,0,1.534,7.731,15.674,15.674,0,0,0,3.814,5.652,16.3,16.3,0,0,0,5.838,3.672,24.915,24.915,0,0,0,8,1.481c3.518.15,4.639.187,13.6.187s10.078-.037,13.6-.187a24.841,24.841,0,0,0,8-1.481,16.6,16.6,0,0,0,9.653-9.324A22.672,22.672,0,0,0,66.213,45c.155-3.4.193-4.482.193-13.134S66.393,22.134,66.238,18.736ZM60.3,44.754a16.951,16.951,0,0,1-1.134,5.913,10.764,10.764,0,0,1-6.263,6.05,18.7,18.7,0,0,1-6.121,1.1c-3.48.15-4.523.187-13.325.187s-9.859-.037-13.326-.187a18.628,18.628,0,0,1-6.121-1.1,10.193,10.193,0,0,1-3.789-2.378,9.881,9.881,0,0,1-2.462-3.66,17.013,17.013,0,0,1-1.134-5.913c-.155-3.361-.193-4.37-.193-12.873s.038-9.523.193-12.872a16.942,16.942,0,0,1,1.134-5.913,9.662,9.662,0,0,1,2.475-3.66A10.283,10.283,0,0,1,14.02,7.071a18.717,18.717,0,0,1,6.121-1.1c3.48-.149,4.524-.187,13.325-.187s9.859.037,13.326.187a18.638,18.638,0,0,1,6.121,1.1A10.186,10.186,0,0,1,56.7,9.449a9.879,9.879,0,0,1,2.462,3.66A17.02,17.02,0,0,1,60.3,19.022c.155,3.361.193,4.369.193,12.872S60.452,41.393,60.3,44.754Zm0,0" transform="translate(0.634 0)"></path><path id="upload-172afa182ae81b6782e86ad229e2228f_Path_2163" d="M376.237,95.5a6.894,6.894,0,1,1-6.894-6.894A6.894,6.894,0,0,1,376.237,95.5Zm0,0" transform="translate(-325.703 -74.125)"></path><path id="upload-172afa182ae81b6782e86ad229e2228f_Path_2167" d="M64.3,62.117l-7.45-13.34a1.315,1.315,0,0,0-2.074-.18l-3.7,3.517a1.379,1.379,0,0,1-2.074-.18l-9.019-12a1.349,1.349,0,0,0-2.255.09L26.144,62.207a1.436,1.436,0,0,0,1.172,2.164H63.131A1.46,1.46,0,0,0,64.3,62.117Z" transform="translate(-11.097 -14.307)"></path></g><g id="upload-172afa182ae81b6782e86ad229e2228f_Group_5106" transform="matrix(0.966, -0.259, 0.259, 0.966, 614.852, 514.155)"><rect id="upload-172afa182ae81b6782e86ad229e2228f_Rectangle_2628-2" width="62.552" height="58.559" rx="23" transform="translate(2.785 0)" fill="#eef2f2"></rect><path id="upload-172afa182ae81b6782e86ad229e2228f_Path_2162-2" d="M66.238,18.736A22.6,22.6,0,0,0,64.7,11,15.511,15.511,0,0,0,60.89,5.353a16.3,16.3,0,0,0-5.838-3.672,24.912,24.912,0,0,0-8-1.481C43.518.037,42.4,0,33.44,0s-10.078.037-13.6.187a24.855,24.855,0,0,0-8,1.481A16.161,16.161,0,0,0,5.991,5.353a15.648,15.648,0,0,0-3.8,5.639A22.657,22.657,0,0,0,.656,18.723C.488,22.134.449,23.217.449,31.869S.488,41.6.643,45a22.6,22.6,0,0,0,1.534,7.731,15.674,15.674,0,0,0,3.814,5.652,16.3,16.3,0,0,0,5.838,3.672,24.915,24.915,0,0,0,8,1.481c3.518.15,4.639.187,13.6.187s10.078-.037,13.6-.187a24.841,24.841,0,0,0,8-1.481,16.6,16.6,0,0,0,9.653-9.324A22.672,22.672,0,0,0,66.213,45c.155-3.4.193-4.482.193-13.134S66.393,22.134,66.238,18.736ZM60.3,44.754a16.951,16.951,0,0,1-1.134,5.913,10.764,10.764,0,0,1-6.263,6.05,18.7,18.7,0,0,1-6.121,1.1c-3.48.15-4.523.187-13.325.187s-9.859-.037-13.326-.187a18.628,18.628,0,0,1-6.121-1.1,10.193,10.193,0,0,1-3.789-2.378,9.881,9.881,0,0,1-2.462-3.66,17.013,17.013,0,0,1-1.134-5.913c-.155-3.361-.193-4.37-.193-12.873s.038-9.523.193-12.872a16.942,16.942,0,0,1,1.134-5.913,9.662,9.662,0,0,1,2.475-3.66A10.283,10.283,0,0,1,14.02,7.071a18.717,18.717,0,0,1,6.121-1.1c3.48-.149,4.524-.187,13.325-.187s9.859.037,13.326.187a18.638,18.638,0,0,1,6.121,1.1A10.186,10.186,0,0,1,56.7,9.449a9.879,9.879,0,0,1,2.462,3.66A17.02,17.02,0,0,1,60.3,19.022c.155,3.361.193,4.369.193,12.872S60.452,41.393,60.3,44.754Zm0,0" transform="translate(0.634 0)"></path><path id="upload-172afa182ae81b6782e86ad229e2228f_Path_2163-2" d="M376.237,95.5a6.894,6.894,0,1,1-6.894-6.894A6.894,6.894,0,0,1,376.237,95.5Zm0,0" transform="translate(-325.703 -74.125)"></path><path id="upload-172afa182ae81b6782e86ad229e2228f_Path_2167-2" d="M64.3,62.117l-7.45-13.34a1.315,1.315,0,0,0-2.074-.18l-3.7,3.517a1.379,1.379,0,0,1-2.074-.18l-9.019-12a1.349,1.349,0,0,0-2.255.09L26.144,62.207a1.436,1.436,0,0,0,1.172,2.164H63.131A1.46,1.46,0,0,0,64.3,62.117Z" transform="translate(-11.097 -14.307)"></path></g><g id="upload-172afa182ae81b6782e86ad229e2228f_Group_5075" transform="translate(672.637 486)"><rect id="upload-172afa182ae81b6782e86ad229e2228f_Rectangle_2628-3" width="87.783" height="82.178" rx="23" transform="translate(3.472 0)" fill="#eef2f2"></rect><path id="upload-172afa182ae81b6782e86ad229e2228f_Path_2162-3" d="M92.774,26.293a31.71,31.71,0,0,0-2.152-10.849,21.768,21.768,0,0,0-5.353-7.931,22.878,22.878,0,0,0-8.193-5.154A34.96,34.96,0,0,0,65.846.28C60.89.053,59.317,0,46.747,0S32.6.053,27.667.262a34.88,34.88,0,0,0-11.23,2.079A22.68,22.68,0,0,0,8.226,7.512a21.96,21.96,0,0,0-5.335,7.914A31.8,31.8,0,0,0,.739,26.275C.5,31.062.449,32.582.449,44.724S.5,58.385.72,63.155A31.708,31.708,0,0,0,2.873,74a22,22,0,0,0,5.353,7.931,22.877,22.877,0,0,0,8.193,5.154A34.965,34.965,0,0,0,27.65,89.168c4.937.21,6.511.262,19.08.262s14.142-.052,19.08-.262a34.861,34.861,0,0,0,11.23-2.079A23.292,23.292,0,0,0,90.586,74a31.817,31.817,0,0,0,2.152-10.849c.217-4.77.271-6.289.271-18.431S92.991,31.062,92.774,26.293ZM84.437,62.805a23.788,23.788,0,0,1-1.592,8.3,15.106,15.106,0,0,1-8.79,8.491,26.248,26.248,0,0,1-8.59,1.537c-4.883.21-6.347.262-18.7.262s-13.835-.052-18.7-.262a26.141,26.141,0,0,1-8.59-1.537,14.3,14.3,0,0,1-5.317-3.337A13.866,13.866,0,0,1,10.7,71.122a23.876,23.876,0,0,1-1.591-8.3c-.218-4.717-.271-6.132-.271-18.065s.054-13.365.271-18.064A23.775,23.775,0,0,1,10.7,18.4a13.559,13.559,0,0,1,3.473-5.137,14.431,14.431,0,0,1,5.317-3.336,26.266,26.266,0,0,1,8.59-1.538c4.883-.21,6.348-.262,18.7-.262,12.371,0,13.835.053,18.7.262a26.155,26.155,0,0,1,8.59,1.538,14.3,14.3,0,0,1,5.317,3.336A13.863,13.863,0,0,1,82.846,18.4a23.884,23.884,0,0,1,1.592,8.3c.217,4.717.271,6.132.271,18.064S84.654,58.089,84.437,62.805Zm0,0" transform="translate(0.634 0)"></path><path id="upload-172afa182ae81b6782e86ad229e2228f_Path_2163-3" d="M381.8,98.276a9.674,9.674,0,1,1-9.675-9.674A9.674,9.674,0,0,1,381.8,98.276Zm0,0" transform="translate(-311.318 -68.286)"></path><path id="upload-172afa182ae81b6782e86ad229e2228f_Path_2167-3" d="M79.775,71.291,69.32,52.57a1.846,1.846,0,0,0-2.911-.253L61.22,57.253A1.935,1.935,0,0,1,58.309,57L45.653,40.167a1.893,1.893,0,0,0-3.164.127L26.224,71.417a2.015,2.015,0,0,0,1.645,3.038H78.13A2.049,2.049,0,0,0,79.775,71.291Z" transform="translate(-5.544 -4.197)"></path></g></g>
                </svg>
                <h1>Drag and drop<br />to upload</h1>
                <button>Browse</button>
            </div>
            <div id="upload-details">
                <ul id="ud-grid">
                    <li><IoCheckmarkCircle></IoCheckmarkCircle><span><b>Original</b> content you captured</span></li>
                    <li><IoCheckmarkCircle></IoCheckmarkCircle><span><b>Excludes</b> graphic nudity, violence or hate</span></li>
                    <li><IoCheckmarkCircle></IoCheckmarkCircle><span>Mindful of the rights of others</span></li>
                    <li><IoCheckmarkCircle></IoCheckmarkCircle><span>To be downloaded and <b>used for free</b></span></li>
                    <li><IoCheckmarkCircle></IoCheckmarkCircle><span><b>High quality</b> photos and videos</span></li>
                    <li><IoCheckmarkCircle></IoCheckmarkCircle><span>Read the <a href="https://www.pexels.com/terms-of-service/">Pexels Terms</a></span></li>
                </ul>
            </div>
        </StyledUpload>

    </>
}