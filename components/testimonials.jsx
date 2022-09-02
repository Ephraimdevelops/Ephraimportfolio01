import styles from '../styles/Testimonial.module.css'
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import back from "../public/back.jpg"
import Image from 'next/image'
import {FaQuoteLeft, FaQuoteRight} from "react-icons/fa";



const Testimonials = () => {
  return (
    <div className={styles.container}>
        <h1>Words from My Clients...</h1>
        <p className={styles.titledesc}>I build with my customers , here are some words they say about my work and experince working with me...</p>
        <div className={styles.reviews}>
        <div className={styles.slidess}>
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
    <section classname={styles.containerr}>
		     <div classname={styles.author}>
			     <Image src={back} width={140} height={140} classname={styles.image}/>
			     <h2 classname={styles.name}> Ephraim Ngowi</h2>
			     <h5 classname={styles.title}> Software Developer</h5>
			     <p classname={styles.description}><span><FaQuoteLeft/></span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
			     tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
			     quis nostrud exercitation ullamco laboris nisi ut aliquip. <span><FaQuoteRight/></span></p>
		    </div>
		</section>
     </SplideSlide>
     <SplideSlide>
    <section classname={styles.containerr}>
		     <div classname={styles.author}>
			     <Image src={back} width={140} height={140} classname={styles.image}/>
			     <h2 classname={styles.name}> Ephraim Ngowi</h2>
			     <h5 classname={styles.title}> Software Developer</h5>
			     <p classname={styles.description}><span><FaQuoteLeft/></span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
			     tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
			     quis nostrud exercitation ullamco laboris nisi ut aliquip. <span><FaQuoteRight/></span></p>
		    </div>
		</section>
     </SplideSlide>
     <SplideSlide>
    <section classname={styles.containerr}>
		     <div classname={styles.author}>
			     <Image src={back} width={140} height={140} classname={styles.image}/>
			     <h2 classname={styles.name}> Ephraim Ngowi</h2>
			     <h5 classname={styles.title}> Software Developer</h5>
			     <p classname={styles.description}><span><FaQuoteLeft/></span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
			     tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
			     quis nostrud exercitation ullamco laboris nisi ut aliquip. <span><FaQuoteRight/></span></p>
		    </div>
		</section>
     </SplideSlide>
     <SplideSlide>
    <section classname={styles.containerr}>
		     <div classname={styles.author}>
			     <Image src={back} width={140} height={140} classname={styles.image}/>
			     <h2 classname={styles.name}> Ephraim Ngowi</h2>
			     <h5 classname={styles.title}> Software Developer</h5>
			     <p classname={styles.description}><span><FaQuoteLeft/></span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
			     tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
			     quis nostrud exercitation ullamco laboris nisi ut aliquip. <span><FaQuoteRight/></span></p>
		    </div>
		</section>
     </SplideSlide>
     <SplideSlide>
    <section classname={styles.containerr}>
		     <div classname={styles.author}>
			     <Image src={back} width={140} height={140} classname={styles.image}/>
			     <h2 classname={styles.name}> Ephraim Ngowi</h2>
			     <h5 classname={styles.title}> Software Developer</h5>
			     <p classname={styles.description}><span><FaQuoteLeft/></span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
			     tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
			     quis nostrud exercitation ullamco laboris nisi ut aliquip. <span><FaQuoteRight/></span></p>
		    </div>
		</section>
     </SplideSlide>
    
     </Splide>
     </div>
     </div>
    </div>
  );
};

export default Testimonials;