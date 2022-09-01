import styles from '../styles/Blogcard.module.css'
import YoutubeCard from './YoutubeCard'

const Blogcard = () => {
  return (
    <div className={styles.container}>
    <YoutubeCard/>
    <YoutubeCard/>
    <YoutubeCard/>
    </div>
  )
}

export default Blogcard