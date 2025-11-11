import React, { useState, useEffect } from "react";
import styles from "./ContactUs.module.css";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { submitContactForm, resetContactState } from "../../../../store/slices/contactSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ContactUs() {
  const [activeTab, setActiveTab] = useState("touch");
  const dispatch = useDispatch();
  const { loading, successMessage, errorMessage } = useSelector((state) => state.contact);
  const lang = useSelector((state) => state.lang.lang);
  const currentLang = useSelector((state) => state.lang.lang);

    const isArabic= lang === 'ar';  


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
      <h2 className={styles.title}>{isArabic? "اتصل بنا" : "Contact Us"} </h2>

      <div className={styles.container}>
        {/* Left Form Section */}
        <div className={styles.formSection}>
          <div className={styles.tabs}>
            <button
              className={`${styles.tab} ${activeTab === "touch" ? styles.active : ""}`}
              onClick={() => setActiveTab("touch")}
              type="button"
            >
              Get in Touch
            </button>

            <button
              className={`${styles.tab} ${activeTab === "sales" ? styles.active : ""}`}
              onClick={() => setActiveTab("sales")}
              type="button"
            >
              Contact Sales
            </button>
          </div>

          <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              placeholder="name*"
              className={styles.input}
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && <p className={styles.errorMsg}>{errors.name.message}</p>}

            <input
              type="text"
              placeholder="company name*"
              className={styles.input}
              {...register("company", { required: "Company name is required" })}
            />
            {errors.company && <p className={styles.errorMsg}>{errors.company.message}</p>}

            <input
              type="text"
              placeholder="phone number*"
              className={styles.input}
              {...register("phone", {
                required: "Phone is required",
                pattern: {
                  value: /^\+?\d{10,15}$/,
                  message: "Please enter a valid phone number",
                },
              })}
            />
            {errors.phone && <p className={styles.errorMsg}>{errors.phone.message}</p>}

            <input
              type="email"
              placeholder="email*"
              className={styles.input}
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && <p className={styles.errorMsg}>{errors.email.message}</p>}

            <textarea
              placeholder="message*"
              className={styles.textarea}
              {...register("message", { required: "Message is required" })}
            />
            {errors.message && <p className={styles.errorMsg}>{errors.message.message}</p>}

            <div className="w-100 d-flex justify-content-center justify-content-lg-end">
              <button type="submit" className={styles.sendButton} disabled={loading}>
                {loading ? (
                  <div className={styles.spinner}></div>
                ) : (
                  `Send ${activeTab === "sales" ? "to Sales" : ""}`
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
               Visit
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
