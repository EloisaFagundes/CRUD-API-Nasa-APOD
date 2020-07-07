import axios from "axios";

const baseUrl =
"https://api.nasa.gov/planetary/apod?api_key=";
const getApiKey = () => "";
// ADICIONE UMA CHAVE DE ACESSO DO SITE https://api.nasa.gov/.

export const setPhoto = (photo) => ({
  type: "SET_PHOTO",
  payload: {
    photo,
  },
});

export const getPhoto = () => async (dispatch) => {
  try {
    const response = await axios.get(`${baseUrl}`, {
      params: {
        api_key: getApiKey(),
      },
    });

    dispatch(setPhoto(response.data));
  } catch (err) {
    console.error(err.response.data);
    alert(
      err?.response?.data?.message || "Não foi possível pegar a foto do dia."
    );
  }
};

export const getMediaByDate = (date) => async (dispatch) => {
  console.log("chegou");
  try {
    const response = await axios.get(`${baseUrl}`, {
      params: {
        api_key: getApiKey(),
        date: date,
      },
    });

    dispatch(setPhoto(response.data));
  } catch (err) {
    console.error(err.response.data);
    alert(
      err?.response?.data?.message || "Não foi possível pegar a foto do dia."
    );
  }
};
