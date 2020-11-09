import React, { useState, useMemo } from "react";
import { Flipper, Flipped } from "react-flip-toolkit";
import { SquareContainer, FullScreenSquareContainer } from "./style";
import Flex from "../../components/Raw/Flex";

const Square = ({ toggleFullScreen, flipId, children }) => (
  <Flipped flipId={flipId}>
    <SquareContainer className="square" onClick={toggleFullScreen}>
      {children}
    </SquareContainer>
  </Flipped>
);

const FullScreenSquare = ({ toggleFullScreen, flipId, children }) => (
  <Flipped flipId={flipId} scale>
    <FullScreenSquareContainer onClick={toggleFullScreen}>
      {children}
    </FullScreenSquareContainer>
  </Flipped>
);

const FlippableElement = ({ visibleElement, flippedElement }) => {
  const [fullScreen, setFullScreen] = useState(false);
  const flipId = useMemo(() => `fillable-${Math.random()}`, []);
  const toggleFullScreen = () => setFullScreen((prevState) => !prevState);

  return (
    <Flipper
      element={(props) => <Flex flexGrow="1" {...props} />}
      flipKey={fullScreen}
    >
      {fullScreen ? (
        <FullScreenSquare flipId={flipId} toggleFullScreen={toggleFullScreen}>
          {flippedElement}
        </FullScreenSquare>
      ) : (
        <Square flipId={flipId} toggleFullScreen={toggleFullScreen}>
          {visibleElement}
        </Square>
      )}
    </Flipper>
  );
};

export default FlippableElement;
