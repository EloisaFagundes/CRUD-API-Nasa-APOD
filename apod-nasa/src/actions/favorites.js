
export const addFavorite = (info) => {
  console.log("adicionei");
  return {
    type: "ADD_FAVORITE",
    payload: {
      info,
    },
  };
};

export const getFavoritesList = (info) => {
  return {
    type: "GET_FAVORITES",
    payload: {
      info,
    }
  }
}


export const setAllFavorites = (favorites) => {
  return {
    type: "SET_ALL_FAVORITES",
    payload: {
      favorites,
    }
  }
}


export const deleteFavorite = (date) => {
  console.log("deletei");
  return {
    type: "DELETE_FAVORITE",
    payload: {
      date,
    },
  };
};
