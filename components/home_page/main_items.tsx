import Link from "next/link"

export default function MainItems({updateItem}){
    let items= [
       ["Today's Deals","main_items/todayDeals.png","today-deals"],
        ["chicken","main_items/chicken.png","chicken"],
        ["Fish ","main_items/fish.png","fish"],
        ["Mutton","main_items/mutton.png","mutton"],
        ["Prawns","main_items/prawns.png","prawans"],
        ["Kebab","main_items/kebab.png","kebab"],
        ["Coldcuts","main_items/coldCuts.png",'cold-cuts'],
        ["Eggs","main_items/eggs.png",'eggs']        
    ]
    return(
        <>
            <div>
                <div className="grid grid-cols-4 pl-4 pr-4">
                    {
                        items. map((item,index) =>{
                            return <Link href={item[2]}>
                            <div key={item[0]} className="text-center  flex flex-col justify-start items-center ">
                                <img onClick={()=>{
                                    
                                    updateItem(index)

                                }} className=" w-16 text-center  " src={item[1]}/>
                                <label className="p-2 text-sm text-center ">{item[0]}</label>
                                </div>
                            </Link>
                            
                        })   
                    }
                </div>

            </div>
        </>
    )
}