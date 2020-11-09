import styled from "styled-components";
import PropTypes, { InferProps } from "prop-types";

export const BoxProps = {
  width: PropTypes.string,
  height: PropTypes.string,
  display: PropTypes.string,
  fontSize: PropTypes.string,
  color: PropTypes.string,
  fontStyle: PropTypes.string,
  fontWeight: PropTypes.string,
  textAlign: PropTypes.string,
  padding: PropTypes.string,
  background: PropTypes.string,
  bgcolor: PropTypes.string,
  pl: PropTypes.string,
  pr: PropTypes.string,
  pb: PropTypes.string,
  pt: PropTypes.string,
  p: PropTypes.string,
  ml: PropTypes.string,
  mr: PropTypes.string,
  mb: PropTypes.string,
  mt: PropTypes.string,
  m: PropTypes.string,
  gridColumn: PropTypes.string,
  gridRow: PropTypes.string,
  minHeight: PropTypes.string,
};

type InferredProps = InferProps<typeof BoxProps>;

const Box = styled.div<InferredProps>`
  display: ${(props) => props.display};
  width: ${(props) => props.width};
  height: ${(props) => props.height};

  font-size: ${(props) => props.fontSize};
  font-style: ${(props) => props.fontStyle};
  font-weight: ${(props) => props.fontWeight};
  text-align: ${(props) => props.textAlign};
  color: ${(props) => props.color};

  padding-bottom: ${(props) => props.pb};
  padding-top: ${(props) => props.pt};
  padding-left: ${(props) => props.pl};
  padding-right: ${(props) => props.pr};
  padding: ${(props) => props.p};

  margin-bottom: ${(props) => props.mb};
  margin-top: ${(props) => props.mt};
  margin-left: ${(props) => props.ml};
  margin-right: ${(props) => props.mr};
  margin: ${(props) => props.m};

  background-color: ${(props) => props.bgcolor};
  background: ${(props) => props.background};

  grid-column: ${(props) => props.gridColumn};
  grid-row: ${(props) => props.gridRow};
`;

Box.propTypes = BoxProps;

export default Box;
