import React from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

const FavBadge = ({ hasFavourites }) => {
  return (
    <div className='fav-badge'>
      <FavIcon displayAlert={!!hasFavourites}/>
    </div>
  );
};

export default FavBadge;