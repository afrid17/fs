"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdAdd, MdOutlineKeyboardBackspace } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import { TbWeight } from "react-icons/tb";
import { ImSpoonKnife } from "react-icons/im";
import { PiBowlFood } from "react-icons/pi";
<<<<<<< HEAD
export default function Product() {
=======
import chickenTotalItems from "@/data/items/chicken/totalItems";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import {  useEffect, useRef, useState } from "react";
export default function ProductStructure({productData,disc,updatePage}) {
  useEffect(() => {
    // Scroll to the top of the sub-item page when it mounts
    window.scrollTo(0, 0);
  }, []);
  let sliderRef = useRef();
  let [sliderIndex, updateSliderIndex] = useState(0);

  function NextArrow() {
    return (
      <div
        onClick={() => {
          sliderRef!.current!.slickPrev();
          if (sliderIndex >= 0) {
            updateSliderIndex(sliderIndex - 1);
          }
        }}
        className={sliderIndex == 0 ?"w-[4vh] h-[4vh] rounded-full bg-gray-200 opacity-30  z-50 relative ml-1 -mt-[20vh] flex justify-center items-center"
         : sliderIndex == 2?"w-[4vh] h-[4vh] rounded-full  bg-gray-200  z-50 relative ml-1 -mt-[20vh] flex justify-center items-center"
        :"w-[4vh] h-[4vh] rounded-full  bg-gray-200  z-50 relative ml-1 -mt-[20vh] flex  justify-center items-center"}
      >
        {" "}
        <FaAngleLeft />
      </div>
    );
  }
  function PrevArrow() {
    return (
      <div
        onClick={() => {
          sliderRef!.current!.slickNext();
          if (sliderIndex <= 3) {
            updateSliderIndex(sliderIndex + 1);
          }
        }}
        className={sliderIndex ==2 ?"w-[4vh] h-[4vh] bg-gray-200 opacity-30 relative z-50 flex ml-[90vw] top-[19vh]  justify-center items-center rounded-full"
      :"w-[4vh] h-[4vh] bg-gray-200 relative z-50 flex ml-[90vw] top-[19vh]  justify-center items-center rounded-full"}
      >
        {" "}
        <FaAngleRight />
      </div>
    );
  }

>>>>>>> 27beeb9 (commit)
  const settings: {} = {
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
    arrows: true,
    dots: false,
<<<<<<< HEAD
  };
=======
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  
>>>>>>> 27beeb9 (commit)
  return (
    <>
      <main className="w-full">
        <div>
          <div className="p-3 flex items-center justify-between ">
<<<<<<< HEAD
            <a className="text-2xl ">
=======
            <a className="text-2xl " onClick={()=>{updatePage(1)}}>
>>>>>>> 27beeb9 (commit)
              <MdOutlineKeyboardBackspace />
            </a>
            <a className="text-xl">
              <FiSearch />
            </a>
          </div>
<<<<<<< HEAD
          <article className="pt-4 flex flex-col">
            <div className="h-[40vh] w-[100vw]">
              <Slider {...settings} className="h-[40vh] w-[100vw]"></Slider>
            </div>
            <div className="pl-4 pr-4 pt-4 pb-1">
              <label>Premium chicken high Boneless</label>
=======
          <article className=" flex flex-col">
            <div className="h-[40vh] w-[100vw]">
              <Slider
                ref={sliderRef}
                {...settings}
                className="h-[35vh] w-[100vw] flex justify-center items-center"
              >
                {productData[0].map((item) => {
                  return (
                    <>
                      <div key={item}>
                        <img
                          className="w-[100vw] h-[35vh] object-fill"
                          src={item}
                        />
                      </div>
                    </>
                  );
                })}
              </Slider>
            </div>
            <div className="pl-4 pr-4 text-xl pt-4 pb-1">
              <label>{productData[1]}</label>
>>>>>>> 27beeb9 (commit)
            </div>
            <div className="w-full pl-4 pr-4  text-center text-sm text-black flex justify-evenly space-x-[1px] ">
              <div className="bg-gray-200 text-center items-center justify-center flex space-x-1 w-[33vw] h-[25px] rounded-tl-md rounded-bl-md ">
                <a className="text-xs">
                  <TbWeight />
                </a>
<<<<<<< HEAD
                <h3 className="text-xs">450g</h3>
=======
                <h3 className="text-xs">{productData[3]}</h3>
>>>>>>> 27beeb9 (commit)
              </div>
              <div className="bg-gray-200 w-[33vw] h-[25px] text-center items-center justify-center flex space-x-1">
                <a className="text-xs">
                  <ImSpoonKnife />
                </a>
<<<<<<< HEAD
                <h3 className="text-xs">3-7 Pieces</h3>
=======
                <h3 className="text-xs">{productData[4]}</h3>
>>>>>>> 27beeb9 (commit)
              </div>
              <div className="bg-gray-200 w-[33vw] h-[25px] rounded-tr-md rounded-br-md text-center items-center justify-center flex space-x-1">
                <a className="text-xs">
                  <PiBowlFood />
                </a>
<<<<<<< HEAD
                <h3 className="text-xs">Serves 5</h3>
=======
                <h3 className="text-xs">{productData[5]}</h3>
>>>>>>> 27beeb9 (commit)
              </div>
            </div>
            <div className="pl-4 pr-10 pt-4 text-start text-xs text-lightGray">
              <p>
<<<<<<< HEAD
                FreshSlice Chicken Thighs(Boneless) is a juicy cut that does't
                dry out easily.These equality-sized boneless pueces ensure
                uniform cooking. Sincethey are among the meatiest portions of
                the bird, they can easily be slow cooked or grilled.
              </p>
            </div>
          </article>
        </div>
        <div className="fixed  flex flex-col w-[100vw] bottom-0  h-[10vh] bg-gray-100  shadow-[rgba(0,0,15,0.5)_10px_5px_4px_0px]">
=======
                {disc}
              </p>
            </div>
            <div className="flex flex-col pt-6 pl-4 pr-4  ">
              <div>
                <h1>Nutritional information (Approx Values per 100g)</h1>
              </div>
              <div className="flex flex-col pl-2 pt-2">
                <div className="flex space-x-1 text-lightGray text-xs ">
                  <h3>Total Energy : </h3>
                  <h4>127 Kcal</h4>
                </div>
                <div className="flex space-x-1 text-lightGray text-xs ">
                  <h3>Corbohydrate : </h3>
                  <h4>0 g</h4>
                </div>
                <div className="flex space-x-1 text-lightGray text-xs ">
                  <h3>Fat : </h3>
                  <h4>4.5 g</h4>
                </div>
                <div className="flex space-x-1 text-lightGray text-xs ">
                  <h3>Protein : </h3>
                  <h4>21.6 g </h4>
                </div>
              </div>
              <div className=" text-xs  pt-3">
                <h3>
                  FreshSlice Meats are chilled Between 0-4°C to maintain
                  freshness. Do not freeze
                </h3>
              </div>
            </div>
          </article>
        </div>
        <div className="fixed  flex flex-col w-[100vw] bottom-0  h-[10vh] bg-gray-100 topShadow">
>>>>>>> 27beeb9 (commit)
          <div className="flex pl-4 pt-1 space-x-2 items-center ">
            <embed className=" w-4" src="expressDelivery.svg" />
            <h2 className="text-xs text-gray-800">Today in 40 mins</h2>
          </div>
          <div className="w-full pl-4 flex justify-between h-full bg-white pt-1">
            <div>
              <h1 className="font-bold  text-2xl flex items-start justify-start ">
<<<<<<< HEAD
                <span className="text-sm pr-[2px]  font-normal">₹</span>284
              </h1>
            </div>
            <div className="flex space-x-1 items-center h-fit justify-center w-fit bg-redPink text-white px-8
            rounded-lg font-bold py-[6px]">
=======
                <span className="text-sm pr-[2px]  font-normal">₹</span>{productData[6]}
              </h1>
            </div>
            <div
              className="flex space-x-1 items-center h-fit justify-center w-fit bg-redPink text-white px-8
            rounded-lg font-bold py-[6px] shadow-lg"
            >
>>>>>>> 27beeb9 (commit)
              <h1 className="font-normal text-sm font-robotoMono">Add </h1>
              <a className="text-lg font-light text-gray-100">
                <MdAdd />
              </a>
            </div>
          </div>
        </div>
<<<<<<< HEAD
=======
        <div className=" flex flex-col bg-pinkShade  space-y-8 pb-48 pl-4 pr-4 mt-6 pt-10 ">
          <div className="flex flex-col space-y-">
            <div className="w-[10vw] h-[3px] bg-redPink rounded-lg"></div>
            <h3 className="text-sm pt-1">
              We will sell only the meet that we whould eat ourselves
            </h3>
            <p className="text-xs text-lightGray pt-2">
              At Freshslice, we're big meat lovers. And by big, wemean huge. So
              when it comes to the meat we put on your palte, we're extremely
              picky, Every single product is handpicked by a team with years of
              experience.
            </p>
          </div>
          <div className="flex flex-col space-y-">
            <div className="w-[10vw] h-[3px] bg-redPink rounded-lg"></div>
            <h3 className="text-sm pt-1">
              if it's not fresh, we won't sell it
            </h3>
            <p className="text-xs text-lightGray pt-2">
              For meat to stay fresh and retain its natural juicy, iy needs to
              be stored at a temparature betwween 0-4°C. We maintain this
              temparature from the time we procure the product to cleaning ,
              cutting and storing it, until it leaves for delivery, And weven
              when it's out of deliveey we keep it chilled right up to your
              doorstep. Did we mention that we're obsessed ? .
            </p>
          </div>
          <div className="flex flex-col space-y-">
            <div className="w-[10vw] h-[3px] bg-redPink rounded-lg"></div>
            <h3 className="text-sm pt-1">
              We will charge only for what you buy
            </h3>
            <p className="text-xs text-lightGray pt-2">
              Doesn't everyone do this? Not really. Most other places first
              weigh the meat, then cut up the pieces. and throw out the parts
              which are't fit to eat, such as offal,glizzard,wingtips etc.. But
              you still pay based on the original weight even though what you
              finally get it 10% to 30% less.
            </p>
          </div>
        </div>
>>>>>>> 27beeb9 (commit)
      </main>
    </>
  );
}
