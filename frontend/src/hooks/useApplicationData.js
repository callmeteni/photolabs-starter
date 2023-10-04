/* eslint-disable func-style */
import { useReducer,useEffect } from 'react';

export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS',
};

function reducer(state, action) {
  switch (action.type) {
  case ACTIONS.FAV_PHOTO_ADDED:
    return { ...state, favPhotoIds: [...state.favPhotoIds, action.payload], favoriteStatus: {
      ...state.favoriteStatus,
      [action.payload.photoId]: true,
    }, };

  case ACTIONS.FAV_PHOTO_REMOVED:
    return { ...state, favPhotoIds: state.favPhotoIds.filter(id => id !== action.payload), favoriteStatus: {
      ...state.favoriteStatus,
      [action.payload.photoId]: false,
    }, };

  case ACTIONS.SET_PHOTO_DATA:
    return { ...state, photos: action.payload };

  case ACTIONS.SET_TOPIC_DATA:
    return { ...state, topics: action.payload };

  case ACTIONS.SELECT_PHOTO:
    return { ...state, selectedPhoto: action.payload };

  case ACTIONS.DISPLAY_PHOTO_DETAILS:
    return { ...state, isPhotoDetailsModalOpen: action.payload };

  default:
    throw new Error(`Unsupported action type: ${action.type}`);
  }
}

const useApplicationData = () => {
  // Initialize your state using useReducer
  const [state, dispatch] = useReducer(reducer, {
    photos: [],
    favPhotoIds: [],
    topics: [],
    selectedPhoto: null,
    selectedFavourites: [],
    isPhotoDetailsModalOpen: false,
  });

  // Action to update the favorite photo IDs
  const updateToFavPhotoIds = (newFavPhotoIds) => {
    dispatch({ type: ACTIONS.FAV_PHOTO_ADDED, payload: newFavPhotoIds });
  };

  // Action to remove a favorite photo
  const removeFavPhotoId = (photoId) => {
    dispatch({ type: ACTIONS.FAV_PHOTO_REMOVED, payload: photoId });
  };

  // Action to set the photo data
  const setPhotoData = (photoData) => {
    dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: photoData });
  };

  // Action to set the topic data
  const setTopicData = (topicData) => {
    dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: topicData });
  };

  // Action to select a photo
  const selectPhoto = (photo) => {
    dispatch({ type: ACTIONS.SELECT_PHOTO, payload: photo });
  };

  // Action to display/hide the photo details modal
  const displayPhotoDetails = (isOpen) => {
    dispatch({ type: ACTIONS.DISPLAY_PHOTO_DETAILS, payload: isOpen });
  };


  const getPhotosByTopic = (topicId) => {
    console.log("Inside getPhotosByTopic",topicId);
    fetch(`/api/topics/photos/${topicId}`)
      .then((response) => response.json())
      .then((data)=> {
        setPhotoData(data);
        
      })
      .catch((error) => console.error('Error fetching photos:', error));
  };

  //Effect to make GET request to API for photos
  useEffect(() => {
    fetch('/api/photos')
      .then((response) => response.json())
      .then((data)=> {
        setPhotoData(data);
        
      })

      .catch((error) => console.error('Error fetching photos:', error));
  }, []);

  //Effect to make GET request to API for Topics
  useEffect(() => {
    fetch('api/topics')
      .then((response) => response.json())
      .then((data) => setTopicData(data))
      .catch((error) => console.error('Error fetching topics:', error));
  },[]);


  return {
    state,
    updateToFavPhotoIds,
    removeFavPhotoId,
    setPhotoData,
    setTopicData,
    selectPhoto,
    displayPhotoDetails,
    getPhotosByTopic,
  };
};

export default useApplicationData;
