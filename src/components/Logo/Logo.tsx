import { CSSProperties } from "styled-components";

interface Props {
  style?: CSSProperties;
}
export const Logo = ({ style }: Props) => {
  const charColors = [
    "rgb(255, 49, 61)",
    "rgb(213, 129, 134)",
    "rgb(54, 204, 91)",
    "rgb(53, 99, 33)",
    "rgb(189, 93, 72)",
    "rgb(8, 125, 215)",
    "rgb(46, 65, 223)",
    "rgb(149, 41, 36)",
    "rgb(140, 18, 149)",
    "rgb(145, 15, 154)",
    "rgb(56, 143, 80)",
  ];

  const letters: { char: string; styles: CSSProperties }[] = "RangeFlickr"
    .split("")
    .map((char, index) => {
      return {
        char,
        styles:
          index === 0
            ? { fontSize: 30, color: charColors[index] }
            : { color: charColors[index] },
      };
    });
  return (
    <a
      onClick={() => window.location.reload()}
      style={{ textDecoration: "none", cursor: "pointer", ...style }}
    >
      {letters.map((letter) => (
        <span style={{ ...letter.styles, fontWeight: 700 }}>{letter.char}</span>
      ))}
    </a>
  );
};
