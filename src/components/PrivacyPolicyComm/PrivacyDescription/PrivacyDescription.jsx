// import React from 'react'
// import styles from './PrivacyDescription.module.css'
// import { useSelector } from 'react-redux';

// export default function PrivacyDescription() {
//      const lang = useSelector((state) => state.lang.lang);
//           const isArabic= lang === 'ar';  
//     return (
//         <>

//             <section className={`${styles.privacySection}`}>
//                 <div className={`container-fluid ${styles.customContainer}`}>

//                     <h2 className={styles.sectionTitle}>Introduction</h2>
//                     <p>
//                        Al Sharkeya Sugar Manufacturing is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your data. 
//                     </p>

//                     <h3>Information We Collect </h3>
//                     <p>We may collect the following types of personal information:</p>
//                     <ul className={styles.customList}>
//                         <li>Name</li>
//                         <li>Email address</li>
//                         <li>Phone number</li>
//                         <li>IP address</li>
//                     </ul>

//                     <h3>Use of Collected Information</h3>
//                     <p>Your information may be used to:</p>
//                     <ul className={styles.customList}>
//                         <li>Create and manage your account</li>
//                         <li>Respond to inquiries</li>
//                         <li>Improve our website experience</li>
//                         <li>Analyze user trends via analytics tools</li>
//                     </ul>

//                     <h3>Cookies and Analytics</h3>
//                     <p>
//                         We use cookies and Google Analytics to understand website traffic and user behavior. You may control cookie settings through your browser. 
//                     </p>

//                     <h3>Data Sharing</h3>
//                     <p>
//                         Al Sharkeya Sugar Manufacturing does not sell, rent, or share your personal information with third parties, except as required by law. 
//                     </p>

//                     <h3>International Access</h3>
//                     <p>
//                        Our website is accessible to users outside Egypt. If you are accessing the site internationally, your data may be stored on servers located in other jurisdictions. 
//                     </p>

//                     <h3>Data Security</h3>
//                     <p>
//                        We implement appropriate security measures to protect your personal information against unauthorized access or disclosure. 
//                     </p>

//                     <h3>Your Rights</h3>
//                     <p>
//                         You have the right to access, correct, or delete your personal data. To exercise your rights, contact us at the details provided below. 
//                     </p>

//                     <h3>Changes to Policy</h3>
//                     <p>
//                        We may revise this Privacy Policy from time to time. Updates will be posted on this page. 
//                     </p>

//                     <h3>Contact</h3>
//                     <p>
//                         If you have questions about these Terms, please contact us at:
//                         <br />
//                         <strong>Email:</strong>  info@sharkeyasugar.com
//                         <br />
//                         <strong>Phone:</strong> +20553201592
//                     </p>

//                 </div>

//             </section>

//         </>
//     )
// }


import React from 'react'
import styles from './PrivacyDescription.module.css'
import { useSelector } from 'react-redux';

