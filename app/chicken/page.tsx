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
import chickenAllItems from "@/data/items/chicken/allItems";
import chickenBannerImages from "@/data/items/chicken/bannerImages";
import chicken_main_items from "@/data/items/chicken/mainItems";
import chickenTotalItems from "@/data/items/chicken/totalItems";
import Link from "next/link";
import Product from "../product/page";

export default function Chicken() {
  let [productData, updateProductData] = useState([]);
  let [productPage, updateProductPage] = useState(false);
  let [selectedMainItem, updateSelectedMainItem] = useState(0);
  const discription =
    "Chicken, a culinary staple, offers versatile options for meals. Whether grilled, roasted, or sautéed, its tender texture and savory taste make it a go-to ingredient, elevating dishes across various cuisines with delightful flavors and endless possibilities.";
  let [filterContainer, updateFilterContainer] = useState(true);
  function updateUpdateProductPage(value) {
    updateProductPage(false);
  }
  return (
    <>
      <main>
        {filterContainer ? (
          <FilterContainer totalItems={chickenTotalItems} />
        ) : (
          <FilterContainer totalItems={chickenTotalItems} />
        )}
        <div>
          {productPage ? (
            <Product
              productData={productData}
              discription={discription}
              updateProductPage={updateUpdateProductPage}
            />
          ) : (
            <ChickenMenuStructure
              totalItems={chickenTotalItems}
              allItems={chickenAllItems}
              main_items={chicken_main_items}
              banner_images={chickenBannerImages}
              updateProductData={updateProductData}
              updateProductPage={updateProductPage}
              selectedMainItem={selectedMainItem}
              updateSelectedMainItem={updateSelectedMainItem}
            />
          )}
        </div>
      </main>
    </>
  );
}
function FilterContainer({ totalItems }) {
  let leftItems = [
    "Delivery time",
    "Chicken type",
    "Bone type",
    "Cut type",
    "Best suited for",
    "pack Size",
  ];
  let rightItems = [
    ["Express", "Today", "Tomorrow"],
    ["Broiler", "Country", "Kadaknath"],
    ["Bone-in", "Boneless"],
    [
      "Whole & Curry Cut",
      "Wings & Offals",
      "Thigh & Drumstick",
      "Breast",
      "Cubes & Strips",
      "Mince",
      "Whole leg & Lollipop ",
    ],
    [
      "Grill",
      "Deep Fry",
      "Roast",
      "Stuffing",
      "Curry",
      "Biryani",
      "Bake",
      "Pan Fry",
    ],
    ["Large Pack", "Regular Pack", "Mini Pack"],
  ];
  let [selectedLeftItem, updateSelectedLeftItem] = useState(0);
  let [slectedRightItems, updateSelectedRightItems] = useState(rightItems[0]);
  let [selectedRightItem, updateSelectedRightItem] = useState([
    [false, false, false],
    [false, false, false],
    [false, false],
    [false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false],
    [false, false, false],
  ]);
  let [checkedItems, updateSelectedItems] = useState([
    [false, false, false],
    [false, false, false],
    [false, false],
    [false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false],
    [false, false, false],
  ]);
  let clearFilters = [
    [false, false, false],
    [false, false, false],
    [false, false],
    [false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false],
    [false, false, false],
  ];
  let [searchedItems, updateSearchedItems] = useState(totalItems);
  let [selectedWords, updateSelectedWords] = useState([[], [], [], [], [], []]);
  let words = selectedWords; 
  function searchForWord() {
    
    var array_1 = totalItems;
    let array_2 = [];
    let array_3 = [];
    selectedWords.map((a,ai)=>{
      a.map((b,bi)=>{
        totalItems.map((c,ci)=>{
          (c[1].toLowerCase()).includes(b.toLowerCase())?null:totalItems = totalItems.filter(x => x !== c);
        })
      })
    })
    console.log(totalItems)
    
  }
  // useEffect(()=>{
  //   console.log(selectedWords)
  // },[updateSelectedWords])

  return (
    <>
      <section className="bg-white w-[100vw] h-[50vh] fixed z-50  bottom-0 rounded-tl-3xl rounded-tr-3xl  ">
        <div>
          <div className="h-[7vh] w-full flex items-center border-b ">
            <h2 className="text-xl pl-6  font-bold">Filters</h2>
          </div>
          <div className="flex pt-3">
            <div className="flex flex-col text-xl h-[32vh] w-[50vw] border-r space-y-10 overflow-x-auto hide_scrollBar">
              {leftItems.map((item, index) => {
                return (
                  <div
                    className=" w-[47vw] flex items-center space-x-6"
                    onClick={() => {
                      updateSelectedLeftItem(index);
                      updateSelectedRightItems(rightItems[index]);
                    }}
                  >
                    <div
                      className={
                        selectedLeftItem === index
                          ? " bg-pink-600 h-[6vh] w-[1vh] rounded-tr-xl rounded-br-xl "
                          : " bg-white h-[0vh] w-[0vh] rounded-tr-xl rounded-br-xl "
                      }
                    ></div>
                    <label
                      className={
                        selectedLeftItem === index
                          ? "text-pink-600 font-bold text-sm"
                          : "text-black font-bold text-sm"
                      }
                    >
                      {item}
                    </label>
                  </div>
                );
              })}
            </div>
            <div className="w-[50vw] flex flex-col pl-6 h-[32vh] space-y-6 overflow-x-auto hide_scrollBar">
              {slectedRightItems.map((item, index) => {
                return (
                  <div className="flex space-x-4 ">
                    <input
                      onClick={() => {
                        let k = [];
                        checkedItems[selectedLeftItem][index]
                          ? ((checkedItems[selectedLeftItem][index] = false),
                            updateSelectedRightItem(checkedItems),
                            updateSelectedItems(checkedItems),
                            updateSelectedRightItems(
                              rightItems[selectedLeftItem]
                            ),
                            (k = selectedWords[selectedLeftItem].filter(
                              (w) => w !== item
                            )),
                            (words[selectedLeftItem] = k),
                            updateSelectedWords(words),
                            searchForWord())
                          : ((checkedItems[selectedLeftItem][index] = true),
                            updateSelectedRightItem(checkedItems),
                            updateSelectedItems(checkedItems),
                            updateSelectedRightItems(
                              rightItems[selectedLeftItem]
                            ),
                            words[selectedLeftItem].push(item),
                            updateSelectedWords(words),
                            searchForWord());
                      }}
                      id="checkedBox"
                      className=" accent-white"
                      type="checkbox"
                      checked={
                        selectedRightItem[selectedLeftItem][index] === true
                          ? true
                          : false
                      }
                    />
                    <label className=" text-lg ">{item}</label>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex items-center w-[100vw] justify-evenly mb-2 h-fit py-2">
            <div
              onClick={() => {
                updateSelectedRightItem(clearFilters);
              }}
              className=" flex items-center "
            >
              <a className="rounded-xl border w-fit h-fit px-4 py-2 bg-zinc-100 text-pink-600">
                Clear Filters
              </a>
            </div>
            <div className=" flex items-center ">
              <a className="rounded-lg text-white border w-fit h-fit px-4 py-2 bg-pink-600">
                {"View " + searchedItems.length + " Items"}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function ChickenMenuStructure({
  totalItems,
  allItems,
  updateProductData,
  main_items,
  banner_images,
  updateProductPage,
  selectedMainItem,
  updateSelectedMainItem,
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
                <Link href={"/"}>
                  <label className="text-2xl ">
                    <MdOutlineKeyboardBackspace />
                  </label>
                </Link>
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
                <MenuMainItems index={0} />
              </div>
            ) : null}

            <div>
              <Banner banner_images={banner_images} />
            </div>
          </div>

          <NavMainItems
            main_items={main_items}
            selectedMainItem={updateSelectedIndex}
          />
        </div>
        <div>
          {selectedMainItem == 0 ? (
            <MenuSuBItems
              updateProductData={updateProductData}
              allItems={totalItems}
              updateProductPage={updateProductPage}
            />
          ) : selectedMainItem == 1 ? (
            <MenuSuBItems
              updateProductData={updateProductData}
              allItems={allItems[0]}
              updateProductPage={updateProductPage}
            />
          ) : selectedMainItem == 2 ? (
            <MenuSuBItems
              updateProductData={updateProductData}
              allItems={allItems[1]}
              updateProductPage={updateProductPage}
            />
          ) : selectedMainItem == 3 ? (
            <MenuSuBItems
              updateProductData={updateProductData}
              allItems={allItems[2]}
              updateProductPage={updateProductPage}
            />
          ) : selectedMainItem == 4 ? (
            <MenuSuBItems
              updateProductData={updateProductData}
              allItems={allItems[3]}
              updateProductPage={updateProductPage}
            />
          ) : selectedMainItem == 5 ? (
            <MenuSuBItems
              updateProductData={updateProductData}
              allItems={allItems[4]}
              updateProductPage={updateProductPage}
            />
          ) : selectedMainItem == 6 ? (
            <MenuSuBItems
              updateProductData={updateProductData}
              allItems={allItems[5]}
              updateProductPage={updateProductPage}
            />
          ) : (
            <MenuSuBItems
              updateProductData={updateProductData}
              allItems={allItems[6]}
              updateProductPage={updateProductPage}
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
function Banner({ banner_images }) {
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

function NavMainItems({ selectedMainItem, main_items }) {
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

function MenuSuBItems({ allItems, updateProductData, updateProductPage }) {
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
                updateProductPage={updateProductPage}
              />
            );
          })}
        </div>
      </section>
    </>
  );
}
function ProductShowCase({
  productData,
  updateProductData,
  updateProductPage,
}) {
  const settings: {} = {
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
    arrows: false,
    dots: false,
  };
  return (
    <>
      <article
        onClick={() => {
          updateProductData(productData);
          updateProductPage(true);
        }}
        className="flex flex-col h-fit w-full rounded-xl shadow-lg py-2 "
      >
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
