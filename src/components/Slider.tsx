import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import data from "../constants/data.json";
import { v4 as uuidv4 } from "uuid";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


const Slider = () => {
  const [sortedData, setSortedData] = useState<typeof data.TendingNow>([]);

  useEffect(() => {
    const sorted = [...data.TendingNow].sort((a, b) => {
      return new Date(b.Date).getTime() - new Date(a.Date).getTime();
    });

    setSortedData(sorted);
  }, []);

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
        {sortedData.map(({ CoverImage }) => (
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