export default function PrivacyDescription() {
    const lang = useSelector((state) => state.lang.lang);
    const isArabic = lang === 'ar';  

    return (
        <>
            <section className={`${styles.privacySection}`}>
                <div className={`container-fluid ${styles.customContainer}`}>

                    <h2 className={styles.sectionTitle}>
                        {isArabic ? "مقدمة" : "Introduction"}
                    </h2>
                    <p>
                        {isArabic
                          ? "تلتزم شركة الشرقية لتصنيع السكر بحماية خصوصيتك. توضح سياسة الخصوصية هذه كيفية جمع بياناتك واستخدامها وحمايتها."
                          : "Al Sharkeya Sugar Manufacturing is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your data."}
                    </p>

                    <h3>
                        {isArabic ? "المعلومات التي نجمعها" : "Information We Collect"}
                    </h3>
                    <p>
                        {isArabic ? "قد نقوم بجمع الأنواع التالية من المعلومات الشخصية:" : "We may collect the following types of personal information:"}
                    </p>
                    <ul className={styles.customList}>
                        <li>{isArabic ? "الاسم" : "Name"}</li>
                        <li>{isArabic ? "البريد الإلكتروني" : "Email address"}</li>
                        <li>{isArabic ? "رقم الهاتف" : "Phone number"}</li>
                        <li>{isArabic ? "عنوان IP" : "IP address"}</li>
                    </ul>

                    <h3>
                        {isArabic ? "استخدام المعلومات المجمعة" : "Use of Collected Information"}
                    </h3>
                    <p>
                        {isArabic ? "قد يتم استخدام معلوماتك لـ:" : "Your information may be used to:"}
                    </p>
                    <ul className={styles.customList}>
                        <li>{isArabic ? "إنشاء وإدارة حسابك" : "Create and manage your account"}</li>
                        <li>{isArabic ? "الرد على الاستفسارات" : "Respond to inquiries"}</li>
                        <li>{isArabic ? "تحسين تجربة الموقع" : "Improve our website experience"}</li>
                        <li>{isArabic ? "تحليل اتجاهات المستخدمين عبر أدوات التحليلات" : "Analyze user trends via analytics tools"}</li>
                    </ul>

                    <h3>
                        {isArabic ? "الكوكيز والتحليلات" : "Cookies and Analytics"}
                    </h3>
                    <p>
                        {isArabic
                          ? "نستخدم الكوكيز وGoogle Analytics لفهم حركة المرور وسلوك المستخدم على الموقع. يمكنك التحكم في إعدادات الكوكيز من خلال متصفحك."
                          : "We use cookies and Google Analytics to understand website traffic and user behavior. You may control cookie settings through your browser."}
                    </p>

                    <h3>
                        {isArabic ? "مشاركة البيانات" : "Data Sharing"}
                    </h3>
                    <p>
                        {isArabic
                          ? "لا تقوم شركة الشرقية لتصنيع السكر ببيع أو تأجير أو مشاركة معلوماتك الشخصية مع أطراف ثالثة، إلا إذا كان ذلك مطلوبًا بموجب القانون."
                          : "Al Sharkeya Sugar Manufacturing does not sell, rent, or share your personal information with third parties, except as required by law."}
                    </p>

                    <h3>
                        {isArabic ? "الوصول الدولي" : "International Access"}
                    </h3>
                    <p>
                        {isArabic
                          ? "موقعنا متاح للمستخدمين خارج مصر. إذا كنت تصل إلى الموقع دوليًا، قد يتم تخزين بياناتك على خوادم تقع في نطاقات قضائية أخرى."
                          : "Our website is accessible to users outside Egypt. If you are accessing the site internationally, your data may be stored on servers located in other jurisdictions."}
                    </p>

                    <h3>
                        {isArabic ? "أمان البيانات" : "Data Security"}
                    </h3>
                    <p>
                        {isArabic
                          ? "نقوم بتنفيذ تدابير أمان مناسبة لحماية معلوماتك الشخصية من الوصول أو الكشف غير المصرح به."
                          : "We implement appropriate security measures to protect your personal information against unauthorized access or disclosure."}
                    </p>

                    <h3>
                        {isArabic ? "حقوقك" : "Your Rights"}
                    </h3>
                    <p>
                        {isArabic
                          ? "لديك الحق في الوصول إلى بياناتك الشخصية وتصحيحها أو حذفها. لممارسة حقوقك، تواصل معنا من خلال التفاصيل الواردة أدناه."
                          : "You have the right to access, correct, or delete your personal data. To exercise your rights, contact us at the details provided below."}
                    </p>

                    <h3>
                        {isArabic ? "التغييرات على السياسة" : "Changes to Policy"}
                    </h3>
                    <p>
                        {isArabic
                          ? "قد نقوم بمراجعة سياسة الخصوصية هذه من وقت لآخر. سيتم نشر التحديثات على هذه الصفحة."
                          : "We may revise this Privacy Policy from time to time. Updates will be posted on this page."}
                    </p>

                    <h3>
                        {isArabic ? "الاتصال" : "Contact"}
                    </h3>
                    <p>
                        {isArabic
                          ? "إذا كانت لديك أسئلة حول هذه الشروط، يرجى الاتصال بنا على:"
                          : "If you have questions about these Terms, please contact us at:"}
                        <br />
                        <strong>{isArabic ? "البريد الإلكتروني:" : "Email:"}</strong> info@sharkeyasugar.com
                        <br />
                        <strong>{isArabic ? "الهاتف:" : "Phone:"}</strong> +20553201592
                    </p>

                </div>
            </section>
        </>
    )
}
