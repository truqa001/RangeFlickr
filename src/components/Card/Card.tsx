import styled, { CSSProperties } from "styled-components";
import { COLORS } from "../colors";
import { PhotoDetails } from "../PhotoDetails/PhotoDetails";
import { device } from "../responsive";
import { Photo } from "../types";

interface Props {
  photoInfo: Photo;
  style?: CSSProperties;
  isSelected?: boolean;
  onClick: () => void;
}

export const Card = ({
  isSelected,
  photoInfo,
  style,
  onClick,
}: Props): React.ReactElement => {
  const { id, url_m: url } = photoInfo;

  const selectedPhotoStyles = {
    ...style,
    outline: "2px solid rgba(0,0,0,.5)",
  };

  return (
    <StyledCard
      style={isSelected ? selectedPhotoStyles : style}
      onClick={onClick}
    >
      <StyledImage src={url} alt={`photo-${id}`} />

      <div
        style={{
          height: "100%",
          padding: "12px 5px",
        }}
      >
        <PhotoDetails photoInfo={photoInfo} context={"card"} />
      </div>
    </StyledCard>
  );
};

const maxCardWidth = "425px";
const StyledCard = styled.div`
  box-shadow: ${COLORS.BOX_SHADOW} 0px 2px 8px;
  display: flex;
  flex-flow: column;
  text-align: left;
  border-radius: 4px;
  margin: 5px;
  justify-content: center;
  padding: 7px;
  max-width: ${maxCardWidth};
  cursor: pointer;

  @media ${device.tablet} {
    max-width: 100%;
  }
`;

const StyledImage = styled.img`
  height: 170px;
  min-height: 170px;
  width: auto;
  max-width: ${maxCardWidth};

  @media ${device.tablet} {
    max-width: 100%;
  }
`;
