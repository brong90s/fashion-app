import React from "react";
import { View } from "react-native";
import { Box, Button, Text } from "../../components";
import Container from "../../components/Container";
import SocialLogin from "../components/SocialLogin";

interface LoginProps {}

const Login = () => {
  const footer = (
    <>
      <SocialLogin />
      <Box alignItems="center">
        <Button variant="transparent" onPress={() => alert("SIGNIN")}>
          <Box
            marginTop="s"
            flexDirection="row"
            flex={1}
            justifyContent="center"
          >
            <Text variant="button" color="white">
              Don't have an account?
            </Text>
            <Text marginLeft="s" variant="button" color="primary">
              Sign Up here
            </Text>
          </Box>
        </Button>
      </Box>
    </>
  );

  return (
    <Container {...{ footer }}>
      <View />
    </Container>
  );
};

export default Login;
