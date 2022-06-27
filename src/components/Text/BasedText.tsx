import styled, { CSSProperties } from "styled-components";
import { COLORS } from "../colors";

export type BaseTextProps = {
  children?: React.ReactNode;
  style?: CSSProperties;
};

export const BasedText = ({
  children,
  style,
}: BaseTextProps): React.ReactElement => {
  return <StyledText style={style}>{children}</StyledText>;
};

const StyledText = styled.p`
  font-size: 13px;
  font-weight: norma;
  line-height: ${17 / 13};
  color: ${COLORS.BLACK};
  margin: 0;
`;
