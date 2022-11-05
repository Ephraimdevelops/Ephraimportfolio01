import styles from '../styles/Intro.module.css'
import backkk from "../public/backkk.jpg"
import Image from 'next/image';
import {FaWhatsapp} from "react-icons/fa";
import Link from 'next/link';

const Intro = () => {
  return (
    <div className={styles.intro}>
      <div className={styles.ileft}>
        <div className={styles.ileftwrapper}>
          <div className={styles.iright}>
          <div className={styles.ibg}></div>
          <Image src={backkk}  alt='ephraimdeveloper' width={175} height={175} objectPosition="center" className={styles.iimg}/>
          </div>
          <h2 className={styles.iintro}>Hello, My name is</h2>
          <h1 className={styles.iname}>Ephraim Ngowi</h1>
          <div className={styles.ititle}>
            <div className={styles.ititlewrapper}>
              <div className={styles.ititleitem}>Web Developer</div>
              <div className={styles.ititleitem}>Web Designer UI/UX</div>
              <div className={styles.ititleitem}>SEO Expert</div>
              <div className={styles.ititleitem}>Video Editor</div>
              <div className={styles.ititleitem}>Content Creator</div>
            </div>
          </div>
          <div className={styles.idesc}>
            I design and develop services for customers of all sizes,
            specializing in creating stylish, modern websites, web services and stores
            online stores.
          </div>
          <Link href={'https://wa.me/255769517032' }><button className={styles.introbutton}><FaWhatsapp/> What's up</button></Link>
        </div>
      </div>
      
    </div>
  );
}

export default Intro