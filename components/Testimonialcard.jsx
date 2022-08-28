import React from 'react'
import styles from '../styles/Testcard.module.css'
import Image from 'next/image'
import back from "../public/back.jpg"
import {FaQuoteLeft, FaQuoteRight} from "react-icons/fa";

const Testimonialcard = () => {
  return (
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
  )
}

export default Testimonialcard