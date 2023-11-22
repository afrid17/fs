"use client";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { FaAngleDown } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import Banner from "@/components/menu_page/banner";
import MainItems from "@/components/home_page/main_items";
import NavMainItems from "@/components/menu_page/main_items";
import MenuSuBItems from "@/components/menu_page/sub_items";
import allItems from "@/components/menu_page/allItems";
import { useState } from "react";
import chickenTotalItems from "@/data/items/chicken/totalItems";

export default function MenuStructure() {
  let [selectedMainItem, updateSelectedMainItem] = useState(0);
  function updateSelectedIndex(index) {
    updateSelectedMainItem(index);
    console.log(index);
  }
  return (
    <>
      <div>
        <div className="flex flex-col h-[50vh] bg-chickenColor ">
          <div className="pl-4 pr-4 pt-6">
            <div className="flex   justify-between  ">
              <div className=" flex space-x-4 items-center">
                <a className="text-2xl ">
                  <MdOutlineKeyboardBackspace />
                </a>
                <div className="flex space-x-1 items-center">
                  <label className="text-xl font-bold  ">Chicken</label>
                  <a className="text-md ">
                    <FaAngleDown />
                  </a>
                </div>
              </div>
              <div className="flex">
                <a className="text-2xl ">
                  <IoSearch />
                </a>
              </div>
            </div>

            <div>
              <Banner />
            </div>
          </div>

          <NavMainItems selectedMainItem={updateSelectedIndex} />
        </div>
        <div>
          {selectedMainItem == 0 ? (
            <MenuSuBItems allItems={chickenTotalItems} />
          ) : selectedMainItem == 1 ? (
            <MenuSuBItems allItems={allItems[0]} />
          ) : selectedMainItem == 2 ? (
            <MenuSuBItems allItems={allItems[1]} />
          ) : selectedMainItem == 3 ? (
            <MenuSuBItems allItems={allItems[2]} />
          ) : selectedMainItem == 4 ? (
            <MenuSuBItems allItems={allItems[3]} />
          ) : selectedMainItem == 5 ? (
            <MenuSuBItems allItems={allItems[4]} />
          ) : selectedMainItem == 6 ? (
            <MenuSuBItems allItems={allItems[5]} />
          ) : (
            <MenuSuBItems allItems={allItems[6]} />
          )}
        </div>
      </div>
    </>
  );
}
