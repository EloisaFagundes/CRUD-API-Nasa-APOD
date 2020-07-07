import React from "react"
import styled from "styled-components";
import { Favorite } from "@material-ui/icons";

export const FooterWrapper = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 8vh;
  background: #333;
  color: #f5f5f5;
  border-top: 2px solid #ff8040;
  font-size: 24px;

  @media screen and (max-width: 1280px) {
    font-size:14px;
  }
  `;

function Footer() {

    return(
        <FooterWrapper>
            <p>Feito por Eloisa Fagundes com </p>
            <Favorite contained="primary" color="primary" />
        </FooterWrapper>
    )
}

export default Footer