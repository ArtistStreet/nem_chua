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
            src="/images/01.png"
            alt="Nem chua"
            className="d-block w-100 object-cover"
            style={{ marginTop: "-500px" }}
          />
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="slide relative">
          <img
            src="/images/02.jpg"
            alt="Nem chua"
            className="d-block w-100 object-cover"
            style={{ marginTop: "-600px" }}
          />
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="slide relative">
          <img
            src="/images/nem-coi.jpg"
            alt="Nem chua"
            className="d-block w-100 object-cover"
            style={{ marginTop: "-600px" }}
          />
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default HeroSlider;
