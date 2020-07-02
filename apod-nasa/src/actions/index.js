import axios from "axios";



export const setPhoto = (photo) => ({
  type: "SET_PHOTO",
  payload: {
    photo,
  },
});

export const getPhoto = () => async (dispatch) => {
  // console.log("Traz a foto necessária")
  try {
    const response = await axios.get(`${baseUrl}`, {
      params: {
        api_key: getApiKey(),
      },
    });
    // console.log(response.data.date)
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
   // console.log("Traz a foto necessária")
   try {
    const response = await axios.get(`${baseUrl}`, {
      params: {
        api_key: getApiKey(),
        date: date
      },
    });
    // console.log(response.data.date)
    dispatch(setPhoto(response.data));
  } catch (err) {
    console.error(err.response.data);
    alert(
      err?.response?.data?.message || "Não foi possível pegar a foto do dia."
    );
  }
};
