import React from "react";
import { push } from "connected-react-router";
import { routes } from "../../containers/Router";
import { useDispatch } from "react-redux";
import { Link } from "@material-ui/core";
import { AppBarStyled, ToolbarStyled, MenuLinksWrapper } from "./Styles";

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
              IMAGENS FAVORITAS{" "}
            </Link>
          </MenuLinksWrapper>
        </ToolbarStyled>
      </AppBarStyled>
    </>
  );
}

export default Appbar;
