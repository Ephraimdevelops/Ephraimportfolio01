import styles from '../styles/Testimonial.module.css'
import React from 'react';
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import Testimonialcard from './Testimonialcard';



const Testimonials = () => {
  return (
    <div className={styles.container}>
        <h1>Words from My Clients...</h1>
        <p className={styles.titledesc}>I build with my customers , here are some words they say about my work and experince working with me...</p>
        <div className={styles.reviews}>
        <Splide
        options={{
        rewind: true,
        perPage: 1,
        drag: true,
        pagination:true,
        perMove: 1,
        autoplay: true,
        interval: 2000,
        arrows: false,
        gap: 0,
        lazyLoad: "nearby",
      }}
      onMoved={(splide, newIndex) => {
        console.log("moved", newIndex);
      }}
    >
    <SplideSlide>
        <Testimonialcard/>
     </SplideSlide>
     <SplideSlide>
        <Testimonialcard/>
     </SplideSlide>
     <SplideSlide>
        <Testimonialcard/>
     </SplideSlide>
     <SplideSlide>
        <Testimonialcard/>
     </SplideSlide>
     </Splide>
     </div>
    </div>
  );
};

export default Testimonials;