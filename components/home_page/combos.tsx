"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function Combos() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1.5,
    slidesToScroll: 0.8,
  };
  return (
    <>
      <section>
        <Slider {...settings} className="flex">
          <div>
            <div>
              
            </div>
          </div>
        </Slider>
      </section>
    </>
  );
}
