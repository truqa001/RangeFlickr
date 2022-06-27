import { BasedText, BaseTextProps } from "./BasedText";

export const Heading = (props: BaseTextProps) => {
  return (
    <BasedText
      {...props}
      style={{
        fontSize: 15,
        fontWeight: 500,
        lineHeight: 25 / 15,
        ...props.style,
      }}
    />
  );
};
