import styles from '../styles/Blogcard.module.css'
import YoutubeCard from './YoutubeCard'
import Link from 'next/link'
import thumb1 from '../public/thumb1.png'
import thumb2 from '../public/thumb2.png'
import thumb3 from '../public/thumb3.png'
import Image from 'next/image'

const Blogcard = () => {
  return (
    <div className={styles.container}>
    <div className={styles.containerrr}>

        <div className={styles.kadicontainer}>
<Link href={`/`} passHref>
    <div className={styles.imagewrapper}>
        <Image className={styles.imagee} layout='fill' objectPosition="center" objectFit= "cover"  src={thumb1} alt='name'></Image>
    </div>
</Link>
    <div className={styles.descriptions}>
        <p className={styles.category}>Technology</p>
        <p className={styles.title}>Best Video Editing Softwares & Apps</p>
        <p className={styles.date}>October, 11 2022</p>
    </div>
        </div>
    </div>

    <div className={styles.containerrr}>

<div className={styles.kadicontainer}>
<Link href={`/`} passHref>
    <div className={styles.imagewrapper}>
        <Image className={styles.imagee} layout='fill' objectPosition="center" objectFit= "cover"  src={thumb2} alt='name'></Image>
    </div>
</Link>
    <div className={styles.descriptions}>
        <p className={styles.category}>Technology</p>
        <p className={styles.title}>Best VPNs in Tanzania 2022</p>
        <p className={styles.date}>August, 31 2022</p>
    </div>
</div>
    </div>
    <div className={styles.containerrr}>

<div className={styles.kadicontainer}>
<Link href={`/`} passHref>
    <div className={styles.imagewrapper}>
        <Image className={styles.imagee} layout='fill' src={thumb3} objectPosition="center" objectFit= "cover" alt='name'></Image>
    </div>
</Link>
    <div className={styles.descriptions}>
        <p className={styles.category}>Technology</p>
        <p className={styles.title}>Je unazijua hizi website ?</p>
        <p className={styles.date}>September, 31 2022</p>
    </div>
</div>
    </div>
   
    </div>
   
  )
}


export default Blogcard;