import React, { ReactNode } from "react";
import Svg, {
  Path,
  Pattern,
  Defs,
  Use,
  Image,
} from "react-native-svg";
import { Box, theme } from "../../components";

const SIZE = theme.borderRadii.l * 2;

interface SocialIconProps {
  children: ReactNode;
}

const Facebook = () => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 48 48"
    width={20}
    height={20}
  >
    <Path fill="#039be5" d="M24 5a19 19 0 1 0 0 38 19 19 0 1 0 0-38Z" />
    <Path
      fill="#fff"
      d="M26.572 29.036h4.917l.772-4.995h-5.69v-2.73c0-2.075.678-3.915 2.619-3.915h3.119v-4.359c-.548-.074-1.707-.236-3.897-.236-4.573 0-7.254 2.415-7.254 7.917v3.323h-4.701v4.995h4.701v13.729c.931.14 1.874.235 2.842.235.875 0 1.729-.08 2.572-.194v-13.77z"
    />
  </Svg>
);

const Google = () => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 48 48"
    width={20}
    height={20}
  >
    <Path
      fill="#FFC107"
      d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"
    />
    <Path
      fill="#FF3D00"
      d="m6.306 14.691 6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z"
    />
    <Path
      fill="#4CAF50"
      d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"
    />
    <Path
      fill="#1976D2"
      d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"
    />
  </Svg>
);

const Apple = () => (
  <Svg
    width={20}
    height={20}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <Path fill="url(#a)" d="M0 0h20v20H0z" />
    <Defs>
      <Pattern
        id="a"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <Use xlinkHref="#b" transform="scale(.005)" />
      </Pattern>
      <Image
        id="b"
        width={200}
        height={200}
        xlinkHref="data:image/png;base64,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"
      />
    </Defs>
  </Svg>
);

const SocialIcon = ({ children }: SocialIconProps) => {
  return (
    <Box
      marginHorizontal='m'
      backgroundColor="white"
      width={SIZE}
      height={SIZE}
      borderRadius="l"
      justifyContent="center"
      alignItems="center"
    >
      {children}
    </Box>
  );
};

const SocialLogin = () => {
  return (
    <Box flexDirection="row" justifyContent="center">
      <SocialIcon>
        <Facebook />
      </SocialIcon>
      <SocialIcon>
        <Google />
      </SocialIcon>
      <SocialIcon>
        <Apple />
      </SocialIcon>
    </Box>
  );
};

export default SocialLogin;
