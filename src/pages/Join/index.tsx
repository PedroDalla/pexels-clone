import styled from "styled-components";
import { AuthForm } from "../../components/AuthForm";
import { NavAuth } from "../../components/NavAuth";
import { AiFillFacebook, AiFillGoogleCircle } from 'react-icons/ai'
import { Banner } from "./components/Banner";
import { useAuth } from "../../contexts/AuthContext"

const StyledJoin = styled.div`
    max-width: 1420px;
    margin: 0 auto;
    font-family: "Roboto", Arial, Helvetica, sans-serif;
    padding: 0 20px;

    main{
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        @media (max-width: 1000px) {
            flex-direction: column;
            align-items: center;
        }
    } 
    
    #form-section{
        width: 45%;
        display: flex;
        justify-content: center;
        align-items: center;
        display: flex;
        justify-content: flex-start;
        flex-direction: column;
        text-align: center;

        @media (max-width: 1000px) {
            width: 450px;
            margin-top: 2rem;
        }

        
        #form{
            max-width: 450px;
            width: 100%;
            padding: 0.5rem;

            #form-header{
                font-family: 'Poppins';
                margin: 2rem 0;

                #title{
                    font-size: 42px;
                    font-weight: 700;
                    line-height: 55px;
                    margin-bottom: 10px;
                }   
                #subtitle{
                    font-size: 20px;
                    color: #757575;
                    font-weight: 300;
                }
            }
        }

        
    }

    #banner-section{
       
    }
   
`

export function Join() {
    const auth = useAuth();

    return (
        <StyledJoin>
            <NavAuth page='join' />
            <main>
                <section id='form-section'>
                    <div id='form'>
                        <div id="form-header">
                            <div id='title'>
                                Join the Pexels community
                            </div>
                            <div id='subtitle'>
                                Take your photography to the next level. Get it seen by millions.
                            </div>
                        </div>
                        <AuthForm>
                            <button type="button" className="sm-join facebook-join"><AiFillFacebook className="icon" size={34} onClick={() => auth.functions.LoginWithFacebook()} /> Join with Facebook</button>
                            <button type="button" className="sm-join google-join"><AiFillGoogleCircle className="icon" size={34} onClick={() => auth.functions.LoginWithGoogle()} /> Join with Google</button>
                            <div className="divider">OR</div>
                            <div className="form-group">
                                <input type='text' placeholder="First name" required />
                                <input type='text' placeholder="Last name (optional)" />
                            </div>
                            <input type='email' placeholder="Email" required />
                            <input type='password' placeholder="Password" minLength={8} />
                            <button type="submit" className="form-submit">Create New Account</button>
                        </AuthForm>
                    </div>
                </section>
                <Banner />
            </main>
        </StyledJoin>
    )
}