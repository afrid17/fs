"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function Store199() {
  const settings: {} = {
    slidesToShow: 1.5,
    slidesToScroll: 1,
    infinite: false,
  }
  let store199 = [
    [""]
  ]

  return (
    <>
      <section>
        <Slider {...settings} className="flex">
          {store199.map((item) => {
            return (
              <div className="pl-4">
                <div className="h-[22vh] relative">
                  <embed
                    className=" h-[20vh] w-[57vw] rounded-lg object-fill "
                    src={item[0]}
                  />
                  <div className=" flex justify-center items-center  absolute w-[6vh] h-[32px] bg-white shadow-md rounded-lg z-50 -right-3 top-[17vh] ">
                    <h1 className="text-3xl text-redPink"> + </h1>
                  </div>
                </div>
                <div className="pt-2 text-left h-[6vh]">
                  <h2 className="text-md text-left pr-3">{item[1]}</h2>
                </div>
                <div className="pt-6 h-[7vh]">
                  <h3 className="text-lg text-gray-800">{item[2]}</h3>
                </div>
                <div className="flex space-x-3 pt-3 h-[3vh]">
                  <h3 className="text-xl ">₹{item[3]}</h3>
                  <h3 className=" line-through text-lg text-lightGray">
                    {item[4]}
                  </h3>
                  <h3 className="text-green text-lg">{item[5]}</h3>
                </div>
                <div className="flex pt-4 space-x-2 items-center ">
                  <embed className=" w-6" src="expressDelivery.svg" />
                  <h2 className="text-sm text-gray-800">Today in 40 mins</h2>
                </div>
              </div>
            );
          })}
        </Slider>
      </section>
    </>
  );
}
