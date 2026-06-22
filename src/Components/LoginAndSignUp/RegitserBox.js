import Buttons from "./Buttons";
import { useState } from "react";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import { useSelector } from "react-redux";


export default function RegisterBox() {
  const state = useSelector((state) => state.registerData)
  return (
    <div className="register-box">
      <div className="register-content">
        <Buttons
        />
        {!state.isNewMember? (
          <>
            <LoginForm />
          </>
        ) : (
          <SignUpForm />
        )}
      </div>
    </div>
  );
}
