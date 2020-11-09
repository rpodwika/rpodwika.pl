import styled from "styled-components";
import Flex from "../../components/Raw/Flex";
import { up } from "styled-breakpoints";
import { SecondaryButton } from "../../components/Button/style";

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  width: 100%;
  height: 100vh;
  grid-gap: 2px;
  border-top: 2px solid #3fff77;

  ${up("md")} {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const GridElement = styled(Flex)`
  background-image: linear-gradient(235deg, #3b2667 10%, #bc78ec 100%);
`;

/* skills */

export const SquareContainer = styled(Flex)`
  flex-grow: 1;
  cursor: pointer;
  background-color: #3b2667;
  color: #fff;
`;

export const FullScreenSquareContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
  background-image: linear-gradient(45deg, #444, #111);
`;

export const AboutContainer = styled(Flex)`
  background-color: #001f54;
  flex-direction: column;
  justify-content: space-between;
  padding: 32px;
  display: none;

  ${up("md")} {
    display: flex;
  }
`;

export const SocialIcons = styled(Flex)`
  flex: 1;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  & > ${SecondaryButton} {
    margin-top: 16px;
    width: 100%;

    ${up("md")} {
      width: max-content;
    }
  }

  ${up("md")} {
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
  }
`;

export const SocialLink = styled("a")`
  color: #fff;
  opacity: 0.4;
  transition: opacity 0.3s ease-in;
  &:hover {
    opacity: 1;
  }

  margin-top: 8px;
  margin-bottom: 8px;

  ${up("lg")} {
    margin: 0 4px;
  }
`;

export const ContactWrapper = styled(Flex)`
  justify-content: flex-end;
  color: red;
  display: none;
  margin-top: 16px;

  & > {
    ${up("lg")} {
      display: flex;
      margin-top: 0;
    }
  }
`;
