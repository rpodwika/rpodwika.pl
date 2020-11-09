import React from "react";
import {
  Wrapper,
  Cube,
  Right,
  Front,
  Back,
  Top,
  Bottom,
  Left,
  Logo,
} from "./style";
import AwsLogo from "./../../assets/aws.png";
import JavaScriptLogo from "./../../assets/javascript.png";
import NodejsLogo from "./../../assets/nodejs.png";
import PhpLogo from "./../../assets/php.png";
import ReactLogo from "./../../assets/react.png";
import SymfonyLogo from "./../../assets/symfony.svg";

const ThreeDimensionalCube = () => (
  <Wrapper>
    <Cube>
      <Front>
        <Logo src={AwsLogo} alt="Amazon Web Services" />
      </Front>
      <Back>
        <Logo src={JavaScriptLogo} alt="JavaScript" />
      </Back>
      <Top>
        <Logo src={NodejsLogo} alt="NodeJS" />
      </Top>
      <Bottom>
        <Logo src={PhpLogo} alt="PHP" />
      </Bottom>
      <Left>
        <Logo src={ReactLogo} alt="React" />
      </Left>
      <Right>
        <Logo src={SymfonyLogo} alt="Symfony" />
      </Right>
    </Cube>
  </Wrapper>
);

export default ThreeDimensionalCube;
