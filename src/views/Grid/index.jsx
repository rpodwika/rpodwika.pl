import React from "react";
import { GridContainer } from "./style";
import Skills from "./Skills";
import Contact from "./Contact";
import About from "./About";
import Social from "./Social";

const Grid = React.forwardRef((props, ref) => (
  <GridContainer ref={ref}>
    <Skills />
    <About />
    <Contact />
    <Social />
  </GridContainer>
))

export default Grid;
