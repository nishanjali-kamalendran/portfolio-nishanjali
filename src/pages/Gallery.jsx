import React, { useState, useEffect } from 'react';
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

  useEffect(() => {
    // Add event listener to close modal when clicking outside
    const handleOutsideClick = (e) => {
      if (modalVisible && e.target.classList.contains('gallery-modal')) {
        closeModal();
      }
    };

    // Add event listener for Escape key
    const handleEscKey = (e) => {
      if (modalVisible && e.key === 'Escape') {
        closeModal();
      }
    };

    if (modalVisible) {
      document.addEventListener('click', handleOutsideClick);
      document.addEventListener('keydown', handleEscKey);
    }

    return () => {
      document.removeEventListener('click', handleOutsideClick);
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [modalVisible]);

  // Function to determine modal content class based on image dimensions
  const getModalSizeClass = (image) => {
    if (!image) return '';
    
    const img = new Image();
    img.src = image.src;
    const aspectRatio = img.width / img.height;
    
    if (aspectRatio < 1) {
      return 'portrait modal-size-md';
    } else {
      if (img.width > 1200) return 'landscape modal-size-xl';
      if (img.width > 800) return 'landscape modal-size-lg';
      return 'landscape modal-size-md';
    }
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
            <div className={`modal-content ${getModalSizeClass(selectedImage)}`}>
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