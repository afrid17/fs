export default function MenuMainItems() {
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