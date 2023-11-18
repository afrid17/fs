import { PiSlidersHorizontalBold } from "react-icons/pi";
import { MdAdd} from "react-icons/md";
export default function MenuSuBItems() {
  let allItems = [
    [
      []
    ]
  ]
  return (
    <>
      <section className=" w-full h-fit flex flex-col bg-white rounded-tl-2xl rounded-tr-2xl relative -top-4">
        <div className="p-4 flex justify-between items-center border-b ">
          <div className="pl-4 ">
            <label className="text-bold text-lg ">9 Items</label>
          </div>
          <div className=" w-[30vw] h-[5vh] flex justify-center items-center  rounded-2xl border space-x-2">
            <a className=" text-lg">
              <PiSlidersHorizontalBold />
            </a>
            <h2 className="text-md font-bold">Filters</h2>
          </div>
        </div>
        <div className="p-4">{
          <ProductShowCase />
          }</div>
      </section>
    </>
  );
}
function ProductShowCase() {
  return (
    <>
      <article className="flex flex-col h-fit w-full rounded-xl shadow-lg py-2 ">
        <div className="w-full h-[30vh] bg-red-100 rounded-tl-xl rounded-tr-xl"></div>
        <div className="p-3 ">
          <div className="flex flex-col ">
            <h1 className="text-lg font-bold">Chicken Curry Cut - Small Pieces</h1>
            <p className="text-sm text-lightGray">Juicy bone in & boneless chicken for delicious curries</p>
          </div>
          <div className="flex pt-4 text-sm text-lightGray items-center space-x-2">
            <h3 className="text-lg text-black">500g</h3>
            <h3>| 12-18 Pieces </h3>
            <h3> | Serves 4</h3>
          </div>
          <div className="pt-4">
            <h2>179</h2>
          </div>
          <div className="flex items-center justify-between ">
          <div className="flex pt-4 space-x-2 items-center ">
            <embed className=" w-6" src="expressDelivery.svg" />
            <h2 className="text-sm text-gray-800">Today in 40 mins</h2>
          </div>
          <div className="flex space-x-2 items-center h-fit justify-center w-fit bg-redPink text-white px-3 rounded-md font-bold py-1">
            <h1>Add </h1>
            
            <a className="text-lg"><MdAdd/></a>
          </div>
          </div>
        </div>
      </article>
    </>
  );
}
