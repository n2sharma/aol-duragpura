"use client";

import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";

const SwiperNavButtons = ({
  containerStyles,
  btnStyles,
  iconsstyles,
}: {
  containerStyles: string;
  btnStyles: string;
  iconsstyles: string;
}) => {
  const swiper = useSwiper();

  return (
    <div className={`${containerStyles}`}>
      <button className={`${btnStyles}`} onClick={() => swiper.slidePrev()}>
        <PiCaretLeftBold className={`${iconsstyles}`} />
      </button>
      <button className={`${btnStyles}`} onClick={() => swiper.slideNext()}>
        <PiCaretRightBold className={`${iconsstyles}`} />
      </button>
    </div>
  );
};

export default SwiperNavButtons;
