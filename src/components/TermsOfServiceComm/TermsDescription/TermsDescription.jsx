// import React from 'react'
// import styles from './TermsDescription.module.css'
// export default function TermsDescription() {
//   return (
//     <>
//                 <section className={`${styles.privacySection}`}>
//                     <div className={`container-fluid ${styles.customContainer}`}>
    
//                         <h2 className={styles.sectionTitle}>Introduction</h2>
//                         <p>
//                             Welcome to our website. By accessing and using this site, you agree to comply with these Terms of Service. If you do not agree, please refrain from using the website. 
//                         </p>
    
//                         <h3>Company Information</h3>
//                         <p>
//                             Al Sharkeya Sugar Manufacturing is a sugar manufacturing company based in Egypt, specializing in beet-based sugar production. This website provides information about our company, our products, and how to contact us. 
//                         </p>
    
//                         <h3>Account Creation </h3>
//                         <p>
//                             Users may create accounts to access certain features. You are responsible for maintaining the confidentiality of your login information. We reserve the right to suspend or terminate accounts that violate these terms. 
//                         </p>
    
//                         <h3>Use of Website</h3>
//                         <p>
//                             You agree not to use this site for any unlawful or harmful purpose. All information provided must be accurate and truthful. You may not engage in any behavior that disrupts or compromises the security of the website. 
//                         </p>
    
//                         <h3>Intellectual Property</h3>
//                         <p>
//                             All content on this site, including logos, images, text, and designs, is the intellectual property of Al Sharkeya Sugar Manufacturing unless otherwise stated. Unauthorized use, copying, or distribution is strictly prohibited. 
//                         </p>
    
//                         <h3>Legal Jurisdiction</h3>
//                         <p>
//                             These Terms of Service are governed by the laws of Egypt. Any disputes will be handled exclusively in Egyptian courts. 
//                         </p>
    
//                         <h3>Changes to Terms</h3>
//                         <p>
//                            We may update these Terms at any time. Continued use of the website indicates acceptance of any modifications. 
//                         </p>
    
//                         <h3>Contact</h3>
//                         <p>
//                             If you have questions about these Terms, please contact us at:
//                             <br />
//                             <strong>Email:</strong>  info@sharkeyasugar.com
//                             <br />
//                             <strong>Phone:</strong> +20553201592
//                         </p>
    
//                     </div>
    
//                 </section>
    
//     </>
//   )
// }



import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './TermsDescription.module.css'
import { fetchPrivacyPolicy } from '../../../../store/slices/privacyPolicySlice';
import LoadingOverlay from '../../../layouts/LoadingOverlay/LoadingOverlay';

export default function TermsDescription() {
   const dispatch = useDispatch();
    const lang = useSelector((state) => state.lang.lang);
    const { data, loading} = useSelector((state) => state.privacyPolicy);

    useEffect(() => {
        dispatch(fetchPrivacyPolicy(lang));
    }, [dispatch, lang]);

    if (loading) return <LoadingOverlay/>;

  return (
    <>
      {/* <section className={`${styles.privacySection}`}>
        <div className={`container-fluid ${styles.customContainer}`}>

          <h2 className={styles.sectionTitle}>
            {isArabic ? "مقدمة" : "Introduction"}
          </h2>
          <p>
            {isArabic
              ? "مرحبًا بكم في موقعنا الإلكتروني. من خلال الوصول إلى هذا الموقع واستخدامه، فإنك توافق على الالتزام بهذه الشروط. إذا لم توافق، يرجى الامتناع عن استخدام الموقع."
              : "Welcome to our website. By accessing and using this site, you agree to comply with these Terms of Service. If you do not agree, please refrain from using the website."}
          </p>

          <h3>{isArabic ? "معلومات الشركة" : "Company Information"}</h3>
          <p>
            {isArabic
              ? "شركة الشرقية لتصنيع السكر هي شركة مصرية متخصصة في تصنيع السكر المستخرج من الشوندر. يقدم هذا الموقع معلومات عن شركتنا ومنتجاتنا وكيفية الاتصال بنا."
              : "Al Sharkeya Sugar Manufacturing is a sugar manufacturing company based in Egypt, specializing in beet-based sugar production. This website provides information about our company, our products, and how to contact us."}
          </p>

          <h3>{isArabic ? "إنشاء الحساب" : "Account Creation"}</h3>
          <p>
            {isArabic
              ? "يمكن للمستخدمين إنشاء حسابات للوصول إلى ميزات معينة. أنت مسؤول عن الحفاظ على سرية بيانات تسجيل الدخول الخاصة بك. نحتفظ بالحق في تعليق أو إنهاء الحسابات التي تنتهك هذه الشروط."
              : "Users may create accounts to access certain features. You are responsible for maintaining the confidentiality of your login information. We reserve the right to suspend or terminate accounts that violate these terms."}
          </p>

          <h3>{isArabic ? "استخدام الموقع" : "Use of Website"}</h3>
          <p>
            {isArabic
              ? "أنت توافق على عدم استخدام هذا الموقع لأي غرض غير قانوني أو ضار. يجب أن تكون جميع المعلومات المقدمة دقيقة وصحيحة. لا يجوز لك القيام بأي سلوك يعطل أو يضر بأمان الموقع."
              : "You agree not to use this site for any unlawful or harmful purpose. All information provided must be accurate and truthful. You may not engage in any behavior that disrupts or compromises the security of the website."}
          </p>

          <h3>{isArabic ? "الملكية الفكرية" : "Intellectual Property"}</h3>
          <p>
            {isArabic
              ? "جميع المحتويات على هذا الموقع، بما في ذلك الشعارات والصور والنصوص والتصاميم، هي ملكية فكرية لشركة الشرقية لتصنيع السكر ما لم يُذكر خلاف ذلك. يُحظر الاستخدام أو النسخ أو التوزيع غير المصرح به."
              : "All content on this site, including logos, images, text, and designs, is the intellectual property of Al Sharkeya Sugar Manufacturing unless otherwise stated. Unauthorized use, copying, or distribution is strictly prohibited."}
          </p>

          <h3>{isArabic ? "الاختصاص القضائي" : "Legal Jurisdiction"}</h3>
          <p>
            {isArabic
              ? "تخضع هذه الشروط لقوانين جمهورية مصر العربية. سيتم التعامل مع أي نزاعات حصريًا أمام المحاكم المصرية."
              : "These Terms of Service are governed by the laws of Egypt. Any disputes will be handled exclusively in Egyptian courts."}
          </p>

          <h3>{isArabic ? "تغييرات على الشروط" : "Changes to Terms"}</h3>
          <p>
            {isArabic
              ? "قد نقوم بتحديث هذه الشروط في أي وقت. الاستمرار في استخدام الموقع يعني قبول أي تعديلات."
              : "We may update these Terms at any time. Continued use of the website indicates acceptance of any modifications."}
          </p>

          <h3>{isArabic ? "الاتصال" : "Contact"}</h3>
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
      </section> */}


         <section className={`${styles.privacySection}`}>
            <div className={`container-fluid ${styles.customContainer}`}>
                <div dangerouslySetInnerHTML={{ __html: data?.data?.terms }} />
            </div>
        </section>

    </>
  )
}
