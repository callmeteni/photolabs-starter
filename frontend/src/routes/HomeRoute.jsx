import React, { useState } from "react";
import PhotoList from 'components/PhotoList';
import TopNavigationBar from 'components/TopNavigationBar';

const HomeRoute = ({photos, topics, selectedFavourites,getPhotosByTopic,toggleFavoritePhoto }) => {

  const handleSelectTopic = (topicId) => {
    getPhotosByTopic(topicId);
  };

  return (
    <><TopNavigationBar
      hasFavourites={selectedFavourites.length > 0}
      onSelectTopic={handleSelectTopic}
      topics={topics}

    />
    <PhotoList
      photoDatas={photos}
      selectedFavourites={selectedFavourites}
      toggleFavoritePhoto={toggleFavoritePhoto} /></>
  );
};

export default HomeRoute;