import React, { useState } from 'react';
import "../style/Gallery.css"; // Ensure this path is correct
const Gallery = ({ galleryImages }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [showMore, setShowMore] = useState(false);

  const openModal = (image) => {
    setSelectedImage(image);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedImage(null);
  };

  const handleShowMore = () => {
    setShowMore(true);
  };

  return (
    <section className="gallery-section" id="gallery">
      <div className="container">
        <h2 className="section-title">Gallery</h2>
        <div className="related-images-grid">
          {galleryImages.slice(0, showMore ? galleryImages.length : 8).map((image) => (
            <div className="related-images" key={image.id} onClick={() => openModal(image)}>
              <div className="main-image">
                <img src={image.src} alt={image.alt} />
              </div>
              <div className="modal-meta">
                <h3>{image.alt}</h3>
                <div>
                  <span className="match">{image.match}</span>
                  <span className="year">{image.year}</span>
                </div>
                {/* Remove the description here so it only shows in the modal */}
              </div>
            </div>
          ))}
        </div>
        
        {!showMore && galleryImages.length > 8 && (
          <div className="more-button-container">
            <button onClick={handleShowMore} className="more-button">Show More</button>
          </div>
        )}
        
        {modalVisible && selectedImage && (
          <div className="gallery-modal">
            <div className="modal-content">
              <button className="close-btn" onClick={closeModal}>×</button>
              <div className="modal-header">
                <h2>{selectedImage.alt}</h2>
                <div className="modal-meta">
                  <span className="match">{selectedImage.match}</span>
                  <span className="year">{selectedImage.year}</span>
                </div>
              </div>
              <div className="modal-body">
                <div className="main-image">
                  <img src={selectedImage.src} alt={selectedImage.alt} />
                </div>
                {/* Description only appears here in the modal */}
                <p className="modal-description">{selectedImage.description}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;