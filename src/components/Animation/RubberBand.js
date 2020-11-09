import styled, { keyframes } from "styled-components";

export const RubberBandKeyframes = keyframes`
    from {
        transform: scale3d(1, 1, 1);
    }

    30% {
        transform: scale3d(1.25, 0.75, 1);
}

    40% {
        transform: scale3d(0.75, 1.25, 1);
}

    50% {
        transform: scale3d(1.15, 0.85, 1);
}

    65% {
        transform: scale3d(.95, 1.05, 1);
}

    75% {
        transform: scale3d(1.05, .95, 1);
}

    to {
        transform: scale3d(1, 1, 1);
    }
`;

export const RubberLetter = styled.span`
  animation-duration: 1s;
  animation-fill-mode: both;
  animation-iteration-count: 1;
  display: inline-block;

  :hover {
    color: #3fff77;
    animation-name: ${RubberBandKeyframes};
  }
`;
