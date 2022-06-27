import styled, { CSSProperties } from "styled-components";
import { COLORS } from "../colors";
import { Text } from "../Text/Text";

interface Props {
  title: string;
  style?: CSSProperties;
  textStyle?: CSSProperties;
}
export const Tag = ({ title, style, textStyle }: Props) => {
  return (
    <StyledTag style={style}>
      <Text style={textStyle}>#{title}</Text>
    </StyledTag>
  );
};

const StyledTag = styled.div`
  float: left;
  min-height: 25px;
  position: relative;
  border-right: none;
  padding: 0 11px;
  display: flex;
  align-items: center;
  border: 1px solid ${COLORS.LIGHTGREY};
  background-color: ${COLORS.LIGHTGREY};

  &:before {
    content: "";
    position: absolute;
    top: -1px;
    right: -18px;
    width: 0;
    height: 0;
    border-color: transparent transparent transparent ${COLORS.LIGHTGREY};
    border-style: solid;
    border-width: 12px 0 13px 17px;
  }
`;
