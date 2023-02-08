import "./login.css"
import { NavLink } from "react-router-dom";

export default function Login() {
  return (
    <div className="login">
        <div className="loginWrapper">
            <div className="loginLeft">
            <img src="/assets/logo.jfif" alt="" className="loginLogoImg" />
                <h3 className="loginLogo">RecipeBook</h3>
                <span className="loginDesc">
                   Test the Taste
                </span>
            </div>
            <div className="loginRight">
                <div className="loginBox">
                    <input placeholder="Email"  className="loginInput" />
                    <input placeholder="Password"  className="loginInput" />
                    <button className="loginButton">Log In</button>
                    <span className="loginForgot">Forgot Password</span>
                    <NavLink exact to="/register"><button className="loginRegisterButton">Create New Account</button></NavLink>
                </div>
            </div>
        </div>
    </div>
  )
}

