"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function NavMainItems({ selectedMainItem }) {
  const settings: {} = {
    slidesToShow: 2.6,
    slidesToScroll: 2,
    infinite: false,
    arrows: false,
  };
  let main_items = [
    ["items/chicken/main_items/chicken_main_item_1.webp", "All"],
    ["items/chicken/main_items/chicken_main_item_2.webp", "Curry Cuts"],
    ["items/chicken/main_items/chicken_main_item_3.webp", "Boneless & Mince"],
    ["items/chicken/main_items/chicken_main_item_4.webp", "Speciality Cuts"],
    ["items/chicken/main_items/chicken_main_item_5.webp", "Offals"],
    ["items/chicken/main_items/chicken_main_item_6.webp", "Exotic"],
    ["items/chicken/main_items/chicken_main_item_7.webp", "Premium Cuts"],
  ];
  return (
    <>
      <Slider
        {...settings}
        className="flex justify-center items-center text-center space-x-10 pt-10"
      >
        {main_items.map((item, index) => {
          return (
            <div className=" w-[33vw] pl-4 " key={item[1]}>
              <div
                onClick={() => {
                  selectedMainItem(index)
                }}
                className="w-[28vw] flex flex-col space-y-2"
              >
                <embed
                  src={item[0]}
                  className="object-fill h-[10vh] w-[27vw] "
                />
                <label className="text-md text-center font-robotoMono">
                  {item[1]}
                </label>
              </div>
            </div>
          );
        })}
      </Slider>
    </>
  );
}
