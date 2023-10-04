import React, { useState } from "react";
import PhotoList from 'components/PhotoList';
import TopNavigationBar from 'components/TopNavigationBar';

const HomeRoute = ({photos, topics, selectedFavourites, updateToFavPhotoIds,getPhotosByTopic}) => {


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
      onFavouriteToggle={updateToFavPhotoIds} /></>
  );
};

export default HomeRoute;