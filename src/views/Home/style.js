import styled from "styled-components";

export const HomePageContainer = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  color: #fff;
  height: calc(100vh + 53px);
  padding: 0 10px;
`;

export const Name = styled.span`
  color: ${(props) => props.theme.palette.colors.green};
  font-size: ${(props) => props.theme.spacing * 16}px;
`;
