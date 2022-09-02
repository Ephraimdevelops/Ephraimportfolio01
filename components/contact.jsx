import React from 'react'
import styles from '../styles/Contact.module.css'
import {FaMailBulk, FaPhone, FaPeriscope} from "react-icons/fa";

const Contact = () => {
  return (
    <div className={styles.contactwrapper}>
        <div className={styles.cleft}>
           
            <div className={styles.leftdesc}>
                <h1>Let's Discuss Your Project</h1>
            <div className={styles.abuttons}>
            <div className={styles.servicecard}>
                <div className={styles.servicecardimage}>
                <FaPhone/> 
                </div>
                <div className={styles.service}>
                    <h1>Call Me</h1>
                    <p>+255-769-517-032</p>
                </div>
            </div>        
            <div className={styles.servicecard}>
                <div className={styles.servicecardimage}>
                   <FaMailBulk/>  
                </div>
                <div className={styles.service}>
                    <h1>Email Me</h1>
                    <p>ephraimdevelops@gmail</p>
                </div>
            </div>
            <div className={styles.servicecard}>
                <div className={styles.servicecardimage}>
                   <FaPeriscope/>  
                </div>
                <div className={styles.service}>
                    <h1>Location</h1>
                    <p>Dodoma , Tanzania</p>
                </div>
            </div>
            </div>
            </div>
        </div>
        <div className={styles.cright}>
            <p className={styles.rightdesc}>
                <b>What's your story</b> Get in touch. Always available
                for freelancing if the right prooject comes along. 
            </p>
            <form className={styles.form}>
            <input type="text" id="name" placeholder="Name" name="user_name" className={styles.input} required />
            <input type="text" id="name" placeholder="Subject" name="user_subject" className={styles.input} required />
            <input type="email" id="email" placeholder="Email" name="user_email" className={styles.input} required />
            <textarea id="message" rows="7" placeholder="message" name="message" className={styles.textarea} ></textarea>
            <button type="submit" className={styles.button}>Send</button>
           </form>
        </div>

    </div>
  )
}

export default Contact