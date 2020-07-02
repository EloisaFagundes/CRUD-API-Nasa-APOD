import { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPhoto } from "../actions/index";
// import { addNewPhoto } from "../actions/favPhotos";

export const usePhotos = (date) => {

  const { photoOfTheDay } = useSelector((state) => state.photos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPhoto(date));
  }, [dispatch]);
  
  return photoOfTheDay;
};

// export const useNewPhotos = () => {
//   const { favoritePhotosList } = useSelector((state) => state.photos);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(addNewPhoto());
//   }, [dispatch]);

//   return favoritePhotosList;
// };
