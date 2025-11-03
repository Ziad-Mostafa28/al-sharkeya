// import React from 'react'
// import styles from '../JopDetailsInfo/JopDetailsInfo.module.css'

// export default function ApplyFormJob({ onClose }) {
//     return (
//         <div className={styles.overlay} onClick={onClose}>
//             <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
//                 {/* Close Button */}
//                 <button className={styles.closeBtn} onClick={onClose}>×</button>
//                 <h2 className={styles.title}>Apply your CV</h2>
//                 <form className={styles.form}>
//                     <input type="text" placeholder="Your name" />
//                     <input type="email" placeholder="Your email" />
//                     <input type="text" placeholder="Your phone number" />
//                     {/* Upload CV */}
//                     <label className={styles.uploadBox}>
//                         Upload your CV
//                         <input type="file" accept=".pdf,.doc,.docx" hidden />
//                         <span className={styles.icon}>
//                             <img src="/img/careers/attachment-line.svg" alt="Upload Icon" />
//                         </span>
//                     </label>
//                     <div className={styles.btns}>
//                         <button type="submit" className={styles.sendBtn}>Send</button>
//                         <button type="button" className={styles.cancelBtn} onClick={onClose}>
//                             Cancel
//                         </button>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     )
// }

import React, { useState } from "react";
import styles from "../JopDetailsInfo/JopDetailsInfo.module.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axiosInstance from "../../../../utils/axiosInstance";

export default function ApplyFormJob({ onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    cv: null,
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  // ✅ Handle input change
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "cv") {
      setFormData({ ...formData, cv: files[0] });
    } else if (name === "phone") {
      // 👇 السماح بالأرقام فقط
      const numericValue = value.replace(/\D/g, "");
      setFormData({ ...formData, [name]: numericValue });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // ✅ Validation
  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Invalid email format";

    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.cv) newErrors.cv = "Please upload your CV";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // ✅ Submit handler
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

        <h2 className={styles.title}>Apply your CV</h2>

        <form className={styles.form} onSubmit={handleSubmit}>
          {/* Name */}
          <div className={styles.inputGroup}>
            <input
              type="text"
              name="name"
              placeholder="Your name"
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
              placeholder="Your email"
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
              placeholder="Your mobile number"
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
              className={`${styles.uploadBox} ${
                errors.cv ? styles.inputError : ""
              }`}
            >
              Upload your CV
              <input
                type="file"
                name="cv"
                accept=".pdf,.doc,.docx"
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
              {loading ? <div className={styles.spinner}></div> : "Send"}
            </button>
            <button
              type="button"
              className={styles.cancelBtn}
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </form>

        <ToastContainer position="top-right" autoClose={3000} />
      </div>
    </div>
  );
}


