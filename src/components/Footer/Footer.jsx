import React, { useEffect, useState } from "react";
import styles from "./Footer.module.css";
import { FaFacebookF, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { PiBuildingsDuotone } from "react-icons/pi";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import axiosInstance from "../../../utils/axiosInstance";

function Footer() {
  const lang = useSelector((state) => state.lang.lang);
   const [products, setProducts] = useState([]);
   
     const isArabic= lang === 'ar';
   
     
   useEffect(() => {
     const fetchProducts = async () => {
       try {
         const response = await axiosInstance.get("/products");
         const productsArray = response.data?.data?.products || [];
         setProducts(productsArray);
       } catch (err) {
         console.error("Failed to fetch products:", err);
         setProducts([]);
       }
     };
     fetchProducts();
   }, []);

  return (
    <footer className={styles.topfooter}>
      <div className={styles.footer}>
        <div className={styles.topIcons}>
          <div className={styles.item}>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M2 22V9.975L9 7v2l5-2v3h8v12zm2-2h16v-8h-8V9.95l-5 2V10l-3 1.325zm7-2h2v-4h-2zm-4 0h2v-4H7zm8 0h2v-4h-2zm7-8h-5l1-8h3zM4 20h16z" /></svg>
            </span>
            <Link to={'https://www.google.com.eg/maps/place/%D8%A7%D9%84%D8%B4%D8%B1%D9%82%D9%8A%D8%A9+%D9%84%D8%B5%D9%86%D8%A7%D8%B9%D8%A9+%D8%A7%D9%84%D8%B3%D9%83%D8%B1+-+%D8%A7%D9%84%D8%A8%D9%88%D8%A7%D8%A8%D8%A9+%D8%A7%D9%84%D8%B1%D8%A6%D9%8A%D8%B3%D9%8A%D8%A9%E2%80%AD/@30.6467728,31.9266189,16z/data=!4m6!3m5!1s0x14f83fce2203131f:0x5eee3924db1d82b9!8m2!3d30.6447946!4d31.9305288!16s%2Fg%2F11k0vh9xd2?coh=164777&shorturl=1&entry=tts&g_ep=EgoyMDI1MDExNS4wIPu8ASoASAFQAw%3D%3D'} target="_blank">{isArabic ? 'موقع المصنع' : 'Plant Location'}</Link>
          </div>
          <div className={styles.item}>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M22.8335 21.7502H21.7502V1.16683C21.7502 0.879512 21.636 0.603961 21.4329 0.400797C21.2297 0.197633 20.9541 0.0834961 20.6668 0.0834961H3.3335C3.04618 0.0834961 2.77063 0.197633 2.56746 0.400797C2.3643 0.603961 2.25016 0.879512 2.25016 1.16683V21.7502H1.16683C0.879512 21.7502 0.603961 21.8643 0.400797 22.0675C0.197633 22.2706 0.0834961 22.5462 0.0834961 22.8335C0.0834961 23.1208 0.197633 23.3964 0.400797 23.5995C0.603961 23.8027 0.879512 23.9168 1.16683 23.9168H22.8335C23.1208 23.9168 23.3964 23.8027 23.5995 23.5995C23.8027 23.3964 23.9168 23.1208 23.9168 22.8335C23.9168 22.5462 23.8027 22.2706 23.5995 22.0675C23.3964 21.8643 23.1208 21.7502 22.8335 21.7502ZM8.75016 21.7502V17.4168H15.2502V21.7502H8.75016ZM17.4168 21.7502V16.3335C17.4168 16.0462 17.3027 15.7706 17.0995 15.5675C16.8964 15.3643 16.6208 15.2502 16.3335 15.2502H7.66683C7.37951 15.2502 7.10396 15.3643 6.9008 15.5675C6.69763 15.7706 6.5835 16.0462 6.5835 16.3335V21.7502H4.41683V2.25016H19.5835V21.7502H17.4168ZM8.75016 5.50016V6.5835C8.75016 6.87081 8.63603 7.14636 8.43286 7.34953C8.2297 7.55269 7.95415 7.66683 7.66683 7.66683C7.37951 7.66683 7.10396 7.55269 6.9008 7.34953C6.69763 7.14636 6.5835 6.87081 6.5835 6.5835V5.50016C6.5835 5.21284 6.69763 4.9373 6.9008 4.73413C7.10396 4.53097 7.37951 4.41683 7.66683 4.41683C7.95415 4.41683 8.2297 4.53097 8.43286 4.73413C8.63603 4.9373 8.75016 5.21284 8.75016 5.50016ZM13.0835 5.50016V6.5835C13.0835 6.87081 12.9694 7.14636 12.7662 7.34953C12.563 7.55269 12.2875 7.66683 12.0002 7.66683C11.7128 7.66683 11.4373 7.55269 11.2341 7.34953C11.031 7.14636 10.9168 6.87081 10.9168 6.5835V5.50016C10.9168 5.21284 11.031 4.9373 11.2341 4.73413C11.4373 4.53097 11.7128 4.41683 12.0002 4.41683C12.2875 4.41683 12.563 4.53097 12.7662 4.73413C12.9694 4.9373 13.0835 5.21284 13.0835 5.50016ZM17.4168 5.50016V6.5835C17.4168 6.87081 17.3027 7.14636 17.0995 7.34953C16.8964 7.55269 16.6208 7.66683 16.3335 7.66683C16.0462 7.66683 15.7706 7.55269 15.5675 7.34953C15.3643 7.14636 15.2502 6.87081 15.2502 6.5835V5.50016C15.2502 5.21284 15.3643 4.9373 15.5675 4.73413C15.7706 4.53097 16.0462 4.41683 16.3335 4.41683C16.6208 4.41683 16.8964 4.53097 17.0995 4.73413C17.3027 4.9373 17.4168 5.21284 17.4168 5.50016ZM8.75016 10.9168V12.0002C8.75016 12.2875 8.63603 12.563 8.43286 12.7662C8.2297 12.9694 7.95415 13.0835 7.66683 13.0835C7.37951 13.0835 7.10396 12.9694 6.9008 12.7662C6.69763 12.563 6.5835 12.2875 6.5835 12.0002V10.9168C6.5835 10.6295 6.69763 10.354 6.9008 10.1508C7.10396 9.94763 7.37951 9.8335 7.66683 9.8335C7.95415 9.8335 8.2297 9.94763 8.43286 10.1508C8.63603 10.354 8.75016 10.6295 8.75016 10.9168ZM13.0835 10.9168V12.0002C13.0835 12.2875 12.9694 12.563 12.7662 12.7662C12.563 12.9694 12.2875 13.0835 12.0002 13.0835C11.7128 13.0835 11.4373 12.9694 11.2341 12.7662C11.031 12.563 10.9168 12.2875 10.9168 12.0002V10.9168C10.9168 10.6295 11.031 10.354 11.2341 10.1508C11.4373 9.94763 11.7128 9.8335 12.0002 9.8335C12.2875 9.8335 12.563 9.94763 12.7662 10.1508C12.9694 10.354 13.0835 10.6295 13.0835 10.9168ZM17.4168 10.9168V12.0002C17.4168 12.2875 17.3027 12.563 17.0995 12.7662C16.8964 12.9694 16.6208 13.0835 16.3335 13.0835C16.0462 13.0835 15.7706 12.9694 15.5675 12.7662C15.3643 12.563 15.2502 12.2875 15.2502 12.0002V10.9168C15.2502 10.6295 15.3643 10.354 15.5675 10.1508C15.7706 9.94763 16.0462 9.8335 16.3335 9.8335C16.6208 9.8335 16.8964 9.94763 17.0995 10.1508C17.3027 10.354 17.4168 10.6295 17.4168 10.9168Z" fill="currentColor" />
              </svg>
            </span>
            <Link to={'https://maps.app.goo.gl/xA5vS2VkRNyAqVKG8'} target="_blank"> {isArabic ? 'موقع المقر الرئيسي' : 'Headquarters Location'}</Link>

          </div>
          {/* <div className={styles.item}>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M5 20h14v-2H5m14-9h-4V3H9v6H5l7 7z" /></svg>
            </span>
            <Link to={'download-brochure'}>Download Brochure</Link>
          </div> */}
          <div className={styles.item}>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3.464 16.828C2 15.657 2 14.771 2 11s0-5.657 1.464-6.828C4.93 3 7.286 3 12 3s7.071 0 8.535 1.172S22 7.229 22 11s0 4.657-1.465 5.828C19.072 18 16.714 18 12 18c-2.51 0-3.8 1.738-6 3v-3.212c-1.094-.163-1.899-.45-2.536-.96" /></svg>
            </span>

            <Link to={'contact-us'}> {isArabic ? 'تواصل معنا' : 'Contact Us'}</Link>
          </div>
        </div>

        <div className={styles.mainFooter}>
          <div className={styles.bottomlogoo}>
          <img
              className={styles.bottomlogo}
              src="/img/homepage/bottom.png"
              alt="imglogo"
              width="240"
              height="90"
            />          
            </div>
          <div className="row">
            <div className={`col-sm-6 col-md-4 col-lg-4 col-xl-2 ${styles.colSpacing}`}>
              <Link to={`/${lang}`}>
                <img className="m-auto" src="/img/homepage/biglogo.png" alt="" width={189.008} height={143.008} />
              </Link>
              <p className={styles.desc}>{isArabic ? "تابعنا" : "Follow Us"}</p>
              <div className={styles.social}>
                <a href="https://www.linkedin.com/company/alsharkeya-sugar/" target="_blank"><FaLinkedinIn /></a>
                <a href="https://www.facebook.com/www.sharkeyasugar.com.eg/?_rdc=1&_rdr#" target="_blank"><FaFacebookF /></a>
                <a href="https://www.youtube.com/@sharkeyaSugar" target="_blank"><FaYoutube /></a>

              </div>
            </div>
            <div className={`col-sm-6 col-md-4 col-lg-4 col-xl-2 ${styles.colSpacing}`}>
              <h2 className={styles.bottomtitle}>{isArabic ? "من نحن" : "About Us"}</h2>
              <ul>
                <li><Link to='about-us/who-we-are'>{isArabic ? "من نحن" : "Who We Are"}</Link></li>
                <li><Link to='about-us/our-strategy'>{isArabic ? "استراتيجيتنا" : "Our Strategy"}</Link></li>
                {/* <li><Link to='about-us/company-history'>Company History</Link></li> */}
                <li><Link to='about-us/our-shareholders'>{isArabic ? "المساهمون" : "Our Shareholders"}</Link></li>
                <li><Link to='about-us/board-members'>{isArabic ? "مجلس الإدارة" : "Board Members"}</Link></li>
                <li><Link to='about-us/management-team'>{isArabic ? "فريق الإدارة" : "Management Team"}</Link></li>
              </ul>
            </div>
            <div className={`col-sm-6 col-md-4 col-lg-4 col-xl-2 ${styles.colSpacing}`}>
              <h2 className={styles.bottomtitle}>{isArabic ? "منتجاتنا" : "Our Products"}</h2>
              <ul>
                <li><Link to='our-products/overview'>{isArabic ? "نظرة عامة" : "Overview"}</Link></li>
                <li><Link to='our-products/white-sugar'>{isArabic ? "السكر الأبيض" : "White Sugar"}</Link></li>
                <li><Link to='our-products/molasses'>{isArabic ? "المولاس" : "Molasses"}</Link></li>
                <li><Link to='our-products/pellets'>{isArabic ? "العلف  " : "Pellets"}</Link></li>
              </ul>
              {/* <ul>
                <li>
                  <Link to="our-products/overview">
                    {isArabic ? "نظرة عامة" : "Overview"}
                  </Link>
                </li>

                {products.length > 0 ? (
                  products.map((product) => (
                    <li key={product.id}>
                      <Link to={`our-products/${product.id}`}>
                        {product.name}
                      </Link>
                    </li>
                  ))
                ) : (
                  <li>
                    <span>No products found</span>
                  </li>
                )}
              </ul> */}

            </div>
            <div className={`col-sm-6 col-md-4 col-lg-4 col-xl-2 ${styles.colSpacing}`}>
              <h2 className={styles.bottomtitle}>{isArabic ? "الموارد" : "Resources"}</h2>
              <ul>
                <li><Link to={'sugar-history'}>{isArabic ? "تاريخ السكر" : "Sugar History"}</Link></li>
                {/* <li><Link to='recipes'>Recipes</Link></li> */}
                <li><Link to='facts-about-sugar'>{isArabic ? "حقائق عن السكر" : "Facts About Sugar"}</Link></li>
              </ul>
            </div>
            <div className={`col-sm-6 col-md-4 col-lg-4 col-xl-2 ${styles.colSpacing}`}>
              <h2 className={styles.bottomtitle}> {isArabic ? "مسؤولياتنا" : "Our Responsibilities"}</h2>
              <ul>
                <li><Link to='our-responsibilities/certifications'> {isArabic ? "الشهادات" : "Certifications"}</Link></li>
                <li><Link to='our-responsibilities/sustainability'>{isArabic ? "الاستدامة" : "Sustainability"}</Link></li>
                {/* <li><Link to='our-responsibilities/csr'>CSR</Link></li> */}
                <li><Link to='our-responsibilities/codeconduct'>{isArabic ? "مدونة السلوك" : "Code of Conduct"}</Link></li>
              </ul>
            </div>
            <div className={`col-sm-6 col-md-4 col-lg-4 col-xl-2 ${styles.colSpacing}`}>
              <h2 className={styles.bottomtitle}><Link to='contact-us'> {isArabic ? "تواصل معنا" : "Contact Us"}</Link></h2>
              <h2 className={styles.bottomtitle}><Link to={'news'}>{isArabic ? "الأخبار" : "News"}</Link></h2>
              <h2 className={styles.bottomtitle}><Link to={'faqs'}>{isArabic ? "الأسئلة الشائعة" : "FAQs"}</Link></h2>
              <h2 className={styles.bottomtitle}><Link to={'careers'}>{isArabic ? "الوظائف" : "Careers"}</Link></h2>
              <h2 className={styles.bottomtitle}><Link to='our-customer'>{isArabic ? "عملاؤنا" : "Our Customers"}</Link></h2>
            </div>

          </div>
          <div className={styles.bottomFooter}>
            <p>
          © 2025{" "}
          {isArabic
            ? "شركة الشرقية لصناعة السكر. جميع الحقوق محفوظة."
            : "Al Sharkeya Sugar Manufacturing. All Right Reserved."}
        </p>
            <p className='d-flex gap-3'><Link to='https://icon-creations.com/' target='_blank' ><img src="/img/homepage/icon.png" className="object-fit-contain"  width={50}  alt="" /></Link></p>
            <div className='d-flex gap-3'>
              <p>
                <Link to='terms-of-service'>{isArabic ? "شروط الخدمة" : "Terms of Service"}</Link>
              </p>
              <p>
                <Link to='privacy-policy'>{isArabic ? "سياسة الخصوصية" : "Privacy Policy"}</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
