import React from "react";
import { Button, AppBar, Toolbar } from "@material-ui/core";
import styled from "styled-components";
import { push } from "connected-react-router";
import {routes} from "../../containers/Router"
import { useDispatch } from "react-redux";

const ToolbarStyled = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
  height: 8vh;
`;

const AppBarStyled = styled(AppBar) `
height: 4rem;
`

function Appbar() {

  const dispatch = useDispatch();

  return (
    <>
      <AppBarStyled position="static" color="primary">
        <ToolbarStyled>
          <span>
          <Button color="inherit" >Foto do dia</Button>
          <Button color="inherit" onClick={() => dispatch(push(routes.favorites))}>Fotos favoritas</Button>
          </span>
        </ToolbarStyled>
      </AppBarStyled>
    </>
  );
}

export default Appbar;
