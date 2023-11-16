import Store199 from "@/components/home_page/199store";
import Combos from "@/components/home_page/combos";
import MainItems from "@/components/home_page/main_items";

export default function Home() {
  return (
    <>
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
              <MainItems />
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
            
          </div>
        </div>
      </main>
    </>
  );
}
