import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { FaAngleDown } from "react-icons/fa";
import {IoSearch} from 'react-icons/io5'

export default function MenuNavigation() {
  return (
    <>
      <section className="pl-4 pr-4 pt-6 bg-chickenColor h-[45vh]">
        <div>
          <div className="flex justify-between  ">
            <div className=" flex space-x-4 items-center">
              <a className="text-2xl ">
                <MdOutlineKeyboardBackspace />
              </a>
              <div className="flex space-x-1 items-center">
                <label className="text-xl font-bold">Chicken</label>
                <a className="text-md ">
                  <FaAngleDown />
                </a>
              </div>
            </div>
            <div className="flex">
              <a className="text-2xl ">
                <IoSearch/>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
