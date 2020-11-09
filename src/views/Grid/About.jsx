import React from "react";
import Flex from "../../components/Raw/Flex";
import ThreeDimensionalCube from "../../components/ThreeDimensionalCube";
import { AboutContainer } from "./style";

const About = () => (
  <AboutContainer>
    <Flex justifyContent="center" alignItems="center" flex="1">
      <ThreeDimensionalCube />
    </Flex>
  </AboutContainer>
);

export default About;
