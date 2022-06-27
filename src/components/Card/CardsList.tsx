import { Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import { Photo } from "../types";
import { Card } from "./Card";

interface Props {
  photos: Photo[];
  setSelectedPhoto: Dispatch<SetStateAction<Photo | undefined>>;
  selectedPhoto?: Photo;
}
export const CardsList = ({
  photos,
  setSelectedPhoto,
  selectedPhoto,
}: Props): React.ReactElement => {
  return (
    <FlexRow>
      {photos.map((p) => (
        <Card
          key={p.id}
          photoInfo={p}
          style={{ flexGrow: 1 }}
          onClick={() => setSelectedPhoto(p)}
          isSelected={selectedPhoto && p.id === selectedPhoto.id}
        />
      ))}
    </FlexRow>
  );
};

const FlexRow = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
