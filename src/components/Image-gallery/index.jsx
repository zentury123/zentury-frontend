"use client"
import React, { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import Lightbox from 'react-image-lightbox';

const ImageGallery = ({ galleryImages }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState('');

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleImageClick = (index) => {
    console.log(index)
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const handleCloseLightbox = () => {
    setLightboxOpen(false);
  };

  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        spaceBetween={10}
        navigation
        thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : '' }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="singleCarGalleryImages rounded-lg mb-1 relative swiper-slide-car "
      >
        {galleryImages && galleryImages.map((gallery, i) => {
          return (
            <SwiperSlide onClick={() => handleImageClick(i)}>
              <Image unoptimized={true} src={`${gallery}`}
                fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw" alt={`gallery-image-${i}`} />
            </SwiperSlide>
          )
        })}

      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={3}
        watchSlidesProgress
        modules={[Navigation, Thumbs]}
        className="singleCarGalleryThumbs cursor-pointer rounded-b-md mt-2"
      >

        {galleryImages && galleryImages.map((gallery, i) => {
          return (
            <SwiperSlide>
              <Image unoptimized={true} src={`${gallery}`}
                fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw" className="rounded-md" alt={`gallery-thumb-${i}`} />
            </SwiperSlide>
          )
        })}
      </Swiper>


      {lightboxOpen && galleryImages && (
        <Lightbox
          mainSrc={galleryImages[currentImageIndex]}
          nextSrc={galleryImages[(currentImageIndex + 1) % galleryImages.length]}
          prevSrc={galleryImages[(currentImageIndex + galleryImages.length - 1) % galleryImages.length]}
          onCloseRequest={handleCloseLightbox}
          onMovePrevRequest={() =>
            setCurrentImageIndex((currentImageIndex + galleryImages.length - 1) % galleryImages.length)
          }
          onMoveNextRequest={() => setCurrentImageIndex((currentImageIndex + 1) % galleryImages.length)}
        />
      )}

      <style>
        {`
                img{
                    object-fit:cover
                }
                `}
      </style>
    </>
  );
};
export default ImageGallery;