"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function Dot(){
  return (
    <>
      <a className="fixed w-[1vh] rounded-full h-[1vh] bg-lightGray ">{" "} </a>
    </>
  )
}
export default function Banner() {
  const settings: {} = {
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    arrows:false,
    autoplay:true,
    autoplaySpeed:3000,
    dots:true,
    
    

  };
  let banner_images = [
    "items/chicken/banners/chicken_slide1.webp",
    "items/chicken/banners/chicken_slide2.webp",
    "items/chicken/banners/chicken_slide3.webp",
    "items/chicken/banners/chicken_slide4.webp",
  ]


  return (
    <>
      <article className="pt-6 flex justify-center items-center">
        <div className=" w-[90vw] rounded-xl h-[10vh] ">
          <Slider {...settings} className="flex">
            {
                banner_images.map(item=>{
                    return(
                        <div key={item}>
                            <embed src={item} className=" w-[90vw] h-[10vh] object-fill rounded-xl " />
                        </div>
                    )
                })
            }
          </Slider>
        </div>
      </article>
    </>
  );
}
