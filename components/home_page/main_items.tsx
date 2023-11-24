export default function MainItems({updateItem}){
    let items= [
       ["Today's Deals","main_items/todayDeals.png"],
        ["chicken","main_items/chicken.png"],
        ["Fish & Seafood","main_items/fish.png"],
        ["Mutton","main_items/mutton.png"],
        ["Prawns","main_items/prawns.png"],
        ["Kebab","main_items/kebab.png"],
        ["Coldcuts","main_items/coldCuts.png"],
        ["Eggs","main_items/eggs.png"]        
    ]
    return(
        <>
            <div>
                <div className="grid grid-cols-4 pl-4 pr-4">
                    {
                        items. map((item,index) =>{
                            return <div key={item[0]} className="text-center  flex flex-col justify-start items-center ">
                                <img onClick={()=>{
                                    updateItem(index)

                                }} className=" w-16 text-center  " src={item[1]}/>
                                <label className="p-2 text-sm text-center ">{item[0]}</label>
                                </div>
                            
                        })   
                    }
                </div>

            </div>
        </>
    )
}