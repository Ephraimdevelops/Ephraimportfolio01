import styles from "../styles/YoutubeCard.module.css";
import Link from "next/link";
import blogo1 from '../public/blogo1.jpg'
import Image from "next/image";





function YoutubeCard() {
  return (
    <div className={styles.containerrr}>

    <div className={styles.kadicontainer}>
    <Link href={`/`} passHref>
        <div className={styles.imagewrapper}>
            <Image className={styles.imagee} layout='fill' src={blogo1} alt='name'></Image>
        </div>
    </Link>
        <div className={styles.descriptions}>
            <p className={styles.category}>Technology</p>
            <p className={styles.title}>Best VPNs in Tanzania 2022</p>
            <p className={styles.date}>August, 31 2022</p>
        </div>
    </div>
    </div>
  );
}

{
  /* <div dangerouslySetInnerHTML={{ __html: content.html }}></div> */
}
export default YoutubeCard;
