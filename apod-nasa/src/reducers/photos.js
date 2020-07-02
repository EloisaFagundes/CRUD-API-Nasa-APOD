const initialState = {
  photoOfTheDay: {},
};

const photoToday = (state = initialState, action) => {
  switch (action.type) {
    case "SET_PHOTO":
      return {
        ...state,
        photoOfTheDay: action.payload.photo,
      };
    default:;
      return state;
  }
};

export default photoToday;
