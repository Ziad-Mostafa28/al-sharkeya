// import React from 'react'
// import styles from './BecomeSupplier.module.css'

// export default function BecomeSupplier() {
//   return (
//     <>
//     <section className={styles.supplierSection}>
//       <div className={styles.container}>
//         <h2 className={styles.title}>Become a Supplier</h2>
//         <p className={styles.subtitle}>Join us and become a supplier.</p>

//         <form className={styles.form}>
//           <input type="text" placeholder="Your name*" required />
//           <input type="text" placeholder="Your company name" />
//           <input type="tel" placeholder="Your phone number*" required />
//           <input type="email" placeholder="Your email" />

//           <select required>
//             <option value="">Your governorate*</option>
//             <option value="cairo">Cairo</option>
//             <option value="giza">Giza</option>
//             <option value="alexandria">Alexandria</option>
//           </select>

//           <input type="text" placeholder="Land area*" required />
//           <textarea placeholder="Your message"></textarea>

//           <button type="submit" className={styles.sendBtn}>Send</button>
//         </form>
//       </div>
//     </section>


//     </>
//   )
// }


// import React, { useEffect } from "react";
// import styles from "./BecomeSupplier.module.css";
// import { useForm } from "react-hook-form";
// import { useDispatch, useSelector } from "react-redux";
// import { submitSupplierForm, resetSupplierFormState } from "../../../../store/slices/supplierForm";
// import { toast } from "react-toastify";
// import { getNames } from "country-list"; 
// import Select from "react-select"; // ✅ المكتبة الجديدة


// export default function BecomeSupplier() {
//   const dispatch = useDispatch();
//   const { loading, successMessage, errorMessage } = useSelector((state) => state.suppliers);

//   const {
//     register,
//     handleSubmit,
//     reset,
//     formState: { errors },
//   } = useForm();

//   const onSubmit = (data) => {
//     const formData = new FormData();
//     formData.append("name", data.name);
//     formData.append("company", data.company);
//     formData.append("phone", data.phone);
//     formData.append("email", data.email);
//     formData.append("governorate", data.governorate);
//     formData.append("area", data.land_area);
//     formData.append("message", data.message);

//     const formDataObj = {};
//     formData.forEach((value, key) => {
//       formDataObj[key] = value;
//     });

//     console.log("📤 Data sent to backend:", formDataObj);

//     dispatch(submitSupplierForm({ formData, lang: "en" }));
//   };

//   useEffect(() => {
//     if (successMessage) {
//       toast.success(successMessage);
//       reset();
//       dispatch(resetSupplierFormState());
//     }
//   }, [successMessage, reset, dispatch]);

//   return (
//     <section className={styles.supplierSection}>
//       <div className={styles.container}>
//         <h2 className={styles.title}>Become a Supplier</h2>
//         <p className={styles.subtitle}>Join us and become a supplier.</p>

//         <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
//           <input
//             type="text"
//             placeholder="Your name*"
//             {...register("name", { required: "Name is required" })}
//           />
//           {errors.name && <span className={styles.error}>{errors.name.message}</span>}

//           <input
//             type="text"
//             placeholder="Your company name*"
//             {...register("company", { required: "Company name is required" })}
//           />
//           {errors.company && <span className={styles.error}>{errors.company.message}</span>}

//           <input
//             type="tel"
//             placeholder="Your phone number*"
//             {...register("phone", { required: "Phone is required" })}
//           />
//           {errors.phone && <span className={styles.error}>{errors.phone.message}</span>}

//           <input
//             type="email"
//             placeholder="Your email*"
//             {...register("email", { required: "Email is required" })}
//           />
//           {errors.email && <span className={styles.error}>{errors.email.message}</span>}

//           <select
//             {...register("governorate", { required: "Governorate is required" })}
//           >
//             <option value="">Your governorate*</option>
//             <option value="cairo">Cairo</option>
//             <option value="giza">Giza</option>
//             <option value="alexandria">Alexandria</option>
//           </select>
//           {errors.governorate && <span className={styles.error}>{errors.governorate.message}</span>}

//           <input
//             type="text"
//             placeholder="Land area*"
//             {...register("land_area", { required: "Land area is required" })}
//           />
//           {errors.land_area && <span className={styles.error}>{errors.land_area.message}</span>}

//           <textarea
//             placeholder="Your message*"
//             {...register("message", { required: "Message is required" })}
//           />
//           {errors.message && <span className={styles.error}>{errors.message.message}</span>}

