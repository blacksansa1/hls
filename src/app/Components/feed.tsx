'use client'

import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import VideoPlayer from "./videoPlayer";

export default function Feed() {
  return (
    <>
      <div className="bg-black h-screen flex justify-center items-center">
        <div className="h-full border border-white w-3/5 flex justify-center items-center">
          <Swiper
            spaceBetween={10}
            slidesPerView={1.4}
            direction={"vertical"}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            mousewheel={true}
            className="h-screen w-full"
          >
            <SwiperSlide className="border-white border text-white" ><VideoPlayer/></SwiperSlide>
            <SwiperSlide className="border-white border text-white" ><VideoPlayer/></SwiperSlide>
            <SwiperSlide className="border-white border text-white" ><VideoPlayer/></SwiperSlide>
            <SwiperSlide className="border-white border text-white" ><VideoPlayer/></SwiperSlide>
            <SwiperSlide className="border-white border text-white" ><VideoPlayer/></SwiperSlide>
            <SwiperSlide className="border-white border text-white" ><VideoPlayer/></SwiperSlide>

          </Swiper>
        </div>
      </div>
    </>
  );
}
