import React, { useState } from "react";
import PhotoList from 'components/PhotoList';
import TopNavigationBar from 'components/TopNavigationBar';

const HomeRoute = ({photos}) => {
  const [selectedFavourites, setSelectedFavourites] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleFavourites = (photoId) => {
    if (selectedFavourites.includes(photoId)) {
      setSelectedFavourites((prevSelected) =>
        prevSelected.filter((id) => id !== photoId));
    } else {
      setSelectedFavourites((prevSelected) => [...prevSelected, photoId]);
    }
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  return (
    <><TopNavigationBar
      hasFavourites={selectedFavourites.length > 0}
      onCategorySelect={handleCategorySelect}

    />
    <PhotoList
      photoDatas={selectedCategory
        ? photos.filter((photo) => photo.category === selectedCategory)
        : photos}      selectedFavourites={selectedFavourites}
      onFavouriteToggle={handleFavourites} /></>
  );
};

export default HomeRoute;