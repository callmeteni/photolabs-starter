import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

// eslint-disable-next-line func-style
function PhotoFavButton({isSelected, onFavouriteToggle}) {
  
  const [selected, setSelected] = useState(false);


  const handleClick = useCallback(() => {
    onFavouriteToggle();
    setSelected((prevSelected) => !prevSelected);
  }, []);

  return (
    <div className={`photo-list__fav-icon ${selected ? 'active' : 'inactive'}`} onClick={handleClick}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={selected} />
      </div>
    </div>
  );
}

export default PhotoFavButton;