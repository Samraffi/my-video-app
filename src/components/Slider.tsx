import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { v4 as uuidv4 } from "uuid";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface VideoItem {
  Id: string;
  Title: string;
  CoverImage: string;
  TitleImage: string;
  Date: string;
  ReleaseYear: string;
  MpaRating: string;
  Category: string;
  Duration: string;
  VideoUrl?: string;
  Description: string;
}

interface SliderProps {
  onSlideClick: (item: VideoItem) => void;
  trendingData: VideoItem[];
}

const Slider = ({ onSlideClick, trendingData }: SliderProps) => {
  return (
    <div className="max-w-[1440px] absolute bottom-0 z-30">
      <Swiper
        spaceBetween={15}
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
        {trendingData.map((item) => (
          <SwiperSlide key={uuidv4()} onClick={() => onSlideClick(item)}>
            <div style={{ borderRadius: 12, overflow: "hidden" }}>
              <img className="cursor-pointer" src={`/specials/${item.CoverImage}`} alt={item.Title} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;