import React, { useState } from "react";
import PhotoList from 'components/PhotoList';
import TopNavigationBar from 'components/TopNavigationBar';
import useApplicationData from "hooks/useApplicationData";

const HomeRoute = ({photos, topics}) => {
  const [selectedFavourites, setSelectedFavourites] = useState([]);
  const {
    state,
    updateToFavPhotoIds,
    setTopicData,
    getPhotosByTopic,
  } = useApplicationData();


  const handleFavourites = (photoId) => {
    if (selectedFavourites.includes(photoId)) {
      setSelectedFavourites((prevSelected) =>
        prevSelected.filter((id) => id !== photoId));
    } else {
      setSelectedFavourites((prevSelected) => [...prevSelected, photoId]);
    }
  };

  const handleSelectTopic = (topicId) => {
    getPhotosByTopic(topicId);
  };

  return (
    <><TopNavigationBar
      hasFavourites={selectedFavourites.length > 0}
      onSelectTopic={handleSelectTopic}
      topics={state.topics}

    />
    <PhotoList
      photoDatas={state.photos}
      selectedFavourites={selectedFavourites}
      onFavouriteToggle={updateToFavPhotoIds} /></>
  );
};

export default HomeRoute;