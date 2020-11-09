import styled from "styled-components";

export const Button = styled.div`
  line-height: 32px;
  padding: 16px;
  text-align: center;
  cursor: pointer;
  display: ${(props) => props.display};
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
`;

export const PrimaryButton = styled(Button)`
  cursor: pointer;
  color: #fff;
  transition: all 0.5s;
  position: relative;

  & > span {
    z-index: 2;
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
  }
  ::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    transition: all 0.5s;
    border: 1px solid rgba(255, 255, 255, 0.2);
    background-color: rgba(255, 255, 255, 0.1);
  }
  ::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    transition: all 0.5s;
    border: 1px solid rgba(255, 255, 255, 0.2);
    background-color: rgba(255, 255, 255, 0.1);
  }
  :hover::before {
    transform: rotate(-45deg);
    background-color: rgba(255, 255, 255, 0);
  }
  :hover::after {
    transform: rotate(45deg);
    background-color: rgba(255, 255, 255, 0);
  }
`;

export const SecondaryButton = styled(Button)`
  color: #fff;
  transition: all 0.3s;
  position: relative;

  > span {
    transition: all 0.3s;
  }
  ::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    opacity: 0;
    transition: all 0.3s;
    border-top-width: 1px;
    border-bottom-width: 1px;
    border-top-style: solid;
    border-bottom-style: solid;
    border-top-color: rgba(255, 255, 255, 0.5);
    border-bottom-color: rgba(255, 255, 255, 0.5);
    transform: scale(0.1, 1);
  }
  :hover span {
    letter-spacing: 2px;
  }
  :hover::before {
    opacity: 1;
    transform: scale(1, 1);
  }
  ::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    transition: all 0.3s;
    background-color: rgba(255, 255, 255, 0.1);
  }
  :hover::after {
    opacity: 0;
    transform: scale(0.1, 1);
  }
`;
