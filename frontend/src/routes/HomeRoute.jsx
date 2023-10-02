import React, { useState } from "react";
import PhotoList from 'components/PhotoList';
import TopNavigationBar from 'components/TopNavigationBar';

const HomeRoute = ({photos}) => {
  const [selectedFavourites, setSelectedFavourites] = useState([]);

  const handleFavourites = (photoId) => {
    console.log(photoId, selectedFavourites);
    if (selectedFavourites.includes(photoId)) {
      setSelectedFavourites((prevSelected) =>
        prevSelected.filter((id) => id !== photoId));
    } else {
      setSelectedFavourites((prevSelected) => [...prevSelected, photoId]);
    }
  };

  console.log(selectedFavourites);
  return (
    <><TopNavigationBar hasFavourites={selectedFavourites.length > 0} />
      <PhotoList photoDatas = {photos} selectedFavourites={selectedFavourites} onFavouriteToggle={handleFavourites} /></>
  );
};

export default HomeRoute;