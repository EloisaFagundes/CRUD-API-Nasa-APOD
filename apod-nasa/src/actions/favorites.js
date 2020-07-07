
export const addFavorite = (info) => {
  return {
    type: "ADD_FAVORITE",
    payload: {
      info,
    },
  };
};


export const setAllFavorites = (favorites) => {
  return {
    type: "SET_ALL_FAVORITES",
    payload: {
      favorites,
    }
  }
}


export const deleteFavorite = (date) => {
  return {
    type: "DELETE_FAVORITE",
    payload: {
      date,
    },
  };
};
