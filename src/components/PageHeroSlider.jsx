'use client';
import React from 'react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '@/styles/hero-slider.sass';
import PageHeroSlide from './PageHeroSlide';

export default function PageHeroSlider({ results }) {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation={true}
      className="hero-slider"
      spaceBetween={0}
      slidesPerView={1}
      loop={true}
      autoplay={{ delay: 50000, disableOnInteraction: false }}
      speed={1000}
    >
      {results.map((el) => (
        <SwiperSlide key={el.id} className="hero-slide">
          <PageHeroSlide data={el} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
