import styled from "styled-components";

export const MenuContainer = styled.div`
  flex: 1;
  z-index: 1;
  background-color: #3c3c3c;
  padding-left: ${(props) => props.theme.spacing * 16}px;
  padding-bottom: ${(props) => props.theme.spacing * 8}px;
  padding-top: ${(props) => props.theme.spacing * 8}px;
`;
