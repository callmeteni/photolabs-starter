import React, {useState} from "react";
import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";
import PhotoDetailsModal from "routes/PhotoDetailsModal";


const PhotoList = ({ selectedFavourites, onFavouriteToggle, photoDatas }) => {
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility
  const [selectedPhoto, setSelectedPhoto] = useState(null); // Store the selected photo

  const handlePhotoClick = (photoData) => {
    setSelectedPhoto(photoData); // Set the selected photo
    setIsModalOpen(true); // Open the modal
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // Close the modal
  };
  return (
    <ul className="photo-list">
      {photoDatas.map((photoData) => (
        <PhotoListItem
          key={photoData.id}
          data={photoData}
          isSelected = {selectedFavourites.includes(photoData.id)}
          onFavouriteToggle = {onFavouriteToggle}
          onClick={() => handlePhotoClick(photoData)} />
      ))}
      {isModalOpen && <PhotoDetailsModal
        isOpen={isModalOpen}
        isSelected = {selectedFavourites.includes(selectedPhoto.id)}
        onFavouriteToggle = {onFavouriteToggle}
        onClose={handleCloseModal}
        photoData={selectedPhoto} // Pass the selected photo data to the modal
      />}
    </ul>
  );
};

export default PhotoList;
