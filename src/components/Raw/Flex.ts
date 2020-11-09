import styled from "styled-components";
import PropTypes, { InferProps } from "prop-types";
import Box, { BoxProps } from "./Box";

export const FlexProps = {
  flex: PropTypes.string,
  flexDirection: PropTypes.string,
  flexBasis: PropTypes.string,
  flexGrow: PropTypes.string,
  flexWrap: PropTypes.string,
  flexShrink: PropTypes.string,
  justifyContent: PropTypes.string,
  justifyItems: PropTypes.string,
  alignItems: PropTypes.string,
  alignContent: PropTypes.string,
  ...BoxProps,
};

type InferredProps = InferProps<typeof FlexProps>;

const Flex = styled(Box)<InferredProps>`
  display: flex;
  flex: ${(props) => props.flex};
  flex-direction: ${(props) => props.flexDirection};
  flex-basis: ${(props) => props.flexBasis};
  flex-grow: ${(props) => props.flexGrow};
  flex-wrap: ${(props) => props.flexWrap};
  flex-shrink: ${(props) => props.flexShrink};
  justify-content: ${(props) => props.justifyContent};
  justify-items: ${(props) => props.justifyItems};
  align-items: ${(props) => props.alignItems};
  align-content: ${(props) => props.alignContent};
`;

Flex.propTypes = FlexProps;

export default Flex;
