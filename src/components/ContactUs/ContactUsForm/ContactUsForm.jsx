import React, { useState, useEffect } from "react";
import styles from "./ContactUsForm.module.css";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { submitContactForm, resetContactState } from "../../../../store/slices/contactSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ContactUsForm() {
  const [activeTab, setActiveTab] = useState("touch");
  const dispatch = useDispatch();
  const { loading, successMessage, errorMessage } = useSelector((state) => state.contact);
  const currentLang = useSelector((state) => state.lang.lang);

      const isArabic= currentLang === 'ar';  

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const payload = {
      ...data,
      type: activeTab === "sales" ? "sales" : "get_in_touch",
    };

    dispatch(submitContactForm({ formData: payload, lang: currentLang }));
  };

  useEffect(() => {
    if (successMessage) {
      toast.success(successMessage);
      reset();
      dispatch(resetContactState());
    }

    if (errorMessage) {
      toast.error(errorMessage);
      dispatch(resetContactState());
    }
  }, [successMessage, errorMessage, dispatch, reset]);






   const { data } = useSelector((state) => state.branches); 
      if (loading || !data?.data.branches) return null;

  return (
    <section className={styles.contactSection}>
      <h2 className={styles.title}>{isArabic?'اتصل بنا':'Contact us'}</h2>

      <div className={styles.container}>
        <div className={styles.formSection}>
          <div className={styles.tabs}>
            <button
              className={`${styles.tab} ${activeTab === "touch" ? styles.active : ""}`}
              onClick={() => setActiveTab("touch")}
              type="button"
            >
              {isArabic?' تواصل معنا':'Get in touch'}
            </button>

            <button
              className={`${styles.tab} ${activeTab === "sales" ? styles.active : ""}`}
              onClick={() => setActiveTab("sales")}
              type="button"
            >
              {isArabic?' اتصل بالمبيعات':'Contact Sales'}

            </button>
          </div>

          <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              placeholder={isArabic?'اسمك*   ':'name*'}

              className={styles.input}
              {...register("name", {            required: isArabic ? "الاسم مطلوب" : "Name is required", })}
            />
            {errors.name && <p className={styles.errorMsg}>{errors.name.message}</p>}

            <input
              type="text"
              placeholder={isArabic?'اسم الشركة*   ':'company name*'}

              className={styles.input}
              {...register("company", {            required: isArabic ? "اسم الشركة مطلوب" : "Company name is required", })}
            />
            {errors.company && <p className={styles.errorMsg}>{errors.company.message}</p>}

            <input
              type="number"
              placeholder={isArabic?'رقم الهاتف المحمول*':'mobile number*'} 

              className={styles.input}
              {...register("phone", {
            required: isArabic ? "رقم الهاتف مطلوب*" : "mobile number*",
                pattern: {
                  value: /^\+?\d{10,15}$/,
                  message: "Please enter a valid phone number",
                },
              })}
            />
            {errors.phone && <p className={styles.errorMsg}>{errors.phone.message}</p>}

            <input
              type="email"
              placeholder={isArabic?'البريد الإلكتروني*   ':'email*'}

              className={styles.input}
              {...register("email", {             required: isArabic ? "البريد الإلكتروني مطلوب" : "Email is required", })}
            />
            {errors.email && <p className={styles.errorMsg}>{errors.email.message}</p>}

            <textarea
              placeholder={isArabic?' رسالة*   ':'message*'}

              className={styles.textarea}
              {...register("message", {             required: isArabic ? "الرسالة مطلوبة" : "Message is required", })}
            />
            {errors.message && <p className={styles.errorMsg}>{errors.message.message}</p>}

            <div className="w-100 d-flex justify-content-center justify-content-lg-end">
              <button type="submit" className={styles.sendButton} disabled={loading}>
                {loading ? (
                  <div className={styles.spinner}></div>
                ) : (
                  ` ${isArabic ? "إرسال" : "Send"} ${activeTab === "sales" ? "to Sales" : ""}`
                )}
              </button>

            </div>
          </form>
        </div>


        {/* Right Info Section */}
                 <div className={styles.infoSection}>
      {data.data.branches.map((branch) => (
        <div key={branch.id} className={styles.card}>
          <h3 className={styles.cardTitle}>{branch.name}</h3>

          <div
            className={styles.cardText}
            dangerouslySetInnerHTML={{ __html: branch.desc }}
          ></div>

          <div className={styles.divbutton}>
            <button
              className={styles.visitButton}
              onClick={() => window.open(branch.location_url, "_blank")}
            >
               {isArabic?'زيارة ' : 'Visit'}
            </button>
          </div>
        </div>
      ))}
    </div>
      </div>

      <ToastContainer position="top-right" />
    </section>
  );
}
