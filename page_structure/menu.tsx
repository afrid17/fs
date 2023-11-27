"use client";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { FaAngleDown } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { PiSlidersHorizontalBold } from "react-icons/pi";
import { MdAdd } from "react-icons/md";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MenuMainItems from "@/components/re/dropMenuMainItems";

export default function MenuStructure({
  totalItems,
  allItems,
  updateProductData,
  main_items,
  banner_images
}) {
  const handleScroll = () => {
    updateDropItems(false);
  };
  useEffect(() => {
    // Scroll to the top of the sub-item page when it mounts
    window.scrollTo(0, 0);
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  let [selectedMainItem, updateSelectedMainItem] = useState(0);
  let [dropItems, updateDropItems] = useState(false);
  function updateSelectedIndex(index) {
    updateSelectedMainItem(index);
    console.log(index);
  }
  function updateDropItemsValue(value) {
    updateDropItems(value);
  }
  return (
    <>
      <div>
        <div className="flex flex-col h-[50vh] bg-chickenColor ">
          <div className=" pt-6">
            <div className="flex pl-4 pr-4   justify-between ">
              <div className=" flex space-x-4 items-center ">
                <a className="text-2xl ">
                  <MdOutlineKeyboardBackspace />
                </a>
                <div className="flex space-x-1 items-center">
                  <label className="text-xl font-bold  ">Chicken</label>
                  <a
                    className="text-md "
                    onClick={() => {
                      dropItems
                        ? updateDropItems(false)
                        : updateDropItems(true);
                    }}
                  >
                    <FaAngleDown />
                  </a>
                </div>
              </div>
              <div className="flex ">
                <a className="text-2xl ">
                  <IoSearch />
                </a>
              </div>
            </div>
            {dropItems ? (
              <div className=" w-full h-[53vh] bg-white z-50 fixed  ">
                <MenuMainItems />
              </div>
            ) : null}

            <div>
              <Banner banner_images={banner_images}/>
            </div>
          </div>

          <NavMainItems main_items={main_items} selectedMainItem={updateSelectedIndex} />
        </div>
        <div>
          {selectedMainItem == 0 ? (
            <MenuSuBItems
              updateProductData={updateProductData}
              allItems={totalItems}
            />
          ) : selectedMainItem == 1 ? (
            <MenuSuBItems
              updateProductData={updateProductData}
              allItems={allItems[0]}
            />
          ) : selectedMainItem == 2 ? (
            <MenuSuBItems
              updateProductData={updateProductData}
              allItems={allItems[1]}
            />
          ) : selectedMainItem == 3 ? (
            <MenuSuBItems
              updateProductData={updateProductData}
              allItems={allItems[2]}
            />
          ) : selectedMainItem == 4 ? (
            <MenuSuBItems
              updateProductData={updateProductData}
              allItems={allItems[3]}
            />
          ) : selectedMainItem == 5 ? (
            <MenuSuBItems
              updateProductData={updateProductData}
              allItems={allItems[4]}
            />
          ) : selectedMainItem == 6 ? (
            <MenuSuBItems
              updateProductData={updateProductData}
              allItems={allItems[5]}
            />
          ) : (
            <MenuSuBItems
              updateProductData={updateProductData}
              allItems={allItems[6]}
            />
          )}
        </div>
      </div>
    </>
  );
}

function Dot() {
  return (
    <>
      <a className="fixed w-[1vh] rounded-full h-[1vh] bg-lightGray "> </a>
    </>
  );
}
function Banner({banner_images}) {
  const settings: {} = {
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
  };
  

  return (
    <>
      <article className="pt-6 flex justify-center items-center">
        <div className=" w-[90vw] rounded-xl h-[10vh] ">
          <Slider {...settings} className="flex">
            {banner_images.map((item) => {
              return (
                <div key={item}>
                  <embed
                    src={item}
                    className=" w-[90vw] h-[10vh] object-fill rounded-xl "
                  />
                </div>
              );
            })}
          </Slider>
        </div>
      </article>
    </>
  );
}

function NavMainItems({ selectedMainItem ,main_items}) {
  const settings: {} = {
    slidesToShow: 2.6,
    slidesToScroll: 2,
    infinite: false,
    arrows: false,
  };
  
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
                  selectedMainItem(index);
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
function MenuSuBItems({ allItems, updateProductData }) {
  return (
    <>
      <section className=" w-full h-fit flex flex-col bg-white rounded-tl-2xl rounded-tr-2xl relative -top-4">
        <div className="p-4 flex justify-between items-center border-b ">
          <div className="pl-4 ">
            <label className="text-bold text-lg ">
              {allItems.length + " Items"}
            </label>
          </div>
          <div className=" w-[30vw] h-[5vh] flex justify-center items-center  rounded-2xl border space-x-2">
            <a className=" text-lg">
              <PiSlidersHorizontalBold />
            </a>
            <h2 className="text-md font-bold">Filters</h2>
          </div>
        </div>
        <div className="p-4 space-y-4">
          {allItems.map((item) => {
            return (
              <ProductShowCase
                updateProductData={updateProductData}
                productData={item}
              />
            );
          })}
        </div>
      </section>
    </>
  );
}
function ProductShowCase({ productData, updateProductData }) {
  const settings: {} = {
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
    arrows: false,
    dots: false,
  };
  return (
    <>
      <article onClick={()=>{
        updateProductData(productData)
      }}  className="flex flex-col h-fit w-full rounded-xl shadow-lg py-2 ">
        <div className="w-full h-[30vh] bg-red-100 rounded-tl-xl rounded-tr-xl">
          <Slider {...settings}>
            {productData[0].map((item) => {
              return (
                <>
                  <div className=" w-full object-fill h-[30vh] rounded-tl-xl rounded-tr-xl ">
                    <img
                      className=" w-full object-fill h-[30vh] rounded-tl-xl rounded-tr-xl "
                      src={item}
                    />
                  </div>
                </>
              );
            })}
          </Slider>
        </div>
        <div className="p-3 ">
          <div className="flex flex-col ">
            <h1 className="text-lg font-bold">{productData[1]}</h1>
            <p className="text-sm text-lightGray">{productData[2]}</p>
          </div>
          <div className="flex pt-4 text-sm text-lightGray items-center space-x-2">
            <h3 className="text-lg text-lightGray">{productData[3]}</h3>
            <h3>{productData[4] == "" ? "" : "| " + productData[4]}</h3>
            <h3>{productData[5] == "" ? "" : "| " + productData[5]}</h3>
          </div>
          <div className="pt-4">
            <h2 className=" font-bold text-xl">
              <span className="text-lg font-normal ">{"₹ "}</span>
              {+productData[6]}
            </h2>
          </div>
          <div className="flex items-center justify-between ">
            <div className="flex pt-4 space-x-2 items-center ">
              <embed className=" w-6" src="expressDelivery.svg" />
              <h2 className="text-sm text-gray-800">Today in 40 mins</h2>
            </div>
            <div className="flex space-x-2 items-center h-fit justify-center w-fit bg-redPink text-white px-3 rounded-md font-bold py-1">
              <h1>Add </h1>

              <a className="text-lg">
                <MdAdd />
              </a>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
