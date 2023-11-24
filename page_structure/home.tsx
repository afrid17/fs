"use client"
import Store199 from "@/components/home_page/199store";
import Combos from "@/components/home_page/combos";
import FreshAtFreshSlice from "@/components/home_page/freshAtFreshSlice";
import MainItems from "@/components/home_page/main_items";
import { useState } from "react";
export default function HomeStructure({updatePage,updateProduct}) {
  let [selectedItem,updateSelectedItem] = useState(0)
  function updateItem(index){
    updateSelectedItem(index)
    updateProduct(index)
    updatePage(1)
  }
  return (
    <main>
      <div>
        <div>
          {/**
           *
           */}
          <div className="p-6">
            <h2 className="font-bold text-xl">Shop By Categories</h2>
            <h4 className="text-lightGray text-md">
              Freshest Meats and Much More!
            </h4>
          </div>
          <div>
            <MainItems updateItem={updateItem}/>
          </div>
          <div className="p-6">
            <h2 className="font-bold text-xl">Combos For You</h2>
            <h4 className="text-lightGray text-md">Savour The Savings!</h4>
          </div>

          <div>
            <Combos />
          </div>
          <div className="p-6">
            <h2 className="font-bold text-xl">Under Rs. 199 Store</h2>
            <h4 className="text-lightGray text-md">
              Stay Meativated On A Budget!
            </h4>
          </div>
          <div>
            <Store199 />
          </div>
          <div className="p-6">
            <h2 className="font-bold text-xl">Fresh at FreshSlice!</h2>
            <h4 className="text-lightGray text-md">
              Handpicked Assortment Just For You
            </h4>
          </div>
          <div>
            <FreshAtFreshSlice />
          </div>
          <div className=" flex flex-col bg-pinkShade  space-y-8 pl-6 pr-4 mt-2 pt-10 ">
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
        </div>
      </div>
    </main>
  );
}
