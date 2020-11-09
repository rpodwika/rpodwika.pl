import styled, { keyframes } from "styled-components";
import Box from "../Raw/Box";

const keyFrames = keyframes`
  from {
    transform: rotateX(0deg) rotateY(0deg);
  }
  
  to {
    transform: rotateX(360deg) rotateY(360deg);
  }
`;

export const Logo = styled("img")`
  width: 100%;
  margin: 4px;
`;

export const Cube = styled(Box)`
  margin: auto;
  position: relative;
  height: 300px;
  width: 300px;
  transform-style: preserve-3d;
  animation: ${keyFrames} 15s infinite linear;
`;

const Wall = styled(Box)`
  position: absolute;
  box-sizing: border-box;
  padding: 10px;
  height: 100%;
  width: 100%;
  opacity: 0.5;
  background-color: rgba(29, 31, 40);
  border: solid 1px ${(props) => props.theme.palette.colors.green};
  color: #ffffff;
  transition: transform 0.2s ease-in;
  display: flex;
  place-self: center;
`;

export const Front = styled(Wall)`
  transform: translateZ(200px);
`;

export const Back = styled(Wall)`
  transform: translateZ(-100px) rotateY(180deg);
`;

export const Right = styled(Wall)`
  transform: rotateY(-270deg) translateX(100px);
  transform-origin: top right;
`;

export const Left = styled(Wall)`
  transform: rotateY(270deg) translateX(-100px);
  transform-origin: left center;
`;

export const Top = styled(Wall)`
  transform: rotateX(-270deg) translateY(-100px);
  transform-origin: top center;
`;

export const Bottom = styled(Wall)`
  transform: rotateX(270deg) translateY(100px);
  transform-origin: bottom center;
`;

export const Wrapper = styled(Box)`
  perspective: 1000px;
  perspective-origin: 50% 50%;

  &:hover {
    ${Front} {
      transform: translateZ(300px);
    }
    ${Back} {
      transform: translateZ(-200px) rotateY(180deg);
    }
    ${Right} {
      transform: rotateY(-270deg) translateZ(100px) translateX(100px);
    }
    ${Left} {
      transform: rotateY(270deg) translateZ(100px) translateX(-100px);
    }
    ${Top} {
      transform: rotateX(-270deg) translateZ(100px) translateY(-100px);
    }
    ${Bottom} {
      transform: rotateX(270deg) translateZ(100px) translateY(100px);
    }
  }
`;
