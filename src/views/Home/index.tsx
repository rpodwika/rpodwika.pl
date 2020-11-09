import React from "react";
import NetBackground from "../../components/NetBackground";
import Flex from "../../components/Raw/Flex";
import { HomePageContainer, Name } from "./style";
import Button from "../../components/Button";
import Box from "../../components/Raw/Box";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import RubberText from "../../components/RubberText";

type HomeProps = {
  onKnowMoreClick: (event: React.MouseEvent<HTMLElement>) => void
};

const Home = (props: HomeProps) => {
  return (
    <div>
      <section id="home" style={{ height: "100vh" }}>
        <NetBackground>
          <HomePageContainer>
            <Flex
              fontSize="32px"
              alignItems="center"
              flexDirection="column"
              justifyContent="center"
              textAlign="center"
            >
              <Box>
                <span>
                  <RubberText>Hi there, I'm </RubberText>
                  <Name>Robert Podwika</Name>
                  <RubberText>, welcome to my page. </RubberText>
                  <br />
                  <RubberText>Scroll down to learn more about me.</RubberText>
                </span>
              </Box>
              <Flex mt="16px" justifyContent="center">
                <Button onClick={props.onKnowMoreClick} variant="secondary">
                  I want to know more
                  <FontAwesomeIcon size="xs" color="#fff" icon={faArrowRight} />
                </Button>
              </Flex>
            </Flex>
          </HomePageContainer>
        </NetBackground>
      </section>
    </div>
  );
};

export default Home;
