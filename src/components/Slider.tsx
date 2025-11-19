import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

const HeroSlider: React.FC = () => {
  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      loop={false}
      effect={"fade"}
      pagination={{ clickable: true }}
      navigation={true}
      modules={[Pagination, Navigation, EffectFade]}
      className="heroSlider"
      style={{ height: "75vh" }}
    >
      <SwiperSlide>
        <div className="slide relative">
          <img
            src="/images/nem-chua.jpg.webp"
            alt="Nem chua"
            className="d-block w-100 vh-75 object-cover"
          />
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="slide relative">
          <img
            src="/images/nem-thinh.jpg.webp"
            alt="Nem chua"
            className="d-block w-100 h-25 object-cover"
          />
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="slide relative">
          <img
            src="/images/nem-nuong.jpg.webp"
            alt="Nem chua"
            className="d-block w-100 h-25 object-cover"
          />
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default HeroSlider;
