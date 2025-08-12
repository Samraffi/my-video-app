import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const posters = Array.from(
  { length: 9 },
  (_, i) => `/specials/https_specials-${i + 1}.png`
);

export default function PostersCarousel() {
  return (
    <div className="max-w-[1840px] absolute bottom-0">
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
        {posters.map((src) => (
          <SwiperSlide key={src}>
            <div style={{ borderRadius: 12, overflow: "hidden" }}>
              <img src={src} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
