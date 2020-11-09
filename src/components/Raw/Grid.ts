import styled from "styled-components";
import PropTypes, { InferProps } from "prop-types";
import Flex, { FlexProps } from "./Flex";

export const GridProps = {
  grid: PropTypes.string,
  area: PropTypes.string,
  column: PropTypes.string,
  gap: PropTypes.string,
  rowGap: PropTypes.string,
  columnGap: PropTypes.string,
  template: PropTypes.string,
  templateColumns: PropTypes.string,
  templateRows: PropTypes.string,
  ...FlexProps,
};

type InferredProps = InferProps<typeof GridProps>;

const Grid = styled(Flex)<InferredProps>`
  display: grid;
  grid: ${(props) => props.grid};
  grid-area: ${(props) => props.area};
  grid-column: ${(props) => props.column};
  grid-gap: ${(props) => props.gap};
  grid-row-gap: ${(props) => props.rowGap};
  grid-column-gap: ${(props) => props.columnGap};
  grid-template: ${(props) => props.template};
  grid-template-columns: ${(props) => props.templateColumns};
  grid-template-rows: ${(props) => props.templateRows};
`;

Grid.propTypes = GridProps;

export default Grid;
