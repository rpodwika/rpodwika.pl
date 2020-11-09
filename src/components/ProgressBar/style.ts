import styled from "styled-components";
import Flex from "../Raw/Flex";

export const ProgressContainer = styled(Flex)`
  padding: 4px;

  background: rgba(0, 0, 0, 0.25);
  border-radius: 6px;
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.25),
    0 1px rgba(255, 255, 255, 0.08);
`;

interface ProgressIndicatorProps {
  progress: number;
}

type ProgressColor = {
  val: number;
  color: string;
};

const progressColors: ProgressColor[] = [
  { val: 0, color: "#f63a0f" },
  { val: 25, color: "#f27011" },
  { val: 50, color: "#f2b01e" },
  { val: 75, color: "#f2d31b" },
  { val: 100, color: "#86e01e" },
];

const getBackgroundColor = <ProgressColor>(progress: number) => {
  return progressColors.reduce((currentValue, previousValue) =>
    progress > currentValue.val ? currentValue : previousValue
  );
};

export const ProgressIndicator = styled("div")<ProgressIndicatorProps>`
  width: ${(props) => props.progress}%;
  background-color: ${(props) => getBackgroundColor(props.progress).color};
  height: 16px;
  border-radius: 4px;
  background-image: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0.3),
    rgba(255, 255, 255, 0.05)
  );
  transition: 0.4s linear;
  transition-property: width, background-color;
  box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.25),
    inset 0 1px rgba(255, 255, 255, 0.1);
`;
