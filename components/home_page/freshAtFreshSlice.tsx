"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function FreshAtFreshSlice() {
  const settings: {} = {
    slidesToShow: 1.9,
    slidesToScroll: 1,
    infinite: false,
  };
  const freshAtFreshSlice = [
    "freshAtFreshSlice/fresh1.webp",
    "freshAtFreshSlice/fresh2.jpeg",
    "freshAtFreshSlice/fresh3.jpeg",
    "freshAtFreshSlice/fresh4.jpeg",
  ];

  return (
    <>
      <section className="p-3">
        <section>
          <Slider {...settings} className="flex">
            {freshAtFreshSlice.map((item) => {
              return (
                <div className="pl-4">
                  <div className="h-[32vh] relative">
                    <embed
                      className=" h-[30vh] w-[46vw] rounded-lg object-fill "
                      src={item}
                    />
                  </div>
                </div>
              );
            })}
          </Slider>
        </section>
      </section>
    </>
  );
}
