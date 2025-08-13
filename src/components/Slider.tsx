import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import data from "../constants/data.json";
import { v4 as uuidv4 } from "uuid";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


const Slider = () => {
  return (
    <div className="max-w-[1840px] absolute bottom-0 z-30">
      <Swiper
        spaceBetween={5}
        slidesPerView={2}
        navigation={false}
        pagination={false}
        keyboard={{ enabled: true }}
        loop
        breakpoints={{
          640: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 5 },
          1280: { slidesPerView: 8 },
        }}
      >
        {data.TendingNow.map(({ CoverImage }) => (
          <SwiperSlide key={uuidv4()}>
            <div style={{ borderRadius: 12, overflow: "hidden" }}>
              <img className="cursor-pointer" src={`/specials/${CoverImage}`} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Slider;
