import React from "react";
import IntroBox from "../Boxes/IntroBox";
import AboutMeBox from "../Boxes/AboutMeBox";

export const BoxContainer = () => {
  return (
    <div className="box__container">
      <IntroBox />
      <AboutMeBox />
    </div>
  );
};
