import styles from '../styles/Testimonial.module.css'
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import ephraim from "../public/ephraim.jpg"
import iku from "../public/iku.png"
import sada from "../public/sada.jpg"
import Edna from "../public/Edna.jpeg"
import Image from 'next/image'
import {FaQuoteLeft, FaQuoteRight} from "react-icons/fa";



const Testimonials = () => {
  return (
    <div className={styles.container}>
        <h1><span className={styles.he}>Words</span> from My Clients...</h1>
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
			     <Image src={sada}width={250} objectFit='contain' height={200} classname={styles.image}/>
			     <h2 classname={styles.name}> Sada Adam</h2>
			     <h5 classname={styles.title}>CEO , Sada Wigs Point </h5>
			     <p classname={styles.description}><span><FaQuoteLeft/></span>Handled my work with proffesionalism , we collaborated remotely very well and i was satisfied with may wigstore website. <span><FaQuoteRight/></span></p>
		    </div>
		</section>
     </SplideSlide>
     <SplideSlide>
    <section classname={styles.containerr}>
		     <div classname={styles.author}>
			     <Image src={Edna}width={250} objectFit='contain' height={200} classname={styles.image}/>
			     <h2 classname={styles.name}> Edna Ngowi</h2>
			     <h5 classname={styles.title}> Bsn , RN </h5>
			     <p classname={styles.description}><span><FaQuoteLeft/></span>I wanted a blog , i wanted a designer to design my life style blog, so i reached out to Ephraim . i love the design he came up with .. <span><FaQuoteRight/></span></p>
		    </div>
		</section>
     </SplideSlide>
     <SplideSlide>
    <section classname={styles.containerr}>
		     <div classname={styles.author}>
			     <Image src={iku}width={250} objectFit='contain' height={200} classname={styles.image}/>
			     <h2 classname={styles.name}> Ikundwial Mwambona</h2>
			     <h5 classname={styles.title}> Co-Founder , Designable</h5>
			     <p classname={styles.description}><span><FaQuoteLeft/></span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
			     tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
			     quis nostrud exercitation ullamco laboris nisi ut aliquip. <span><FaQuoteRight/></span></p>
		    </div>
		</section>
     </SplideSlide>
     <SplideSlide>
    <section classname={styles.containerr}>
		     <div classname={styles.author}>
			     <Image src={ephraim}width={250} objectFit='contain' height={200} classname={styles.image}/>
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
			     <Image src={ephraim}width={250} objectFit='contain' height={200} classname={styles.image}/>
			     <h2 classname={styles.name}> Ephraim Ngowi</h2>
			     <h5 classname={styles.title}>Co-Founder , Designable</h5>
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