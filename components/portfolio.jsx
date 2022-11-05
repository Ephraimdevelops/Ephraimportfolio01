import styles from '../styles/Portfolio.module.css'
import Image from 'next/image';
import web from '../public/web.jpg'


const Portfolio = () => {
  return (
    <div className={styles.p1}>
        <div className={styles.p1texts}>
            <h1 className={styles.p1title}>Creative Design , It's Ephraim</h1>
            <p className={styles.p1desc}>
                 I have been in the game for quite sometime , check out my portfolio
                 .Clients i have helped bring their creative ideas online..
            </p>
        </div>
        <div className={styles.p1list}>
            <div className={styles.p}>
                <div className={styles.pbrowser}>
                    <div className={styles.pcircle}></div>
                    <div className={styles.pcircle}></div>
                    <div className={styles.pcircle}></div>
               </div>
               <img layout='fill' src={web} alt='' className={styles.pimg} />
            </div>
            <div className={styles.p}>
                <div className={styles.pbrowser}>
                    <div className={styles.pcircle}></div>
                    <div className={styles.pcircle}></div>
                    <div className={styles.pcircle}></div>
               </div>
               <img layout='fill' src={web} alt='' className={styles.pimg} />
            </div>
            <div className={styles.p}>
                <div className={styles.pbrowser}>
                    <div className={styles.pcircle}></div>
                    <div className={styles.pcircle}></div>
                    <div className={styles.pcircle}></div>
               </div>
               <img layout='fill' src={web} alt='' className={styles.pimg} />
            </div>
            <div className={styles.p}>
                <div className={styles.pbrowser}>
                    <div className={styles.pcircle}></div>
                    <div className={styles.pcircle}></div>
                    <div className={styles.pcircle}></div>
               </div>
               <img layout='fill' src={web} alt='' className={styles.pimg} />
            </div>
            <div className={styles.p}>
                <div className={styles.pbrowser}>
                    <div className={styles.pcircle}></div>
                    <div className={styles.pcircle}></div>
                    <div className={styles.pcircle}></div>
               </div>
               <img layout='fill' src={web} alt='' className={styles.pimg} />
            </div>
            <div className={styles.p}>
                <div className={styles.pbrowser}>
                    <div className={styles.pcircle}></div>
                    <div className={styles.pcircle}></div>
                    <div className={styles.pcircle}></div>
               </div>
               <img layout='fill' src={web} alt='' className={styles.pimg} />
            </div>
        
        </div>
    </div>
  );
};

export default Portfolio;