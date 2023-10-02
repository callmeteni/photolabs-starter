import React from "react";
import PhotoFavButton from "./PhotoFavButton";
import "../styles/PhotoListItem.scss";



const PhotoListItem = (props) => {
  const {data,  isSelected, onFavouriteToggle } = props;
  const {id, location, urls, user,  } = data;
  const {username, name, profile} = user;
  const {full, regular} = urls;



  return (
    <div className={`photo-list__item" ${isSelected ? "selected" : ""}`}>
      <PhotoFavButton
        isSelected={isSelected}
        onFavouriteToggle={() => onFavouriteToggle(id)}
      />
      <img className = 'photo-list__image' src={regular} onClick={props.onClick}/>
      <div className="photo-list__user-details">
        <img className = 'photo-list__user-profile' src={profile} alt={`${username}'s profile`} />
        <div className="photo-list__user-info" >
          {name}
          <p className = 'photo-list__user-location'>{`${location.city}, ${location.country}`}</p>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
