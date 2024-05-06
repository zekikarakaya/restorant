import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import aboutimg from "../img/about-img.jpg";
import aboutchef1 from "../img/about-chef1.jpg";
import aboutchef2 from "../img/about-chef2.jpg";
import contactimg from "../img/contact-img.jpg";
const ImageGallery = () => {
      var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed:3000,
        cssEase:"linear",
      };
  return (
       <div className='py-5 mb-6'>
        <div className='container  h-[200px] md:h-full '>
          <Slider {...settings}>
      <div>
      <img src={aboutimg} alt='' className='h-[200px] md:h-[600px] w-full object-center'/>
      </div>
      <div>
      <img src={aboutchef1} alt='' className='h-[200px] md:h-[600px] w-full object-cover'/>
      </div>
      <div>
      <img src={aboutchef2} alt='' className='h-[200px] md:h-[600px] w-full object-cover'/>
      </div>
      <div>
      <img src={contactimg} alt='' className='h-[200px] md:h-[600px] w-full '/>
      </div>
    </Slider>
        </div>

        </div>
  )
}

export default ImageGallery