import styles from '../styles/About.module.css'
import back from '../public/back.jpg'
import Image from 'next/image';
import {FaLinkedin,FaMailBulk, FaPhone, FaTwitterSquare} from "react-icons/fa";
import Link from 'next/link';

const About = () => {
  return (
    <div className={styles.about}>
        <div className={styles.aleft}>
            <Image src={back} alt='' className={styles.aimage}/>
        </div>
        <div className={styles.aright}>
            <div className={styles.arightwrapper}>
                 <div className={styles.atitle}>
                      <h1>About <span>Me</span></h1>
                 </div>
            <p className={styles.adesc}>
                Hello, My name is Ephraim Ngowi . I am a freelance software Developer
                based in Dar es salaam, Tanzania. I started my coding journey
                back in 2020, now i specialize in making stylish, useful and affordable
                website for small and large companies and businesses.
            </p>
            <div className={styles.aparticulars}>
               
            </div>
            <div className={styles.abuttons}>
            <Link href={'https://www.linkedin.com/in/ephraim-ngowi-730701190'}>
                <div className={styles.servicecard}>
                <div className={styles.servicecardimage}>
                   <FaLinkedin/>  
                </div>
                <div className={styles.service}>
                    <h1>LinkedIn</h1>
                    <p>Ephraim Ngowi</p>
                </div>
            </div>
            </Link>
            <Link href={'mailto:ephraimdevelops@gmail.com'}><div className={styles.servicecard}>
                <div className={styles.servicecardimage}>
                   <FaMailBulk/>  
                </div>
                <div className={styles.service}>
                    <h1>Email Me</h1>
                    <p>ephraimdevelops@gmail.com</p>
                </div>
            </div>
            </Link>
            <Link href={'tel:+255769517032'}>
                <div className={styles.servicecard}>
                <div className={styles.servicecardimage}>
                <FaPhone/> 
                </div>
                <div className={styles.service}>
                    <h1>Call Me</h1>
                    <p>+255-769-517-032</p>
                </div>
            </div>
            </Link> 
           {/* <Link href={'https://twitter.com/ephraim_ngowi?t=HlmXiz4Sd-U4ZSVmlFljsA&s=09'}>  */}
           <div className={styles.servicecard}>
                <div className={styles.servicecardimage}>
                   <FaTwitterSquare/>  
                </div>
                <div className={styles.service}>
                    <h1>Tweet</h1>
                    <p>@Ngowi_Ephraim</p>
                </div>
            </div>
            {/* </Link> */}
           
                
            </div>

            </div>
           
        </div>
    </div>
  );
}

export default About