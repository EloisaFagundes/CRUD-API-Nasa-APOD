import React, {useState} from "react";
import styled from "styled-components";
import { addNewPhoto } from "../../actions/favPhotos"
import { useDispatch } from "react-redux";
import {
  Button,
  TextField,
  List,
  ListItemText,
  Card,
} from "@material-ui/core";


export const FormSendPhotoWrapper = styled.form`
  display: flex;
  flex-direction: column;
`;

const RegisterNewPhotoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem auto;
  width: 30vw;
  /* min-height: 80vh; */
  justify-content: center;
  text-align: center;

  @media screen and (max-device-width: 1200px) {
    width: 90vw;
  }
`;

function FormInsertNewPhoto() {
  const [photo, setPhoto] = useState([])

  const dispatch = useDispatch()

  const handleChangeInput = (event) =>{
    setPhoto(event.target.value)
    console.log(photo)
  }

  const handleAddPhoto = (event) => {
    event.preventDefault();
    dispatch(addNewPhoto())
    setPhoto([])
  }

  return (
    <>
      <RegisterNewPhotoWrapper>
        <FormSendPhotoWrapper onSubmit={handleAddPhoto}>
          <TextField
            required
            onChange={handleChangeInput}
            // value=
            label="Novo Foto favorita"
            InputLabelProps={{ shrink: true }}
            name="favphoto"
            variant="outlined"
            margin="normal"
          ></TextField>
          <Button type="onSubmit" color="primary" variant="contained">
            CADASTRAR
          </Button>
        </FormSendPhotoWrapper>
      </RegisterNewPhotoWrapper>
    </>
  );
}

export default FormInsertNewPhoto;
