import styles from '../styles/About.module.css'
import back from '../public/back.jpg'
import Image from 'next/image';
import {FaGithub, FaLinkedin,FaMailBulk, FaPhone, FaTwitterSquare} from "react-icons/fa";
import Link from 'next/link';
import {motion} from 'framer-motion'

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
            <motion.div className={styles.abuttons} initial={{opacity : 0, translateY : 150}}
                    animate={{translateX : 0}}
                    transition={{duration: 1, 
                      transition: {
                        delayChildren: 0.5
                      }}}
                    whileInView={{opacity:1, translateY : 0 }}
                    >
            <Link href={'https://www.linkedin.com/in/ephraim-ngowi-730701190'}>
                <motion.div className={styles.servicecard}
                    whileHover ={{ scale: 1.06}}
                    whileTap ={{scale: 0.9}} >
                <div className={styles.servicecardimage}>
                   <FaLinkedin/>  
                </div>
                <div className={styles.service}>
                    <h1>LinkedIn</h1>
                    <p>Ephraim Ngowi</p>
                </div>
            </motion.div>
            </Link>
            <Link href={'mailto:ephraimdevelops@gmail.com'}><motion.div className={styles.servicecard}
                whileHover ={{ scale: 1.06}}
                whileTap ={{scale: 0.9}}>
                <div className={styles.servicecardimage}>
                   <FaMailBulk/>  
                </div>
                <div className={styles.service}>
                    <h1>Email Me</h1>
                    <p>ephraimdevelops@gmail.com</p>
                </div>
            </motion.div>
            </Link>
            <Link href={'tel:+255769517032'}>
                <motion.div className={styles.servicecard}
                    whileHover ={{ scale: 1.06}}
                    whileTap ={{scale: 0.9}}>
                <div className={styles.servicecardimage}>
                <FaPhone/> 
                </div>
                <div className={styles.service}>
                    <h1>Call Me</h1>
                    <p>+255-769-517-032</p>
                </div>
            </motion.div>
            </Link> 
           {/* <Link href={'https://twitter.com/ephraim_ngowi?t=HlmXiz4Sd-U4ZSVmlFljsA&s=09'}>  */}
           <motion.div className={styles.servicecard}
               whileHover ={{ scale: 1.06}}
               whileTap ={{scale: 0.9}}>
                <div className={styles.servicecardimage}>
                   <FaGithub/>  
                </div>
                <div className={styles.service}>
                    <h1>Github</h1>
                    <p>@ ephraimdevelops</p>
                </div>
            </motion.div>
            {/* </Link> */}

            </motion.div>

            </div>
           
        </div>
    </div>
  );
}

export default About