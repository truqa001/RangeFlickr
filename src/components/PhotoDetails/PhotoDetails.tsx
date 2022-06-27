import styled, { CSSProperties } from "styled-components";
import { Button } from "../Button/Button";
import { COLORS } from "../colors";
import { Text } from "../Text/Text";
import { Photo } from "../types";
import moment from "moment";

interface Props {
  photoInfo: Photo;
  context: "card" | "sidebar";
  style?: CSSProperties;
}
export const PhotoDetails = ({ photoInfo, context, style }: Props) => {
  const {
    title,
    datetaken: dateTaken,
    ownername: author,
    url_m: url,
  } = photoInfo;

  const renderTitle = () => {
    if (context === "sidebar") {
      return (
        <SidebarTitle style={{ marginBottom: 8, flexWrap: "nowrap" }}>
          <Text.Heading style={{ flexGrow: 1 }}>
            {title || "No title"}
          </Text.Heading>
          <Button
            title={"View fullscreen"}
            onClick={() => {
              window.open(url);
            }}
            style={{ minWidth: 125, alignSelf: "normal" }}
            textStyle={{ color: COLORS.BLUE }}
          />
        </SidebarTitle>
      );
    }

    return (
      <Text.Heading
        style={{
          width: 250,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      >
        {title || "No title"}
      </Text.Heading>
    );
  };
  return (
    <div style={style}>
      {renderTitle()}
      <Text>Taken on {moment(dateTaken).format("Do MMMM, YYYY")}</Text>
      <Text style={{ fontStyle: "italic" }}>
        by <span style={{ fontWeight: 500 }}>{author}</span>
      </Text>
    </div>
  );
};

const SidebarTitle = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;