//           {errorMessage && <p className={styles.error}>{errorMessage}</p>}

//           <button type="submit" className={styles.sendBtn} disabled={loading}>
//             {loading ? (
//               <div className={styles.spinner}></div>
//             ) : (
//               "Send"
//             )}
//           </button>

//         </form>
//       </div>
//     </section>
//   );
// }


// import React, { useEffect } from "react";
// import styles from "./BecomeSupplier.module.css";
// import { useForm } from "react-hook-form";
// import { useDispatch, useSelector } from "react-redux";
// import { submitSupplierForm, resetSupplierFormState } from "../../../../store/slices/supplierForm";
// import { toast } from "react-toastify";
// import { getNames } from "country-list"; 
// import Select from "react-select"; // ✅ المكتبة الجديدة


// export default function BecomeSupplier() {
//   const dispatch = useDispatch();
//   const { loading, successMessage, errorMessage } = useSelector((state) => state.suppliers);

//   const {
//     register,
//     handleSubmit,
//     reset,
//     formState: { errors },
//   } = useForm();

//   const onSubmit = (data) => {
//     const formData = new FormData();
//     formData.append("name", data.name);
//     formData.append("company", data.company);
//     formData.append("phone", data.phone);
//     formData.append("email", data.email);
//     formData.append("governorate", data.governorate);
//     formData.append("area", data.land_area);
//     formData.append("message", data.message);

//     const formDataObj = {};
//     formData.forEach((value, key) => {
//       formDataObj[key] = value;
//     });

//     console.log("📤 Data sent to backend:", formDataObj);

//     dispatch(submitSupplierForm({ formData, lang: "en" }));
//   };

//   useEffect(() => {
//     if (successMessage) {
//       toast.success(successMessage);
//       reset();
//       dispatch(resetSupplierFormState());
//     }
//   }, [successMessage, reset, dispatch]);

//   return (
//     <section className={styles.supplierSection}>
//       <div className={styles.container}>
//         <h2 className={styles.title}>Become a Supplier</h2>
//         <p className={styles.subtitle}>Join us and become a supplier.</p>

//         <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
//           <input
//             type="text"
//             placeholder="Your name*"
//             {...register("name", { required: "Name is required" })}
//           />
//           {errors.name && <span className={styles.error}>{errors.name.message}</span>}

//           <input
//             type="text"
//             placeholder="Your company name*"
//             {...register("company", { required: "Company name is required" })}
//           />
//           {errors.company && <span className={styles.error}>{errors.company.message}</span>}

//           <input
//             type="tel"
//             placeholder="Your phone number*"
//             {...register("phone", { required: "Phone is required" })}
//           />
//           {errors.phone && <span className={styles.error}>{errors.phone.message}</span>}

//           <input
//             type="email"
//             placeholder="Your email*"
//             {...register("email", { required: "Email is required" })}
//           />
//           {errors.email && <span className={styles.error}>{errors.email.message}</span>}

//           <select
//             {...register("governorate", { required: "Governorate is required" })}
//           >
//             <option value="">Your governorate*</option>
//             <option value="cairo">Cairo</option>
//             <option value="giza">Giza</option>
//             <option value="alexandria">Alexandria</option>
//           </select>
//           {errors.governorate && <span className={styles.error}>{errors.governorate.message}</span>}

//           <input
//             type="text"
//             placeholder="Land area*"
//             {...register("land_area", { required: "Land area is required" })}
//           />
//           {errors.land_area && <span className={styles.error}>{errors.land_area.message}</span>}

//           <textarea
//             placeholder="Your message*"
//             {...register("message", { required: "Message is required" })}
//           />
//           {errors.message && <span className={styles.error}>{errors.message.message}</span>}

//           {errorMessage && <p className={styles.error}>{errorMessage}</p>}

//           <button type="submit" className={styles.sendBtn} disabled={loading}>
//             {loading ? (
//               <div className={styles.spinner}></div>
//             ) : (
//               "Send"
//             )}
//           </button>

//         </form>
//       </div>
//     </section>
//   );
// }



// 

import React, { useEffect, useState } from "react";
import styles from "./BecomeSupplier.module.css";
import { useForm, Controller } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
  submitSupplierForm,
  resetSupplierFormState,
} from "../../../../store/slices/supplierForm";
import { toast } from "react-toastify";
import { getNames } from "country-list";
import Select from "react-select";

