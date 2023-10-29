import React from "react";

import { useNavigate, useLocation } from "react-router-dom";

import "./placegallery.css";
import { getAllImages } from "../../helper/getLink";

// Ref: https://codepen.io/abmin/pen/jZKrze
const PlaceGallery = (): JSX.Element => {
  const navigate = useNavigate();
  const location = useLocation();

  const { placeId, placeName, albumData } = location.state as PlacesGalleryLocation;

  const handleImageClick = (): void => {
    const targetImage = document.querySelector("#full-image") as HTMLImageElement;
    const clickedImage = event.target as HTMLImageElement;
    if (targetImage && clickedImage) {
      targetImage.setAttribute("src", clickedImage.src);
      const showElement = document.querySelector("#image-viewer") as HTMLElement;
      if (showElement) {
        showElement.style.display = "block"; // Use style.display to show
      }
    }
  };

  const handleCloseImage = (): void => {
    const imageViewer = document.getElementById("image-viewer");
    if (imageViewer) {
      imageViewer.style.display = 'none';
    }
  };

  const redirectToAlbum = (): void => navigate(`/places/${placeId}`);

  return (
    <div className="container mx-auto p-4">
      <button onClick={redirectToAlbum}>
        <h1 className="text-2xl font-bold mb-4 text-purple">Về album {placeName}</h1>
      </button>
      <div className="images">
        {
          getAllImages(albumData).map((url) => <img
            key={url}
            src={url}
            alt={`img-${placeName}`}
            onClick={handleImageClick}
            loading="lazy"
          />)
        }
      </div>
      <div id="image-viewer">
        <span className="close" onClick={handleCloseImage}>&times;</span>
        <img className="modal-content" id="full-image" />
      </div>
    </div>
  );
};

export default PlaceGallery;
