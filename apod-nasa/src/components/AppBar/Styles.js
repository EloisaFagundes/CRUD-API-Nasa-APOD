import { AppBar, Toolbar } from "@material-ui/core";
import styled from "styled-components";

export const ToolbarStyled = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
  height: 8vh;
`;

export const MenuLinksWrapper = styled.span`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  grid-gap: 10px;
`;

export const AppBarStyled = styled(AppBar)`
  height: 8vh;
`;