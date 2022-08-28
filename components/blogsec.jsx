import { FaArrowRight } from 'react-icons/fa'
import styles from '../styles/Blogsec.module.css'
import Blogcard from './blogcard'


const Blogsec = () => {
  return (
    <div className={styles.blogsec}>
        <div className={styles.desc}>
            <h1>Here's my Blog...</h1>
            <p>On my freetime i write on things i find interesting and share them through this <span className={styles.cta}>platform</span> i designed. </p>
        </div>
        <div className={styles.blogcards}>
            <Blogcard/>
        </div>
        
    </div>
  )
}

export default Blogsec