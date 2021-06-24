import React from 'react';
import styles from '../../styles/Home.module.css';


function Footer() {
  return (
    <div  className={styles.footer}>

    <div  className={styles.footer_top}>
      <p>
      Website Policies  /  Contact Us  /  Help  /  Web Information Manager
      </p>
    </div>
    <div className={styles.footer_bottom}>
      <section className={styles.footer_subscription}>
        <p className={styles.footer_subscription_heading1}>
          © NIC APSC , Developed and hosted by  <a href='https://www.nic.in/'>National Informatics Centre,</a> <br />
         <a href='https://www.meity.gov.in/'>Ministry of Electronics</a> & Information Technology, Government of India       
        </p>

        <p  className={styles.footer_subscription_heading2}>
        Last Updated: Jun 05, 2020  
        </p>         
      </section>
    

    <section>
       <div  >         
        <a className={styles.logo1} href='https://ap.nic.in/'><img src="https://ap.nic.in/wp-content/themes/sdo-theme/images/nic.png" alt="logo1" /></a>
          
        <a className={styles.logo2} className={styles.vl} href='https://www.digitalindia.gov.in/'><img src="https://ap.nic.in/wp-content/themes/sdo-theme/images/digitalIndia.png" alt="logo2" /></a>

      </div>    
       
    </section>
    </div>
    </div>
  );
}

export default Footer;