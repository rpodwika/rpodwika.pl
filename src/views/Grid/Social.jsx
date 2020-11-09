import React from "react";
import { GridElement, SocialIcons, SocialLink } from "./style";
import Flex from "../../components/Raw/Flex";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareAlt, faCodeBranch } from "@fortawesome/free-solid-svg-icons";
import {
  faStackOverflow,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { SecondaryButton } from "../../components/Button/style";
import Text from "../../components/Raw/Text";

const links = {
  linkedIn: {
    url: "https://www.linkedin.com/in/robert-podwika/",
    icon: faLinkedin,
  },
  stackoverflow: {
    url: "https://stackoverflow.com/users/2119757/robert",
    icon: faStackOverflow,
  },
  github: {
    url: "https://github.com/rpodwika",
    icon: faGithub,
  },
};

const Social = () => {
  return (
    <GridElement>
      <Flex
        bgcolor="#272932"
        flexGrow="1"
        flexDirection="column"
        justifyContent="center"
        p="32px"
      >
        <Flex color="red">
          <SocialIcons>
            {Object.keys(links).map((link) => (
              <SocialLink
                target="_blank"
                key={`${link}`}
                href={links[link].url}
              >
                <FontAwesomeIcon icon={links[link].icon} size="3x" />
              </SocialLink>
            ))}
            <SecondaryButton display="inline-flex">
              <Flex alignItems="center" p="2px" justifyItems="space-between">
                <FontAwesomeIcon icon={faCodeBranch} />
                <Text ml="8px">See this page's code</Text>
              </Flex>
            </SecondaryButton>
          </SocialIcons>
          <FontAwesomeIcon icon={faShareAlt} size="6x" />
        </Flex>
      </Flex>
    </GridElement>
  );
};

export default Social;
