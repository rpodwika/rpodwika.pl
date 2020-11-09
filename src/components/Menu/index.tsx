import React from "react";
import { MenuContainer } from "./style";
import Button from "../Button";
import Flex from "../Raw/Flex";

interface Props {}

const Menu = (props: Props) => {
  return (
    <MenuContainer>
      <Flex p="16px">
        <Button onClick={() => {}} variant="primary">
          <span>Home</span>
        </Button>
      </Flex>
    </MenuContainer>
  );
};

export default Menu;
