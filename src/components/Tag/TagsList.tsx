import styled from "styled-components";
import { Tag } from "./Tag";

interface Props {
  tags: string;
}

export const TagsList = ({ tags }: Props): React.ReactElement => {
  return (
    <Container style={{ marginBottom: 30 }}>
      {tags.split(" ").map((tag, index) => (
        <Tag
          key={index}
          title={tag}
          style={{ marginRight: 24, marginBottom: 7 }}
        />
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;
