import React from "react";

import { Carousel } from "react-responsive-carousel";

function Slider({ slides }) {
  return (
    <Carousel>
      {slides.map((img) => {
        return (
          <div>
            <img src={img.image} alt="img-n" />
          </div>
        );
      })}
    </Carousel>
  );
}

export default Slider;
