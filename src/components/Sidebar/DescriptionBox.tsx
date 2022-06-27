import styled, { CSSProperties } from "styled-components";
import { Text } from "../Text/Text";

interface Props {
  title: string;
  body: string;
  style?: CSSProperties;
}
export const DescriptionBox = ({
  title,
  body,
  style,
}: Props): React.ReactElement => {
  return (
    <StyledDescriptionBox style={style}>
      <Text.Heading style={{ marginBottom: 12 }}>{title}</Text.Heading>
      <Text>{body}</Text>
    </StyledDescriptionBox>
  );
};

const StyledDescriptionBox = styled.div`
  display: flex;
  flex-flow: column;
`;
