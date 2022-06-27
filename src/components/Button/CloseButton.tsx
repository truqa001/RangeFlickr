import React, { CSSProperties } from "react";
import { Button } from "./Button";
import { XIcon } from "../Icon/XIcon";
import { COLORS } from "../colors";

interface Props {
  style?: CSSProperties;
  onClick: () => void;
}

export const CloseButton = ({ style, onClick }: Props): React.ReactElement => {
  return (
    <Button
      title={
        <XIcon
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            transform: "translate(17%, 17%)",
            fill: COLORS.WHITE,
          }}
        />
      }
      onClick={onClick}
      style={{
        borderRadius: "50%",
        width: 30,
        height: 30,
        fontSize: 25,
        position: "absolute",
        backgroundColor: COLORS.BLACK,
        opacity: ".5",
        right: 7,
        top: 7,
      }}
    />
  );
};
