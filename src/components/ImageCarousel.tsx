import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface ImageCarouselProps {
  images: string[];
  slidesPerView: number;
}

export function ImageCarousel({ images, slidesPerView }: ImageCarouselProps) {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      slidesPerView={slidesPerView}
      navigation
      grabCursor={true}
      centeredSlides={true}
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <img src={image} alt={`Image ${index + 1}`} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
