"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdAdd, MdOutlineKeyboardBackspace } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import { TbWeight } from "react-icons/tb";
import { ImSpoonKnife } from "react-icons/im";
import { PiBowlFood } from "react-icons/pi";
export default function Product() {
  const settings: {} = {
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
    arrows: true,
    dots: false,
  };
  return (
    <>
      <main className="w-full">
        <div>
          <div className="p-3 flex items-center justify-between ">
            <a className="text-2xl ">
              <MdOutlineKeyboardBackspace />
            </a>
            <a className="text-xl">
              <FiSearch />
            </a>
          </div>
          <article className="pt-4 flex flex-col">
            <div className="h-[40vh] w-[100vw]">
              <Slider {...settings} className="h-[40vh] w-[100vw]"></Slider>
            </div>
            <div className="pl-4 pr-4 pt-4 pb-1">
              <label>Premium chicken high Boneless</label>
            </div>
            <div className="w-full pl-4 pr-4  text-center text-sm text-black flex justify-evenly space-x-[1px] ">
              <div className="bg-gray-200 text-center items-center justify-center flex space-x-1 w-[33vw] h-[25px] rounded-tl-md rounded-bl-md ">
                <a className="text-xs">
                  <TbWeight />
                </a>
                <h3 className="text-xs">450g</h3>
              </div>
              <div className="bg-gray-200 w-[33vw] h-[25px] text-center items-center justify-center flex space-x-1">
                <a className="text-xs">
                  <ImSpoonKnife />
                </a>
                <h3 className="text-xs">3-7 Pieces</h3>
              </div>
              <div className="bg-gray-200 w-[33vw] h-[25px] rounded-tr-md rounded-br-md text-center items-center justify-center flex space-x-1">
                <a className="text-xs">
                  <PiBowlFood />
                </a>
                <h3 className="text-xs">Serves 5</h3>
              </div>
            </div>
            <div className="pl-4 pr-10 pt-4 text-start text-xs text-lightGray">
              <p>
                FreshSlice Chicken Thighs(Boneless) is a juicy cut that does't
                dry out easily.These equality-sized boneless pueces ensure
                uniform cooking. Sincethey are among the meatiest portions of
                the bird, they can easily be slow cooked or grilled.
              </p>
            </div>
          </article>
        </div>
        <div className="fixed  flex flex-col w-[100vw] bottom-0  h-[10vh] bg-gray-100  shadow-[rgba(0,0,15,0.5)_10px_5px_4px_0px]">
          <div className="flex pl-4 pt-1 space-x-2 items-center ">
            <embed className=" w-4" src="expressDelivery.svg" />
            <h2 className="text-xs text-gray-800">Today in 40 mins</h2>
          </div>
          <div className="w-full pl-4 flex justify-between h-full bg-white pt-1">
            <div>
              <h1 className="font-bold  text-2xl flex items-start justify-start ">
                <span className="text-sm pr-[2px]  font-normal">₹</span>284
              </h1>
            </div>
            <div className="flex space-x-1 items-center h-fit justify-center w-fit bg-redPink text-white px-8
            rounded-lg font-bold py-[6px]">
              <h1 className="font-normal text-sm font-robotoMono">Add </h1>
              <a className="text-lg font-light text-gray-100">
                <MdAdd />
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
