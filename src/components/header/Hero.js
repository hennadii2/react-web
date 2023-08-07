import bg2 from 'assets/img/generic/bg-2.jpg';
import React from 'react';
import { Image } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Hero = () => {
  const { t } = useTranslation();
  console.log(t('welcome'));
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const images = [
    {
      src: bg2
    },
    {
      src: bg2
    },
    {
      src: bg2
    }
  ];

  return (
    <div className="position-relative h-sm-auto overflow-hidden">
      <Slider {...sliderSettings} className="slick-slider-arrow-inner">
        {images.map((img, index) => (
          <Image fluid src={img['src']} alt="" key={index} />
        ))}
      </Slider>
    </div>
  );
};

export default Hero;
