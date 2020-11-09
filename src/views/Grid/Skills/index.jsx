import React from "react";
import { GridElement } from '../style';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBug } from "@fortawesome/free-solid-svg-icons";
import RubberText from "../../../components/RubberText";
import "react-circular-progressbar/dist/styles.css";
import Flex from "../../../components/Raw/Flex";
import ReactWordcloud from "react-wordcloud";

const words = [
  { text: "html", value: 90 },
  { text: "css", value: 90 },
  { text: "php", value: 99 },
  { text: "reactjs", value: 95 },
  { text: "aws", value: 50 },
  { text: "node", value: 60 },
  { text: "symfony", value: 90 },
  { text: "git", value: 99 },
  { text: "javascript", value: 80 },
  { text: "sass", value: 80 },
  { text: "MySQL", value: 90 },
  { text: "GraphQL", value: 98 },
  { text: "Bootstrap", value: 80 },
  { text: "Amazon AWS", value: 80 },
  { text: "Material UI", value: 90 },
  { text: "Silverstripe", value: 90 },
  { text: "Zend Framework", value: 70 },
  { text: "Gitlab CI", value: 80 },
  { text: "GitHub", value: 99 },
  { text: "CI/CD", value: 100 },
  { text: "Team Management", value: 90 },
  { text: "MongoDB", value: 50 },
  { text: "Web Pen. tests", value: 60 },
  { text: "Redux", value: 99 },
  { text: "composer", value: 100 },
  { text: "Redis", value: 60 },
  { text: "TDD", value: 100 },
  { text: "SCRUM", value: 100 },
  { text: "Spotify Model", value: 60 },
  { text: "SOLID", value: 100 },
  { text: "Unit testing", value: 90 },
  { text: "REGEX", value: 90 },
  { text: "RabbitMQ", value: 70 },
];

const cloudOptions = {
  colors: ["#272932", "#3fff77", "#fff", "#001F54"],
  enableTooltip: true,
  deterministic: false,
  fontFamily: "impact",
  fontSizes: [20, 60],
  fontStyle: "normal",
  fontWeight: "normal",
  padding: 4,
  rotations: 3,
  rotationAngles: [0, 90],
  scale: "sqrt",
  spiral: "archimedean",
  transitionDuration: 1000,
};

const Skills = () => (
  <GridElement>
    <Flex
      bgcolor="#D00000"
      flexGrow="1"
      flexDirection="column"
      justifyContent="space-between"
      p="32px"
    >
      <Flex flexDirection="column" flexGrow="1">
        <RubberText fontSize="32px" color="#fff">
          &lt;Skills&nbsp;/&gt;
        </RubberText>
        <Flex width="inherit" height="inherit" pt="16px" flex="1">
          <ReactWordcloud options={cloudOptions} words={words} />
        </Flex>
      </Flex>
      <Flex justifyContent="flex-end" color="red">
        <FontAwesomeIcon icon={faBug} size="6x" />
      </Flex>
    </Flex>
  </GridElement>
);

export default Skills;
