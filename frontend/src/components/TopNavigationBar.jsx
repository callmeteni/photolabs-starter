import React from 'react';
import TopicList from './TopicList';
import FavBadge from './FavBadge';

import '../styles/TopNavigationBar.scss';

const TopNavigation = ({hasFavourites,onSelectTopic,topics}) => {
  
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList onSelectTopic={onSelectTopic} topics={topics}/>
      <FavBadge hasFavourites={hasFavourites}/>
    </div>

    
  );
};

export default TopNavigation;