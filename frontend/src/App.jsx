import React from 'react';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import useApplicationData from './hooks/useApplicationData';
// Note: Rendering a single component to build components in isolation
const App = () => {

  const { state} = useApplicationData();
  console.log(state.photos);
  return (
    <div className="App">
      <HomeRoute photos ={state.photos}
        selectedFavourites={state.selectedFavourites}
        topics={state.topics}/>
      
    </div>
  );
};

export default App;
