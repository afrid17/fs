"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function Combos() {
  const settings = {
    slidesToShow: 1.5,
    slidesToScroll: 1,
    infinite:false
  };
  return (
    <>
      <section className="p-3 ">
        <Slider {...settings} className="flex">
          <div className="pl-2">
            <div className="h-[22vh] relative">
              <embed className=" h-[20vh] rounded-lg object-cover" src="combo_offer/combo1.webp"/>
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
            <div cla>
              <h></h>
            </div>
          </div>
          <div className="pl-6">
            <div className="h-[35vh]">
              <embed className=" h-[20vh] rounded-md object-cover" src="combo_offer/combo1.webp"/>
            </div>
          </div>
          
          
         
          
        </Slider>
      </section>
    </>
  );
}
