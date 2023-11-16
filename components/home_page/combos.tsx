"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function Combos() {
  const settings: {} = {
    slidesToShow: 1.5,
    slidesToScroll: 1,
    infinite: false,
  };
  const combo_offers = [
    ["combo_offer/combo1.webp","Crispy Snacks Combo","725g","552","627","12% off"],
    ["combo_offer/combo2.webp","Chicken Kebab & Biriyani Combo","","421","478","12% off"],
    ["combo_offer/combo3.webp","Chicken Curry Bonanaza","502g",'264','278','5% off'],
    ["combo_offer/combo4.webp","assorted Tandoori Plater | ready To Cook",'1000g','833','877','5% off']
  ];
  return (
    <>
      <section className="p-3 ">
        <Slider {...settings} className="flex">
          {combo_offers.map((items) => {
            return (
              <div className="pl-2">
                <div className="h-[22vh] relative">
                  <embed
                    className=" h-[20vh] rounded-lg object-cover"
                    src=
                  />
                  <div className=" flex justify-center items-center  absolute w-[6vh] h-[32px] bg-white shadow-md rounded-lg z-50 -right-3 top-[17vh] ">
                    <h1 className="text-3xl text-redPink"> + </h1>
                  </div>
                </div>
                <div className="pt-2 text-left">
                  <h2 className="text-xl text-left">Crispy snacks combo</h2>
                </div>
                <div className="pt-6">
                  <h3 className="text-lg text-gray-800">750g</h3>
                </div>
                <div className="flex space-x-3 pt-1">
                  <h3 className="text-xl ">₹452</h3>
                  <h3 className=" line-through text-lg text-lightGray">520</h3>
                  <h3 className="text-green text-lg">12% off</h3>
                </div>
                <div className="flex pt-3 space-x-2 items-center">
                  <embed className=" w-6" src="expressDelivery.svg" />
                  <h2 className="text-lg text-gray-800">Today in 40 mins</h2>
                </div>
              </div>
            );
          })}
        </Slider>
      </section>
    </>
  );
}
