import React from "react";
import PropTypes, { InferProps } from "prop-types";

import {
  Button as ButtonDefault,
  PrimaryButton,
  SecondaryButton,
} from "./style";

const ButtonProps = {
  variant: PropTypes.string,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

type InferredProps = InferProps<typeof ButtonProps>;

const Index = (props: InferredProps) => {
  let ButtonComponent;

  switch (props.variant) {
    case "primary":
      ButtonComponent = PrimaryButton;
      break;
    case "secondary":
      ButtonComponent = SecondaryButton;
      break;
    default:
      ButtonComponent = ButtonDefault;
  }

  return (
    <ButtonComponent onClick={props.onClick}>
      <span>{props.children}</span>
    </ButtonComponent>
  );
};

Index.propTypes = ButtonProps;

export default Index;
