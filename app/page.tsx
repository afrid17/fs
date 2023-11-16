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
              <h2 className="font-bold text-lg">Shop By Categories</h2>
              <h4 className="text-lightGray text-sm">
                Freshest Meats and Much More!
              </h4>
            </div>
            <div>
              <MainItems />
            </div>
            <div className="p-6">
              <h2 className="font-bold text-lg">Combos For You</h2>
              <h4 className="text-lightGray text-sm">
                Savour The Savings!
              </h4>
            </div>
            <Combos/>
          </div>
        </div>
      </main>
    </>
  );
}
