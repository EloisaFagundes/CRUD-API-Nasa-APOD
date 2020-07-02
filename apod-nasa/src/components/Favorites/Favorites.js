import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";


import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardHeader from "@material-ui/core/CardHeader";
import IconButton from "@material-ui/core/IconButton";
import DeleteRoundedIcon from "@material-ui/icons/DeleteRounded";
import styled from "styled-components";

const ContentPhotoWraper = styled.div`
  border: 1px solid  grey;
  width: 200px;
  /* padding: 0.5rem; */
  display: flex;
  flex-direction: column;
  max-width: 500px;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;
const ImageStyled = styled.img`
  /* max-width: 1080px; */
  /* border: 1px solid  blue; */
  width: 50%;
  max-height: 50%;
  min-height: 50%;
`;

const CardStyled = styled(Card)`
  /* max-width: 1080px; */
  border: 1px solid  yellow;
  max-height: 60%;
  min-height: 50%;
  max-width: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 32px;
`;

function Favorites() {

  const { favoriteList } = useSelector((state) => state.favorites);
  const dispatch = useDispatch();

  console.log(favoriteList)

  return (
    <>
      <CardStyled>
        <CardHeader title="Homem na Lua" subheader="September 14, 1985" />
        <CardActions disableSpacing>
          <ContentPhotoWraper>
            <ImageStyled
              src={require("../../images/history-in-hd-e5eDHbmHprg-unsplash.jpg")}
              alt="imagem de um um homem vestido de astronauta pisando na lua"
            />

            <IconButton
              color="primary"
              aria-label="delete from favorites images"
            >
              <DeleteRoundedIcon color="action" />
            </IconButton>
          </ContentPhotoWraper>
        </CardActions>
      </CardStyled>
    </>
  );
}

export default Favorites;
