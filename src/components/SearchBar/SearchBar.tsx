import styled from "styled-components";
import { device } from "../responsive";

interface Props {
  onChange: ({ target }: React.ChangeEvent<HTMLInputElement>) => void;
}
export const SearchBar = ({ onChange }: Props): React.ReactElement => {
  return (
    <StyledSearchBar type={"search"} onChange={onChange} placeholder="Search" />
  );
};

const StyledSearchBar = styled.input`
  width: 584px;
  height: 40px;
  margin-top: 15px;
  padding: 10px;

  @media ${device.tablet} {
    width: 90vw;
  }
`;
