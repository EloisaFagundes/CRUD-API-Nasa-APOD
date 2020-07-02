export const addFavorite = (info) => {
  console.log("cheguei");
  return {
    type: "ADD_FAVORITE",
    payload: {
      info,
    },
  };
};

export const deleteFavorite = (id) => {
  return {
    type: "DELETE_FAVORITE",
    payload: {
      id: id,
      // o id deve chegar via parâmetro
    },
  };
};
