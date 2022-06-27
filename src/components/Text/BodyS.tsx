import { BasedText, BaseTextProps } from "./BasedText";

export const BodyS = (props: BaseTextProps) => {
  return <BasedText {...props} style={{ fontSize: 10, lineHeight: 15 / 10 }} />;
};
