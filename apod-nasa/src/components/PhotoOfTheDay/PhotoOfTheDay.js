import React, { useState, useEffect } from "react";
import AppBar from "../AppBar/AppBar";
import { useDispatch, useSelector } from "react-redux";
import { getPhoto, getMediaByDate } from "../../actions/index";
import { addFavorite } from "../../actions/favorites";
import { Favorite } from "@material-ui/icons";

import { CardHeader, Typography, TextField, Button } from "@material-ui/core";
import {
  MediaWrapper,
  SelectDateWrapper,
  FormStyled,
  ImageStyled,
  VideoStyled,
  ContentWrapper,
  ExplanationWrapper,
} from "./Styles";
import Footer from "../Footer/Footer";
import { setAllFavorites } from "../../actions/favorites";





function PhotoOfTheDay() {
  const [date, setDate] = useState("");

  const { favoriteList } = useSelector((state) => state.favorites);

  const { photoOfTheDay } = useSelector((state) => state.photos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPhoto());
  }, [dispatch]);

  useEffect(() => {
    const favoriteContent = JSON.parse(localStorage.getItem("MyFavorites"));
    favoriteContent.lenght !== 0 && dispatch(setAllFavorites(favoriteContent));
  }, [dispatch]);

  useEffect(() => {
    const stateAsString = JSON.stringify(favoriteList);
    localStorage.setItem("MyFavorites", stateAsString);
  }, [favoriteList]);

  const handleChangeDate = (event) => {
    console.log(event.target.value);
    setDate(event.target.value);
  };

  const sendSelectedDate = (event) => {
    event.preventDefault();
    dispatch(getMediaByDate(date));
  };

  const handleAddToFavorites = () => {
    dispatch(addFavorite(photoOfTheDay));
    alert("Imagem adicionada aos favoritos com sucesso!");
  };

  let today = new Date();
  let month = JSON.stringify(today.getMonth() + 1);
  if (month < 10) {
    month = "0" + month;
  }
  let day = today.getDate();
  if (day < 10) {
    day = "0" + day;
  }
  let tomorrow = today.getFullYear() + "-" + month + "-" + day;

  return (
    <>
      <AppBar />
      <ContentWrapper>
        <Typography variant="subtitle1">
          Selecione uma data para trocar a imagem:
        </Typography>
        <SelectDateWrapper>
          <FormStyled onSubmit={sendSelectedDate}>
            <TextField
              type="date"
              inputProps={{
                max: tomorrow,
                min: "1995-06-16",
              }}
              onChange={handleChangeDate}
              variant="outlined"
              value={date}
              size="small"
            />

            <Button
              type="OnSubmit"
              variant="contained"
              color="primary"
              height="100%"
            >
              Ver
            </Button>
          </FormStyled>
        </SelectDateWrapper>

        <MediaWrapper>
          <CardHeader title={photoOfTheDay.title} color="inherit" />
          <Button
            onClick={handleAddToFavorites}
            color="primary"
            aria-label="add to favorites images"
            variant="outlined"
          >
            {" "}
            Adicione aos favoritos
            <Favorite contained="primary" color="primary" />
          </Button>

          {photoOfTheDay.media_type === "image" ? (
            <ImageStyled
              src={photoOfTheDay.url}
              alt="Foto do espaço"
            ></ImageStyled>
          ) : (
            <VideoStyled
              src={photoOfTheDay.url}
              title="Foto do espaço"
              frameBorder="0"
              gesture="media"
              allow="encrypted-media"
              allowFullScreen
              className="video"
              height="auto"
            />
          )}
        </MediaWrapper>

        <ExplanationWrapper>
          <Typography variant="body2" align="justify">
            {photoOfTheDay.explanation}
          </Typography>
        </ExplanationWrapper>
      </ContentWrapper>

      <Footer />
    </>
  );
}

export default PhotoOfTheDay;
