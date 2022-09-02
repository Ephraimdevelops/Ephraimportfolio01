import styles from '../styles/Services.module.css'
import contentwritting from "../public/contentwritting.png"
import webdev from "../public/webdev.png"
import webdesign from "../public/webdesign.png"
import bullhorn from "../public/bullhorn.png"
import htm from "../public/htm.png"
import csss from "../public/csss.png"
import js from "../public/js.png"
import react from "../public/react.png"
import nodejs from "../public/nodejs.png"
import Image from 'next/dist/client/image'

const Services = () => {
  return (
    <div className={styles.servicesskills}> 
         <div className={styles.skills}>
          <h1> Services I provide..</h1>
          <p>You need an expert in these skills .. You are in Luck today I'm your guy..</p>
        </div>

        <div className={styles.services}>
        <div className={styles.servicecard}>
                <div><Image width={120} height={120} objectFit='cover'  src={webdesign} alt='' className={styles.cardicon} /></div>
                <h2>WEBSITE DESIGNING</h2>
                <p>Colourful, attractive and modern styled websites to convert visitors to customers</p>
            </div>
            <div className={styles.servicecard}>
                <div className={styles.cardicon}><Image width={120} height={120} objectFit='cover'  src={webdev} alt='' className={styles.cardicon} /></div>
                <h2>WEB DEVELOPMENT</h2>
                <p>Functional and and reliable websites, 24/7 online presence. </p>
            </div>
          
            <div className={styles.servicecard}>
            <div><Image width={120} height={120} objectFit='cover'  src={bullhorn} alt='' className={styles.cardicon} /></div>            
                <h2>DIGITAL MARKETING</h2>
                <p>SEO optimized websites, you'll rank higher on GOOGLE searches than your competitiors
                  
                </p>
            </div>
            <div className={styles.servicecard}>
            <div><Image width={120} height={120} objectFit='cover'  src={contentwritting} alt='' className={styles.cardicon}/></div>
                <h2>CONTENT WRITTING</h2>
                <p>written and already optimized for social media algorithms . YouTube, Tiktok facebook etc and GOOGLE SERPs</p>
            </div>
        </div>
        <div className={styles.tools}>
          <div className={styles.language}>
            <Image width={70} height={70} objectFit='cover'  src={htm} alt='' className={styles.languageicon} />
            <Image width={70} height={70} objectFit='cover'  src={csss} alt='' className={styles.languageicon}/>
            <Image width={70} height={70} objectFit='cover'  src={js} alt='' className={styles.languageicon} />
            <Image width={70} height={70} objectFit='cover'  src={nodejs} alt='' className={styles.languageicon} />
            <Image width={70} height={70} objectFit='cover'  src={react} alt='' className={styles.languageicon}/>
          </div>
        </div>
    </div>
    
  )
}

export default Services