import React from "react";

import SignIn from "../../component/sign-in/sign-in.component";
import SignUp from "../../component/sign-up/sign-up.component";

import { SigninAndSignupContainer } from "./sign-in-and-sign-up.styles";

const SignInAndSignUpPage = () => (
  <SigninAndSignupContainer>
    <SignIn />
    <SignUp />
  </SigninAndSignupContainer>
);

export default SignInAndSignUpPage;
