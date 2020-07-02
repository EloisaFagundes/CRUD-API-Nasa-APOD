import React from "react";
import AppBar from "../../components/AppBar/AppBar";
import PhotoOfTheDay from "../../components/PhotoOfTheDay/PhotoOfTheDay";
// import FavoritePhotos from "../../components/FavoritePhotos/FavoritePhotos";
// import FormInsertNewPhoto from "../../components/Form/FormInsertNewPhoto"
function HomePage() {
  return (
    <>
      <AppBar />
      <>
      {/* <FormInsertNewPhoto />
      <FavoritePhotos/> */}
      </>
      <div>
      <PhotoOfTheDay />
      </div>
    </>
  );
}

export default HomePage;
