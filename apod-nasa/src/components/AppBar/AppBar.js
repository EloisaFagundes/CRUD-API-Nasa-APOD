import React from "react";
import { AppBar, Toolbar } from "@material-ui/core";
import styled from "styled-components";
import { push } from "connected-react-router";
import { routes } from "../../containers/Router";
import { useDispatch } from "react-redux";
import { Link } from "@material-ui/core";

const ToolbarStyled = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
  height: 8vh;
`;

const MenuLinksWrapper = styled.span`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  grid-gap: 10px;
`;

const AppBarStyled = styled(AppBar)`
  height: 4rem;
`;

function Appbar() {
  const dispatch = useDispatch();

  return (
    <>
      <AppBarStyled position="static" color="primary">
        <ToolbarStyled>
          <MenuLinksWrapper>
            <Link
              component="button"
              variant="button"
              color="inherit"
              underline="hover"
              onClick={() => dispatch(push(routes.root))}
            >
              IMAGEM DO DIA
            </Link>
            <Link
              component="button"
              variant="button"
              color="inherit"
              onClick={() => dispatch(push(routes.favorites))}
            >
              MINHAS IMAGENS FAVORITAS{" "}
            </Link>
          </MenuLinksWrapper>
        </ToolbarStyled>
      </AppBarStyled>
    </>
  );
}

export default Appbar;
