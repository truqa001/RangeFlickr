import styled, { CSSProperties } from "styled-components";
import { COLORS } from "../colors";

export const Separator = ({ style }: { style?: CSSProperties }) => {
  return <StyledSeparator style={style} />;
};

const StyledSeparator = styled.div`
  border-bottom-width: 0px;
  border-style: solid;
  border-color: ${COLORS.LIGHTGREY};
`;
