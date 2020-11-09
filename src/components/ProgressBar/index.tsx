import React from "react";
import PropTypes, { InferProps } from "prop-types";
import { ProgressContainer, ProgressIndicator } from "./style";
const ProgressBarProps = {
  progress: PropTypes.number,
};

type InferredProps = InferProps<typeof ProgressBarProps>;

const ProgressBar = (props: InferredProps) => {
  return (
    <ProgressContainer>
      <ProgressIndicator progress={70} />
    </ProgressContainer>
  );
};

ProgressBar.propTypes = ProgressBarProps;

export default ProgressBar;
