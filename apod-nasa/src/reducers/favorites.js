const initialState = {
  favoriteList: [],
};

const favorites = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_FAVORITE": {
      const newList = state.favoriteList;
      newList.push(action.payload.info);
      return {
        ...state,
        favoriteList: newList,
      };
    }
    default:
      return state;
  }
};
export default favorites;
