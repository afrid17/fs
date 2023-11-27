"use client"
import { PiSlidersHorizontalBold } from "react-icons/pi";
import { MdAdd } from "react-icons/md";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function MenuSuBItems({allItems,updatePage,updateProductData}) {
  
  
  return (
    <>
      <section className=" w-full h-fit flex flex-col bg-white rounded-tl-2xl rounded-tr-2xl relative -top-4">
        <div className="p-4 flex justify-between items-center border-b ">
          <div className="pl-4 ">
            <label className="text-bold text-lg ">{allItems.length + " Items"}</label>
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
            return <ProductShowCase updateProductData={updateProductData} updatePage={updatePage} productData={item} />;
          })}
        </div>
      </section>
    </>
  );
}
function ProductShowCase({ productData ,updatePage,updateProductData}) {
  const settings: {} = {
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
    arrows: false,
    dots: false,
  };
  return (
    <>
      <article onClick={()=>{updatePage(2);updateProductData(productData)}} className="flex flex-col h-fit w-full rounded-xl shadow-lg py-2 ">
        <div className="w-full h-[30vh] bg-red-100 rounded-tl-xl rounded-tr-xl">
          <Slider {...settings}>
            {productData[0].map((item) => {
              return (
                <>
                  <div className=" w-full object-fill h-[30vh] rounded-tl-xl rounded-tr-xl ">
                    <img className=" w-full object-fill h-[30vh] rounded-tl-xl rounded-tr-xl "  src={item}/>

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
            <h2 className=" font-bold text-xl"><span className="text-lg font-normal ">{"₹ "}</span>{ + productData[6]}</h2>
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
