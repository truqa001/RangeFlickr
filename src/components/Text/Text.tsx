import { BasedText, BaseTextProps } from "./BasedText";
import { BodyS } from "./BodyS";
import { Heading } from "./Heading";

export const Text = (props: BaseTextProps): React.ReactElement => {
  return <BasedText {...props} />;
};

Text.BodyS = BodyS;
Text.Heading = Heading;
