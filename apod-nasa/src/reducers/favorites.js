const initialState = {
  favoriteList: [],
};

const favorites = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_FAVORITE": {
      const newList = [... state.favoriteList];
      newList.push(action.payload.info);
      return {
        ...state,
        favoriteList: newList,
      };
    }

    case "DELETE_FAVORITE": {
      const newListFavorite =  state.favoriteList.filter(item => item.date !== action.payload.date)

      return {
        ...state,
        favoriteList: newListFavorite,
      };
    }

    case "SET_ALL_FAVORITES":{
      return {
        ...state,
        favoriteList: action.payload.favorites
      }
    }

    default:
      return state;
  }
};
export default favorites;

