import styled from "styled-components";
import { CloseButton } from "../Button/CloseButton";
import { COLORS } from "../colors";
import { PhotoDetails } from "../PhotoDetails/PhotoDetails";
import { device } from "../responsive";
import { TagsList } from "../Tag/TagsList";
import { Photo } from "../types";
import { DescriptionBox } from "./DescriptionBox";

interface Props {
  photoInfo: Photo;
  onClose: () => void;
}
export const Sidebar = ({ photoInfo, onClose }: Props) => {
  const { id, description, tags, url_m: url } = photoInfo;

  return (
    <StyledSidebar>
      <ImageContainer>
        <CloseButton
          style={{ position: "absolute", top: 10, right: 10 }}
          onClick={onClose}
        />
        <StyledImage src={url} alt={`photo-${id}`} />
      </ImageContainer>

      <ContentContainer>
        <PhotoDetails
          photoInfo={photoInfo}
          context={"sidebar"}
          style={{ marginBottom: 15 }}
        />

        {tags && <TagsList tags={tags} />}

        {description._content && (
          <DescriptionBox title={"Description"} body={description._content} />
        )}
      </ContentContainer>
    </StyledSidebar>
  );
};

const StyledSidebar = styled.div`
  box-shadow: ${COLORS.BOX_SHADOW} 0px 2px 8px;
  display: flex;
  flex-flow: column;
  text-align: left;
  background-color: ${COLORS.WHITE};
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  width: 550px;
  overflow: hidden;

  @media ${device.tablet} {
    width: 450px;
  }

  @media ${device.mobile} {
    width: 100%;
  }
`;

const ContentContainer = styled.div`
  padding: 10px 17px;
  display: flex;
  flex-flow: column;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  text-align: center;
  max-height: 300px;
  min-height: 300px;
  display: flex;
  justify-content: center;
`;

const StyledImage = styled.img`
  max-height: 300px;
  width: auto;
  color: ${COLORS.WHITE};
`;
