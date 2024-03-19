import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "../../App.scss";

import { FreeMode, Navigation, Thumbs } from "swiper/modules";

export default function SwiperJs({ resultIngr, handleIngr }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const render = resultIngr.map((el, index) => {
    return (
      <SwiperSlide key={index} onDoubleClick={handleIngr}>
        <img
          src={`https://www.thecocktaildb.com/images/ingredients/${el}.png`}
          alt=""
        />
      </SwiperSlide>
    );
  });

  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {render}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={resultIngr.length}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {resultIngr.map((el, index) => {
          return (
            <SwiperSlide key={index}>
              <img
                src={`https://www.thecocktaildb.com/images/ingredients/${el}.png`}
                alt=""
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
