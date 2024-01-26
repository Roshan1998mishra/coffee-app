import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";
import carousel from "@/public/Images/carousel.jpg";
import carousell from "@/public/Images/carousell.jpg"

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>
        
        <Slider {...settings}> 
          <div>
            <Image className="w-full banner" src={carousel} alt="carousel"></Image>
          </div>
          <div>
            <Image className="w-full banner" src={carousell} alt="carousell"></Image>
         </div>
          <div>
        <Image className="w-full banner" src={carousel} alt="carousel"></Image>
        </div>
        </Slider>
      </div>
    );
  }
}