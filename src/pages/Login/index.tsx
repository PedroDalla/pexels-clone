import { AuthForm } from "../../components/AuthForm"
import { NavAuth } from "../../components/NavAuth"
import { ImageBackground } from "./components/ImageBackground"
import { AiFillFacebook, AiFillGoogleCircle } from 'react-icons/ai'
import styled from "styled-components"
import { useAuth } from "../../contexts/AuthContext"
import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

const StyledAuthForm = styled.div`
    background: white;
    max-width: 480px;
    padding: 1rem;
    position: absolute;
    left: 0;
    right: 0;
    margin: 0 auto;
    top: 25%;
    z-index: 15;

    border-radius: 6px;

    #error-message{
        width: 95%;
        margin: 10px auto;
        color: #fff;
        background-color: #FF2121;
        padding: 20px 40px;
        font-size: 14px;
        text-align: center;
    }

    .divider{
        text-align: center;
    }

    
    #form-header{
        font-family: 'Poppins';
        margin-top: 10px;

        #title{
            font-size: 34px;
            font-weight: 500;
            line-height: 55px;
            text-align: center;
        }   
    }
`

export const Login = (): JSX.Element => {
    const auth = useAuth()
    const navigate = useNavigate()

    const [form, setForm] = useState({
        email: "",
        password: ""
    })
    const [error, setError] = useState(false)

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault()
        try{
            let result = await auth.functions.Login(form.email, form.password)
            console.log(result)
        } catch (err: any) {
            console.log({err})
            setError(true)
        }
    }

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>, key: string) => {
        setForm({...form, [key]: e.target.value})
    }
    useEffect(() => {
        if(auth.user){
            navigate("/")
        }
    }, [auth])
    return (
        <>
            <NavAuth page="login" type="dark"></NavAuth>
            <StyledAuthForm>
                {error &&<div id='error-message'>
                    Invalid e-mail or password. Maybe you signed up with Google?
                </div>}
                <div id="form-header">
                    <div id='title'>
                        Welcome Back to Pexels
                    </div>
                </div>
                <AuthForm onSubmit={(e) => handleLogin(e)}>
                    <button className="sm-join facebook-join" onClick={() => auth.functions.LoginWithFacebook()}><AiFillFacebook className="icon" size={34} />Login with Facebook</button>
                    <button className="sm-join google-join" onClick={() => auth.functions.LoginWithGoogle()}><AiFillGoogleCircle className="icon" size={34} />Login with Google</button>
                    <div className="divider">OR</div>
                    <input type='email' placeholder="Email" required minLength={3} value={form.email} onChange={(e) => handleInput(e, 'email')}/>
                    <input type='password' placeholder="Password" minLength={8} value={form.password}  onChange={(e) => handleInput(e, 'password')}/>
                    <button type="submit" className="form-submit">Login</button>
                    <a className='footer' href='/reset-password'>Forgot your password?</a>
                </AuthForm>
            </StyledAuthForm>
            <ImageBackground />
        </>
    )
}