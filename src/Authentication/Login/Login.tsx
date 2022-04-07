import React from "react";
import { View } from "react-native";
import Container from "../../components/Container";
import SocialLogin from "../components/SocialLogin";

interface LoginProps {}

const Login = () => {
  const footer = (
    <>
      <SocialLogin />
    </>
  );

  return (
    <Container {...{ footer }}>
      <View />
    </Container>
  );
};

export default Login;
