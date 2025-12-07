import React, { useState } from "react";
import styles from "../JopDetailsInfo/JopDetailsInfo.module.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axiosInstance from "../../../../utils/axiosInstance";
import { useSelector } from "react-redux";

export default function ApplyFormJob({ onClose }) {
  const lang = useSelector((state) => state.lang.lang);
  const isArabic = lang === 'ar';


  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    cv: null,
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    // if (name === "cv") {
    //   setFormData({ ...formData, cv: files[0] });
    if (name === "cv") {
      const file = files[0];

      if (!file) return;

      if (file.type !== "application/pdf") {
        setErrors({
          ...errors,
          cv: isArabic
            ? "يُسمح برفع ملفات PDF فقط"
            : "Only PDF files are allowed",
        });
        setFormData({ ...formData, cv: null });
        return;
      }

      setErrors({ ...errors, cv: "" });
      setFormData({ ...formData, cv: file });
      return;

    } else if (name === "phone") {
      const numericValue = value.replace(/\D/g, "");
      setFormData({ ...formData, [name]: numericValue });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = isArabic ? "الاسم مطلوب" : "Name is required";
    if (!formData.email.trim()) newErrors.email = isArabic ? "البريد الإلكتروني مطلوب" : "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = isArabic ? "صيغة البريد الإلكتروني غير صحيحة" : "Invalid email format";

    if (!formData.phone.trim()) newErrors.phone = isArabic ? "رقم الهاتف مطلوب" : "Phone number is required";
    if (!formData.cv) newErrors.cv = isArabic ? "يرجى رفع السيرة الذاتية" : "Please upload your CV";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("phone", formData.phone);
    formDataToSend.append("cv", formData.cv);

    try {
      setLoading(true);
      const response = await axiosInstance.post(
        "/careers/submit-form",
        formDataToSend,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      if (response.data?.success || response.status === 200 || response.status === 201) {
        toast.success(response.data?.message || "Your CV has been sent successfully!");
        setFormData({ name: "", email: "", phone: "", cv: null });
        setErrors({});
        setTimeout(() => {
          onClose();
        }, 1500);
      }
      else {
        toast.error(response.data?.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      const serverError =
        error.response?.data?.message ||
        error.response?.data?.error ||
        "Error sending your CV. Please try again later.";

      toast.error(serverError);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose}>
          ×
        </button>

        <h2 className={styles.title}>{isArabic ? 'قم بتطبيق سيرتك الذاتية' : 'Apply your CV'}</h2>

        <form className={styles.form} onSubmit={handleSubmit}>
          {/* Name */}
          <div className={styles.inputGroup}>
            <input
              type="text"
              name="name"
              placeholder={isArabic ? 'اسمك   ' : 'Your name'}
              value={formData.name}
              onChange={handleChange}
              className={errors.name ? styles.inputError : ""}
            />
            {errors.name && <p className={styles.errorMsg}>{errors.name}</p>}
          </div>

          {/* Email */}
          <div className={styles.inputGroup}>
            <input
              type="email"
              name="email"
              placeholder={isArabic ? 'البريد الإلكتروني الخاص بك   ' : 'Your email'}
              value={formData.email}
              onChange={handleChange}
              className={errors.email ? styles.inputError : ""}
            />
            {errors.email && <p className={styles.errorMsg}>{errors.email}</p>}
          </div>

          {/* Phone */}
          <div className={styles.inputGroup}>
            <input
              type="text"
              name="phone"
              placeholder={isArabic ? 'رقم هاتفك المحمول' : 'Your mobile number'}
              value={formData.phone}
              onChange={handleChange}
              onKeyDown={(e) => {
                // 🚫 منع كتابة e أو + أو - 
                if (e.key.toLowerCase() === "e" || e.key === "+" || e.key === "-") {
                  e.preventDefault();
                }
              }}
              className={errors.phone ? styles.inputError : ""}
            />
            {errors.phone && <p className={styles.errorMsg}>{errors.phone}</p>}
          </div>

          {/* Upload CV */}
          <div className={styles.inputGroup}>
            <label
              className={`${styles.uploadBox} ${errors.cv ? styles.inputError : ""
                }`}
            >


              {isArabic ? 'قم بتحميل سيرتك الذاتية (الحد الأقصى: 2 ميجابايت)' : 'Upload your CV (Max: 2MB)'}

              <input
                type="file"
                name="cv"
                accept=".pdf"
                hidden
                onChange={handleChange}
              />
              <span className={styles.icon}>
                <img
                  src="/img/careers/attachment-line.svg"
                  alt="Upload Icon"
                />
              </span>
              {formData.cv && <span>{formData.cv.name}</span>}
            </label>
            {errors.cv && <p className={styles.errorMsg}>{errors.cv}</p>}
          </div>

          {/* Buttons */}
          <div className={styles.btns}>
            <button type="submit" className={styles.sendBtn} disabled={loading}>
              {loading ? <div className={styles.spinner}></div> : isArabic ? 'ارسال' : 'Send'}
            </button>
            <button
              type="button"
              className={styles.cancelBtn}
              onClick={onClose}
            >

              {isArabic ? 'الغاء' : ' Cancel'}
            </button>
          </div>
        </form>

        <ToastContainer position="top-right" autoClose={3000} />
      </div>
    </div>
  );
}


