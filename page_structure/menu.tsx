"use client";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { FaAngleDown } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import Banner from "@/components/menu_page/banner";
import MainItems from "@/components/home_page/main_items";
import NavMainItems from "@/components/menu_page/main_items";
import MenuSuBItems from "@/components/menu_page/sub_items";
import allItems from "@/components/menu_page/allItems";
import { useEffect, useState } from "react";
import chickenTotalItems from "@/data/items/chicken/totalItems";

export default function MenuStructure({
  totalItems,
  allItems,
  updatePage,
  updateProductData,
}) {
   const handleScroll = () => {
    updateDropItems(false)
  };
  useEffect(() => {
    // Scroll to the top of the sub-item page when it mounts
    window.scrollTo(0, 0);
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
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
                <a
                  className="text-2xl "
                  onClick={() => {
                    updatePage(0);
                  }}
                >
                  <MdOutlineKeyboardBackspace />
                </a>
                <div className="flex space-x-1 items-center">
                  <label className="text-xl font-bold  ">Chicken</label>
                  <a className="text-md " onClick={()=>{
                    dropItems?updateDropItems(false):updateDropItems(true)
                  }}>
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
              <Banner />
            </div>
          </div>

          <NavMainItems selectedMainItem={updateSelectedIndex} />
        </div>
        <div>
          {selectedMainItem == 0 ? (
            <MenuSuBItems
            
              updateProductData={updateProductData}
              updatePage={updatePage}
              allItems={totalItems}
            />
          ) : selectedMainItem == 1 ? (
            <MenuSuBItems
              updateProductData={updateProductData}
              updatePage={updatePage}
              allItems={allItems[0]}
            />
          ) : selectedMainItem == 2 ? (
            <MenuSuBItems
              updateProductData={updateProductData}
              updatePage={updatePage}
              allItems={allItems[1]}
            />
          ) : selectedMainItem == 3 ? (
            <MenuSuBItems
              updateProductData={updateProductData}
              updatePage={updatePage}
              allItems={allItems[2]}
            />
          ) : selectedMainItem == 4 ? (
            <MenuSuBItems
              updateProductData={updateProductData}
              updatePage={updatePage}
              allItems={allItems[3]}
            />
          ) : selectedMainItem == 5 ? (
            <MenuSuBItems
              updateProductData={updateProductData}
              updatePage={updatePage}
              allItems={allItems[4]}
            />
          ) : selectedMainItem == 6 ? (
            <MenuSuBItems
              updateProductData={updateProductData}
              updatePage={updatePage}
              allItems={allItems[5]}
            />
          ) : (
            <MenuSuBItems
              updateProductData={updateProductData}
              updatePage={updatePage}
              allItems={allItems[6]}
            />
          )}
        </div>
      </div>
    </>
  );
}

function MenuMainItems() {
  let images = [
    "main_items/chicken.png",
    "main_items/fish.png",
    "main_items/mutton.png",
    "main_items/prawns.png",
    "main_items/kebab.png",
    "main_items/coldCuts.png",
    "main_items/eggs.png",
  ];
  let names = [
    "Chicken",
    "Fish & Seafood",
    "Mutton",
    "Prawns",
    "Kebab",
    "Coldcuts",
    "Eggs",
  ];
  return (
    <>
      <section>
        <div className="flex flex-col pt-2">
          {images.map((item, index) => {
            return (
              <>
                <div className="pl-3 flex space-x-4 items-center w-[100-vw] h-[7vh] bg-white border-b border-gray-300">
                  <img className="w-10 h-10  " src={item} alt="" />
                  <label className=" font-robotoMono text-sm">
                    {names[index]}
                  </label>
                </div>
              </>
            );
          })}
        </div>
      </section>
    </>
  );
}
                 