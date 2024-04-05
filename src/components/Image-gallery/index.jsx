"use client"
import React, { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

const ImageGallery = ({ galleryImages }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState('');
  console.log(galleryImages,"images")
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
            <SwiperSlide>
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