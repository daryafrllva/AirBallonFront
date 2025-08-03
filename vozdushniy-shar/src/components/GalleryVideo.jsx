import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

function GalleryVideo() {
  const swiperRef = useRef(null);

  return (
    <div className="gallery-video-container">
      <h2>Видимое счастье</h2>
      <div>Видео наших довольных клиентов</div>
      <div className="gallery-video-swiper">
        <Swiper
          spaceBetween={30}
          slidesPerView={3}
          centeredSlides={true}
          style={{ width: '100%', maxWidth: 800 }}
          onSwiper={swiper => (swiperRef.current = swiper)}
        >
          <SwiperSlide>
            <div className="gallery-video-card"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="gallery-video-card"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="gallery-video-card"></div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="gallery-video-arrows">
        <div
          className="gallery-video-arrow left"
          tabIndex={0}
          role="button"
          aria-label="Предыдущий слайд"
          onClick={() => swiperRef.current && swiperRef.current.slidePrev()}
        >
          &#8592;
        </div>
        <div
          className="gallery-video-arrow right"
          tabIndex={0}
          role="button"
          aria-label="Следующий слайд"
          onClick={() => swiperRef.current && swiperRef.current.slideNext()}
        >
          &#8594;
        </div>
      </div>
    </div>
  );
}

export default GalleryVideo;
