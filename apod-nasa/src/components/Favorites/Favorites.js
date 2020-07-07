import React, { useEffect } from "react";
import AppBar from "../AppBar/AppBar";
import { useDispatch, useSelector } from "react-redux";
import { deleteFavorite, setAllFavorites } from "../../actions/favorites";

import DeleteRoundedIcon from "@material-ui/icons/DeleteRounded";
import { Typography, Button, Divider } from "@material-ui/core";
import {
  ButtonWrapper,
  VideoStyled,
  PaperContentStyled,
  ContentWrapperStyled,
  ImageStyled,
  TitleWrapper,
  ContentPageWrapper,
  WrapperAllContentPage,
} from "./Styles";
import { Favorite } from "@material-ui/icons";
import Footer from "../Footer/Footer";



function Favorites() {
  const { favoriteList } = useSelector((state) => state.favorites);
  const dispatch = useDispatch();

  const handleDeleteFavorite = (date) => {
    dispatch(deleteFavorite(date));
  };

  useEffect(() => {
    const favoriteContent = JSON.parse(localStorage.getItem("MyFavorites"));
    favoriteContent.lenght !== 0 && dispatch(setAllFavorites(favoriteContent));
  }, [dispatch]);

  useEffect(() => {
    const stateAsString = JSON.stringify(favoriteList);
    localStorage.setItem("MyFavorites", stateAsString);
  }, [favoriteList]);

  return (
    <WrapperAllContentPage>
      <AppBar />

      <TitleWrapper>
        <Typography color="primary">Favoritas</Typography>
        <Favorite contained="primary" color="primary" />
      </TitleWrapper>
      <Divider variant="middle" color="secondary" />

      <ContentPageWrapper>
        {favoriteList?.map((image) => (
          <ContentWrapperStyled>
            <PaperContentStyled>
              <Typography variant="subtitle1" align="center">
                {image.title}{" "}
              </Typography>

              {image.media_type === "image" ? (
                <ImageStyled src={image.url} alt="Foto do espaço"></ImageStyled>
              ) : (
                <VideoStyled
                  src={image.url}
                  title="Foto do espaço"
                  frameBorder="0"
                  gesture="media"
                  allow="encrypted-media"
                  allowFullScreen
                  className="video"
                  height="auto"
                />
              )}

              <ButtonWrapper>
                <Button
                  onClick={() => handleDeleteFavorite(image.date)}
                  data-message="Esse é o botão de apagar a imagem."
                  color="primary"
                  variant="outlined"
                  aria-label="delete from favorites images/video"
                >
                  Deletar
                  <DeleteRoundedIcon />
                </Button>
              </ButtonWrapper>
            </PaperContentStyled>
          </ContentWrapperStyled>
        ))}
      </ContentPageWrapper>

      <Footer />
    </WrapperAllContentPage>
  );
}

export default Favorites;
