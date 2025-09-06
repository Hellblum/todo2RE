import React from "react";
import LoginInput from "./LoginInput";
import PasswordInput from "./PasswordInput";
import AuthBtn from "./AuthBtn";
import "Auth.module.css"


const AuthForm = () => {

  return (
    <form 
    className="auth-form"
    >
      <LoginInput />
      <PasswordInput />
      <AuthBtn />
    </form>
  )
}

export default AuthForm