import React from 'react';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import useApplicationData from './hooks/useApplicationData';
// Note: Rendering a single component to build components in isolation
const App = () => {

  const { state, updateToFavPhotoIds,getPhotosByTopic} = useApplicationData();
  console.log(state);
  return (
    <div className="App">
      <HomeRoute photos ={state.photos}
        selectedFavourites={state.selectedFavourites}
        topics={state.topics}
        updateToFavPhotoIds ={updateToFavPhotoIds}
        getPhotosByTopic={getPhotosByTopic}
        
      />
      
    </div>
  );
};

export default App;
