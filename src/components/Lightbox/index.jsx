"use client"

import React from 'react'

function Lightbox({ index }) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleImageClick = (index) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const handleCloseLightbox = () => {
    setLightboxOpen(false);
  };


  React.useEffect(() => {
    if (index) {
      handleImageClick(index);
    }
  }, [index])

  return (
    <>
      {lightboxOpen && (
        <Lightbox
          mainSrc={data[currentImageIndex]}
          nextSrc={data[(currentImageIndex + 1) % data.length]}
          prevSrc={data[(currentImageIndex + data.length - 1) % data.length]}
          onCloseRequest={handleCloseLightbox}
          onMovePrevRequest={() =>
            setCurrentImageIndex((currentImageIndex + data.length - 1) % data.length)
          }
          onMoveNextRequest={() => setCurrentImageIndex((currentImageIndex + 1) % data.length)}
        />
      )}
    </>
  )
}

export default Lightbox