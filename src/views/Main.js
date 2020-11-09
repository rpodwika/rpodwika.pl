import React, { useEffect, useRef } from "react";
import Home from "./Home";
import Grid from "./Grid";
import { AppContainer } from "../style";

const MainView = () => {
  const mainContainerRef = useRef(null);
  const gridRef = useRef(null);
  const onKnowMoreClick = () => {
    window.scrollTo(0, gridRef.current.offsetTop)
  }
  useEffect(() => {
    setTimeout(() => {
      mainContainerRef && mainContainerRef.current.focus();
    }, 500);
  });

  return (
    <AppContainer className="App" ref={mainContainerRef}>
      <Home onKnowMoreClick={onKnowMoreClick}/>
      <Grid ref={gridRef} />
    </AppContainer>
  );
};

export default MainView;
