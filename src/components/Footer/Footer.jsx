import React from "react";
import styles from "./Footer.module.css";
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { PiBuildingsDuotone } from "react-icons/pi";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className={styles.topfooter}>
      <div className={styles.footer}>
        <div className={styles.topIcons}>
          <div className={styles.item}>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M2 22V9.975L9 7v2l5-2v3h8v12zm2-2h16v-8h-8V9.95l-5 2V10l-3 1.325zm7-2h2v-4h-2zm-4 0h2v-4H7zm8 0h2v-4h-2zm7-8h-5l1-8h3zM4 20h16z" /></svg>
            </span>
            Plant Location
          </div>
          <div className={styles.item}>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><path fill="currentColor" d="M252 128a12 12 0 0 1-12 12h-13.4a52.09 52.09 0 0 1-50.6 40h-36v16h20a36 36 0 0 1 36 36a12 12 0 0 1-24 0a12 12 0 0 0-12-12h-20v12a12 12 0 0 1-24 0v-12H96a12 12 0 0 0-12 12a12 12 0 0 1-24 0a36 36 0 0 1 36-36h20v-16H80a52.09 52.09 0 0 1-50.6-40H16a12 12 0 0 1 0-24h24a12 12 0 0 1 12 12a28 28 0 0 0 28 28h96a28 28 0 0 0 28-28a12 12 0 0 1 12-12h24a12 12 0 0 1 12 12m-179.18 5a20 20 0 0 1-4.59-16L81.8 29a19.91 19.91 0 0 1 19.79-17h52.82a19.91 19.91 0 0 1 19.79 17l13.57 88A20 20 0 0 1 168 140H88a20 20 0 0 1-15.18-7m19.85-17h70.66L151 36h-46Z" /></svg>
            </span>
            Headquarters Location
          </div>
          <div className={styles.item}>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M5 20h14v-2H5m14-9h-4V3H9v6H5l7 7z" /></svg>
            </span>
            Download Brochure
          </div>
          <div className={styles.item}>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3.464 16.828C2 15.657 2 14.771 2 11s0-5.657 1.464-6.828C4.93 3 7.286 3 12 3s7.071 0 8.535 1.172S22 7.229 22 11s0 4.657-1.465 5.828C19.072 18 16.714 18 12 18c-2.51 0-3.8 1.738-6 3v-3.212c-1.094-.163-1.899-.45-2.536-.96" /></svg>
            </span>
            Contact Us
          </div>
        </div>

        <div className={styles.mainFooter}>
          <img className={styles.bottomlogo} src="/img/homepage/bottom.png" alt="" />
          <div className="row">
            <div className={`col-sm-6 col-md-4 col-lg-4 col-xl-2 ${styles.colSpacing}`}>
              <img className="m-auto" src="/img/homepage/biglogo.png" alt="" />
              <p className={styles.desc}>Follow Us on</p>
              <div className={styles.social}>
                <a href="#"><FaLinkedinIn /></a>
                <a href="#"><FaFacebookF /></a>
              </div>
            </div>
            <div className={`col-sm-6 col-md-4 col-lg-4 col-xl-2 ${styles.colSpacing}`}>
              <h2 className={styles.bottomtitle}>About Us</h2>
              <ul>
                <li><Link to='/'>Who we are</Link></li>
                <li><Link to='/'>Our strategy</Link></li>
                <li><Link to='/'>Company history</Link></li>
                <li><Link to='/'>Our shareholders</Link></li>
                <li><Link to='/'>Board members</Link></li>
                <li><Link to='/'>Management team</Link></li>
              </ul>
            </div>
            <div className={`col-sm-6 col-md-4 col-lg-4 col-xl-2 ${styles.colSpacing}`}>
              <h2 className={styles.bottomtitle}>Our products</h2>
              <ul>
                <li><Link to='/'>Overview</Link></li>
                <li><Link to='/'>White sugar</Link></li>
                <li><Link to='/'>Molasses</Link></li>
                <li><Link to='/'>Pellets</Link></li>
              </ul>
            </div>
            <div className={`col-sm-6 col-md-4 col-lg-4 col-xl-2 ${styles.colSpacing}`}>
              <h2 className={styles.bottomtitle}>Resources</h2>
              <ul>
                <li><Link to='/'>Sugar history</Link></li>
                <li><Link to='/'>Recipes</Link></li>
                <li><Link to='/'>Facts about sugar</Link></li>
              </ul>
            </div>
            <div className={`col-sm-6 col-md-4 col-lg-4 col-xl-2 ${styles.colSpacing}`}>
              <h2 className={styles.bottomtitle}><Link>Sustainability & CSR</Link></h2>
              <h2 className={styles.bottomtitle}><Link>Careers</Link></h2>
              <h2 className={styles.bottomtitle}><Link to='/our-customer'>Our Customers </Link></h2>
            </div>
            <div className={`col-sm-6 col-md-4 col-lg-4 col-xl-2 ${styles.colSpacing}`}>
              <h2 className={styles.bottomtitle}><Link>Contact Us</Link></h2>
              <h2 className={styles.bottomtitle}><Link>News</Link></h2>
              <h2 className={styles.bottomtitle}><Link>FAQs</Link></h2>
            </div>

          </div>
          <div className={styles.bottomFooter}>
            <p>© 2025 Al Sharkeya Sugar Manufacturing Company. All Right Reserved.</p>
            <p className='d-flex gap-3'>Designed and Developed by <Link to='https://icon-creations.com/' target='_blank' ><img src="/img/homepage/icon.png" alt="" /></Link></p>
            <div className='d-flex gap-3'>
              <p>
                <Link to='/'>Terms of Service</Link>
              </p>
              <p>
                <Link to='/'>Privacy Policy</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