export default function BecomeSupplier() {
  const dispatch = useDispatch();
  const { loading, successMessage, errorMessage } = useSelector(
    (state) => state.suppliers
  );

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm();

  const countryOptions = getNames().map((country) => ({
    label: country,
    value: country,
  }));

  const [selectedCountry, setSelectedCountry] = useState(null);

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("company", data.company);
    formData.append("phone", data.phone);
    formData.append("email", data.email);
    formData.append("governorate", data.governorate);
    formData.append("area", data.land_area);
    formData.append("message", data.message);

    const formDataObj = {};
    formData.forEach((value, key) => {
      formDataObj[key] = value;
    });

    console.log("📤 Data sent to backend:", formDataObj);

    dispatch(submitSupplierForm({ formData, lang: "en" }));
  };

  useEffect(() => {
    if (successMessage) {
      toast.success(successMessage);
      reset();
      setSelectedCountry(null); 
      dispatch(resetSupplierFormState());
    }
  }, [successMessage, reset, dispatch]);

  return (
    <section className={styles.supplierSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>Become a Supplier</h2>
        <p className={styles.subtitle}>Join us and become a supplier.</p>

        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            placeholder="Your name*"
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && (
            <span className={styles.error}>{errors.name.message}</span>
          )}

          <input
            type="text"
            placeholder="Your company name*"
            {...register("company", { required: "Company name is required" })}
          />
          {errors.company && (
            <span className={styles.error}>{errors.company.message}</span>
          )}

          <input
            type="number"
            placeholder="Your phone number*"
            {...register("phone", { required: "Phone is required" })}
          />
          {errors.phone && (
            <span className={styles.error}>{errors.phone.message}</span>
          )}

          <input
            type="email"
            placeholder="Your email*"
            {...register("email", { required: "Email is required" })}
          />
          {errors.email && (
            <span className={styles.error}>{errors.email.message}</span>
          )}

          <Controller
            name="governorate"
            control={control}
            rules={{ required: "Governorate is required" }}
            render={({ field }) => (
              <Select
                {...field}
                options={countryOptions}
                placeholder="Your governorate*"
                isSearchable
                menuPortalTarget={typeof document !== "undefined" ? document.body : null}
                menuPosition="fixed"
                className={styles.input}
                classNamePrefix="select"
                styles={{
                  control: (base, state) => ({
                    ...base,
                    backgroundColor: "#f9f9f9",
                    border: "none",
                    borderBottom: errors.governorate
                      ? "2px solid red"
                      : state.isFocused
                      ? "2px solid #8F8F8F"
                      : "1px solid #8F8F8F",
                    borderRadius: 0,
                    height: "42px",
                    boxShadow: "none",
                    fontSize: "16px",
                    outline: "none",
                    "&:hover": {
                      borderBottom: errors.governorate
                        ? "2px solid red"
                        : "1px solid #8F8F8F",
                    },
                  }),
                  singleValue: (base) => ({
                    ...base,
                    color: "#8F8F8F",
                    fontSize: "14px",
                  }),
                  placeholder: (base) => ({
                    ...base,
                    color: "#888",
                    fontSize: "16px",
                  }),
                  menuPortal: (base) => ({ ...base, zIndex: 9999 }),
                  menu: (base) => ({
                    ...base,
                    borderRadius: "6px",
                    zIndex: 9999,
                    maxHeight: "200px",
                    overflowY: "auto",
                  }),
                  valueContainer: (base) => ({ ...base, padding: "0 0px" }),
                  input: (base) => ({ ...base, margin: 0, padding: 0 }),
                  indicatorsContainer: (base) => ({ ...base, padding: "0 6px" }),
                }}
                value={selectedCountry}
                onChange={(option) => {
                  setSelectedCountry(option); 
                  field.onChange(option ? option.label : "");
                }}
              />
            )}
          />
          {errors.governorate && (
            <span className={styles.error}>{errors.governorate.message}</span>
          )}

          <input
            type="text"
            placeholder="Land area*"
            {...register("land_area", { required: "Land area is required" })}
          />
          {errors.land_area && (
            <span className={styles.error}>{errors.land_area.message}</span>
          )}

          <textarea
            placeholder="Your message*"
            {...register("message", { required: "Message is required" })}
          />
          {errors.message && (
            <span className={styles.error}>{errors.message.message}</span>
          )}

          {errorMessage && <p className={styles.error}>{errorMessage}</p>}

          <button type="submit" className={styles.sendBtn} disabled={loading}>
            {loading ? <div className={styles.spinner}></div> : "Send"}
          </button>
        </form>
      </div>
    </section>
  );
}
