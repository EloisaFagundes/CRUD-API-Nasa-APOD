import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPhoto, getMediaByDate } from "../../actions/index";
import { addFavorite } from "../../actions/favorites";
import styled from "styled-components";
import {FavoriteBorderOutlined} from "@material-ui/icons";

import {
  CardContent,
  CardHeader,
  Typography,
  TextField,
  Button,
  IconButton
} from "@material-ui/core";

const MediaWrapper = styled.div`
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  max-width: 1080px;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;
const ImageStyled = styled.img`
  max-width: 1080px;
  width: 100%;
  max-height: auto;
  min-height: auto;
  background-size: 100%;
`;

const VideoStyled = styled.iframe`
  max-width: 1080px;
  width: 100%;
  max-height: auto;
  height: auto;
  background-size: 100%;
`;

function PhotoOfTheDay() {
  const [date, setDate] = useState("");
  //   console.log(photoOfTheDay);

  const { photoOfTheDay } = useSelector((state) => state.photos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPhoto());
  }, [dispatch]);

  const handleChangeDate = (event) => {
    console.log(event.target.value);
    setDate(event.target.value);
  };

  const sendSelectedDate = (event) => {
    event.preventDefault();
    dispatch(getMediaByDate(date));
  };

  const handleAddToFavorites = () => {
    dispatch(addFavorite(photoOfTheDay))
  }

  return (
    <>
      <CardHeader
        title={photoOfTheDay.title}
        subheader="Escolha abaixo uma data para ver sua respectiva imagem"
        color="inherit"
      />
      <form onSubmit={sendSelectedDate}>
        <TextField type="date" onChange={handleChangeDate} value={date} />
        <Button type="OnSubmit">Enviar</Button>
      </form>
      <MediaWrapper>
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
      <IconButton onClick={handleAddToFavorites} color="primary" aria-label="add to favorites images">
              <FavoriteBorderOutlined color="action"  />
      </IconButton>

      <CardContent background="black">
        <Typography variant="subtitle1" align="justify">
          {photoOfTheDay.explanation}
        </Typography>
      </CardContent>
    </>
  );
}

export default PhotoOfTheDay;
