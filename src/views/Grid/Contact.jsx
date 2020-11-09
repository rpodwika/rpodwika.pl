import React from "react";
import { ContactWrapper, GridElement } from "./style";
import Flex from "../../components/Raw/Flex";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import RubberText from "../../components/RubberText";

const Contact = () => (
  <GridElement>
    <Flex
      bgcolor="#272932"
      flexGrow="1"
      flexDirection="column"
      justifyContent="space-between"
      p="32px"
    >
      <Flex color="#fff">
        <RubberText fontSize="32px">&lt;Contact&nbsp;/&gt;</RubberText>
      </Flex>
      <Flex justifyContent="space-between" alignItems="center" mt="8px">
        <RubberText fontSize="14px" color="#fff">
          The best way to reach me is through social media
        </RubberText>
        <ContactWrapper>
          <FontAwesomeIcon icon={faEnvelope} size="6x" />
        </ContactWrapper>
      </Flex>
    </Flex>
  </GridElement>
);

export default Contact;
