import styles from '../styles/Blogcard.module.css'
import Image from 'next/image'
import blogo1 from '../public/blogo1.jpg'
import blogo2 from '../public/blogo2.jpg'
import blogo3 from '../public/blogo3.jpg'

const Blogcard = () => {
  return (
    <div className={styles.container}>
    <div className={styles.cardcontainer}>     
        <div className={styles.imagecontainer}><Image layout='fill' src={blogo1} className={styles.coverImage}></Image></div>
        <h1 className={styles.title}>Best VPNs in Tanzania 2022</h1>
        <p className={styles.category}>TECH</p>
    </div>
    <div className={styles.cardcontainer}>     
    <div className={styles.imagecontainer}><Image layout='fill' src={blogo2} className={styles.coverImage}></Image></div>
        <h1 className={styles.title}>Digital skills That actually pays in Tanzania 2022</h1>
        <p className={styles.category}>TECH</p>
    </div>
    <div className={styles.cardcontainer}>     
    <div className={styles.imagecontainer}>
      <Image layout='fill' src={blogo3} className={styles.coverImage}></Image>
    </div>
      <h1 className={styles.title}>7 mobile apps for content creators </h1>
      <p className={styles.category}>TECH</p>
    </div>
    </div>
  )
}

export default Blogcard