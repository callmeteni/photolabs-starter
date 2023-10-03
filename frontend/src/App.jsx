import React from 'react';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import useApplicationData from './hooks/useApplicationData';
// Note: Rendering a single component to build components in isolation
const App = () => {

  const {
    state,
    onPhotoSelect,
    updateToFavPhotoIds,
    onLoadTopic,
    onClosePhotoDetailsModal,
  } = useApplicationData();

  return (
    <div className="App">
      {/* { Array.from(Array(3)).map((_, index) => <PhotoListItem key={index}/>) } */}
      <HomeRoute photos ={state.photos} selectedFavourites ={state.selectedFavourites}/>
      
    </div>
  );
};

export default App;
