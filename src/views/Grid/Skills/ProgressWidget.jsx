import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import ProgressProvider from "../../../components/ProgressProvider";
import React from "react";
import Flex from "../../../components/Raw/Flex";

const ProgressWidget = ({ progress, text, ...rest }) => (
  <ProgressProvider valueStart={0} valueEnd={progress}>
    {(value) => (
      <Flex {...rest}>
        <CircularProgressbar
          text={text}
          value={value}
          styles={buildStyles({
            pathColor: `rgba(63,255,119, ${progress / 100})`,
            textColor: "#FFF",
            trailColor: "#000",
          })}
        />
      </Flex>
    )}
  </ProgressProvider>
);

export default ProgressWidget;
