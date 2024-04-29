import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
        <div className='container px-16 h-[200px] md:h-full '>
          <Slider {...settings}>
      <div>
      <img src='img/about-img.jpg' alt='' className='h-[200px] md:h-[600px] w-full object-center'/>
      </div>
      <div>
      <img src='img/about-chef1.jpg' alt='' className='h-[200px] md:h-[600px] w-full object-cover'/>
      </div>
      <div>
      <img src='img/about-chef2.jpg' alt='' className='h-[200px] md:h-[600px] w-full object-cover'/>
      </div>
      <div>
      <img src='img/contact-img.jpg' alt='' className='h-[200px] md:h-[600px] w-full '/>
      </div>
    </Slider>
        </div>

        </div>
  )
}

export default ImageGallery