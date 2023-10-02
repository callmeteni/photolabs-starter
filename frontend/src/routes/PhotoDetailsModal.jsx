import React from 'react';

import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';
import PhotoFavButton from 'components/PhotoFavButton';


const PhotoDetailsModal = ({isOpen, onClose,photoData,onFavouriteToggle,isSelected }) => {
  return (
    <div className={`photo-details-modal ${isOpen ? 'open' : 'close'}`}>
      <button className="photo-details-modal__close-button" onClick={onClose}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      {isOpen && photoData && (
        <div className="photo-details-modal__images">
          <PhotoFavButton
            isSelected={isSelected}
            onFavouriteToggle={() => onFavouriteToggle(photoData.id)}
          />
          <img
            src={photoData.urls.full} // Use the URL of the larger photo
            alt={`Photo by ${photoData.user.username}`}
            className="photo-details-modal__image"
          />
          <div>
            <div className = 'photo-details-modal__photographer-details'>
              
            
              <div className="photo-list__user-details">
                <img className = 'photo-list__user-profile' src={photoData.user.profile} alt={`${photoData.user.username}'s profile`} />
                <div className="photo-list__user-info" >
                  {photoData.user.name}
                  <p className = 'photo-list__user-location'>{photoData.location.city}, {photoData.location.country}</p>
                </div>
              </div>
              
            </div>
            <p>Similar Photos</p>
            <PhotoList photoDatas ={photoData?.similar_photos} selectedFavourites = {[]} />
            {/* {Object.values(photoData.similar_photos).map((similarPhoto) => (
              <img
                key={similarPhoto.id}
                src={similarPhoto.urls.regular} // Display similar photos (you can adjust the URL accordingly)
                alt={`Photo by ${similarPhoto.user.username}`}
              />
             
            ))} */}
          </div>
          


          {/* Add any additional details or information here */}
        </div>
      )}
    </div>
  );
};

export default PhotoDetailsModal;