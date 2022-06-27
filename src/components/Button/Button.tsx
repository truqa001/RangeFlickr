import styled, { CSSProperties } from "styled-components";
import { COLORS } from "../colors";
import { Text } from "../Text/Text";

interface Props {
  title: string | React.ReactNode;
  style?: CSSProperties;
  textStyle?: CSSProperties;
  onClick: () => void;
}

export const Button = ({
  title,
  style,
  textStyle,
  onClick,
}: Props): React.ReactElement => {
  return (
    <StyledButton onClick={onClick} style={style} type="button">
      <Text style={textStyle}>{title}</Text>
    </StyledButton>
  );
};

const StyledButton = styled.button`
  border: none;
  outline: none;
  border-radius: 20px;
  padding: 5px 16px;
  height: 28px;
  text-align: center;
  display: inline-block;
  cursor: pointer;
  background-color: ${COLORS.LIGHTBLUE};
`;
