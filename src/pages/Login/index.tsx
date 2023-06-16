import { AuthForm } from "../../components/AuthForm";
import { NavAuth } from "../../components/NavAuth";
import { ImageBackground } from "./components/ImageBackground";
import { AiFillGoogleCircle } from "react-icons/ai";
import { useAuth } from "../../contexts/AuthContext";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { StyledAuthForm } from "./styles";

export const Login = (): JSX.Element => {
  const auth = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const result = await auth.functions.Login(form.email, form.password);
      console.log(result);
    } catch (err: unknown) {
      console.log(err);
      setError(true);
    }
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>, key: string) => {
    setForm({ ...form, [key]: e.target.value });
  };
  useEffect(() => {
    if (auth.user) {
      navigate("/");
    }
  }, [auth]);
  return (
    <>
      <NavAuth page="login" type="dark"></NavAuth>
      <StyledAuthForm>
        {error && (
          <div id="error-message">
            Invalid e-mail or password. Maybe you signed up with Google?
          </div>
        )}
        <div id="form-header">
          <div id="title">Welcome Back to Pexels</div>
        </div>
        <AuthForm onSubmit={(e) => handleLogin(e)}>
          {/* <button
            type="button"
            className="sm-join facebook-join"
            onClick={() => auth.functions.LoginWithFacebook()}>
            <AiFillFacebook className="icon" size={34} />
            Login with Facebook
          </button> */}
          <button
            type="button"
            className="sm-join google-join"
            onClick={() => auth.functions.LoginWithGoogle()}>
            <AiFillGoogleCircle className="icon" size={34} />
            Login with Google
          </button>
          <div className="divider">OR</div>
          <input
            type="email"
            placeholder="Email"
            required
            minLength={3}
            value={form.email}
            onChange={(e) => handleInput(e, "email")}
          />
          <input
            type="password"
            placeholder="Password"
            minLength={8}
            value={form.password}
            onChange={(e) => handleInput(e, "password")}
          />
          <button type="submit" className="form-submit">
            Login
          </button>
          <a className="footer" href="/reset-password">
            Forgot your password?
          </a>
        </AuthForm>
      </StyledAuthForm>
      <ImageBackground />
    </>
  );
};
