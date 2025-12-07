import React, { useEffect, useState } from "react";
import styles from "./BecomeSupplier.module.css";
import { useForm, Controller } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
  submitSupplierForm,
  resetSupplierFormState,
} from "../../../../store/slices/supplierForm";
import { toast } from "react-toastify";
import Select from "react-select";

export default function BecomeSupplier() {
  const lang = useSelector((state) => state.lang.lang);
        const isArabic= lang === 'ar';  

  
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

const governoratesEN = [
  "Cairo",
  "Giza",
  "Alexandria",
  "Dakahlia",
  "Red Sea",
  "Beheira",
  "Fayoum",
  "Gharbia",
  "Ismailia",
  "Monufia",
  "Minya",
  "Qaliubiya",
  "New Valley",
  "Suez",
  "Aswan",
  "Assiut",
  "Beni Suef",
  "Port Said",
  "Damietta",
  "Sharkia",
  "South Sinai",
  "Kafr El Sheikh",
  "Matruh",
  "Luxor",
  "Qena",
  "North Sinai",
  "Sohag",
];

const governoratesAR = [
  "القاهرة",
  "الجيزة",
  "الإسكندرية",
  "الدقهلية",
  "البحر الأحمر",
  "البحيرة",
  "الفيوم",
  "الغربية",
  "الإسماعيلية",
  "المنوفية",
  "المنيا",
  "القليوبية",
  "الوادي الجديد",
  "السويس",
  "أسوان",
  "أسيوط",
  "بني سويف",
  "بورسعيد",
  "دمياط",
  "الشرقية",
  "جنوب سيناء",
  "كفر الشيخ",
  "مطروح",
  "الأقصر",
  "قنا",
  "شمال سيناء",
  "سوهاج",
];

const governoratesList = isArabic ? governoratesAR : governoratesEN;



  // const governorateOptions = egyptGovernorates.map((gov) => ({
  //   label: gov,
  //   value: gov,
  // }));

const governorateOptions = [...governoratesList]
  .sort((a, b) => a.localeCompare(b, isArabic ? "ar" : "en"))
  .map((gov) => ({
    label: gov,
    value: gov,
  }));




  const [selectedGovernorate, setSelectedGovernorate] = useState(null);
  const [supplierType, setSupplierType] = useState("Individual");


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


    dispatch(submitSupplierForm({ formData, lang: "en" }));
  };

  useEffect(() => {
    if (successMessage) {
      toast.success(successMessage);
      reset();
      setSelectedGovernorate(null);
      dispatch(resetSupplierFormState());
    }
  }, [successMessage, reset, dispatch]);

  return (
    <section className={styles.supplierSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>
                {isArabic ? "طلب أن تصبح مورّد بنجر" : "Request to Become a Beet Supplier"}

        </h2>
        <p className={styles.subtitle}>
                {isArabic ? "انضم إلينا وكن مورّدًا" : "Join us and become a supplier"}

        </p>


        {/* Supplier Type */}
        <div className={styles.radioGroup}>
          <label className={styles.radioLabel}>
            {isArabic ? "نوع المورد*" : "Supplier Type*"}

          </label>
          <div className={styles.radioOptions}>
            <label className={styles.radioItem}>
              <input
                type="radio"
                name="supplierType"
                value="Individual"
                checked={supplierType === "Individual"}
                onChange={(e) => setSupplierType(e.target.value)}
              />
              <span>{isArabic ? "فرد" : "Individual"}</span>
            </label>
            <label className={styles.radioItem}>
              <input
                type="radio"
                name="supplierType"
                value="Corporate"
                checked={supplierType === "Corporate"}
                onChange={(e) => setSupplierType(e.target.value)}
              />
              <span>{isArabic ? "شركة" : "Corporate"}</span>
            </label>
          </div>
        </div>


        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
        placeholder={isArabic ? "الاسم*" : "name*"}
        {...register("name", { required: isArabic ? "الاسم مطلوب" : "Name is required" })}
          />
          {errors.name && (
            <span className={styles.error}>{errors.name.message}</span>
          )}

          {supplierType === "Corporate" && (
            <>
              <input
                type="text"
            placeholder={isArabic ? "اسم الشركة" : "Company name"}
                {...register("company")}
              />
              {errors.company && (
                <span className={styles.error}>{errors.company.message}</span>
              )}
            </>
          )}


          <input
            type="number"
        placeholder={isArabic ? "رقم الموبايل*" : "mobile number*"}
            {...register("phone", {
          required: isArabic ? "رقم الموبايل مطلوب" : "Phone is required",
              pattern: {
                value: /^\+?\d{10,15}$/,
                message: "Please enter a valid phone number",
              },
            })}
          />
          {errors.phone && (
            <span className={styles.error}>{errors.phone.message}</span>
          )}

          <input
            type="email"
        placeholder={isArabic ? "البريد الإلكتروني*" : "email*"}
            {...register("email", {          required: isArabic ? "البريد الإلكتروني مطلوب" : "Email is required", })}
          />
          {errors.email && (
            <span className={styles.error}>{errors.email.message}</span>
          )}

          <Controller
            name="governorate"
            control={control}
        rules={{ required: isArabic ? "اختيار المحافظة مطلوب" : "Governorate is required" }}
            render={({ field }) => (
              <Select
                {...field}
                options={governorateOptions}
                placeholder={isArabic ? "المحافظة*" : "governorate*"}
                isSearchable
                menuPortalTarget={
                  typeof document !== "undefined" ? document.body : null
                }
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
                value={selectedGovernorate}
                onChange={(option) => {
                  setSelectedGovernorate(option);
                  field.onChange(option ? option.label : "");
                }}
              />
            )}
          />
          {errors.governorate && (
            <span className={styles.error}>{errors.governorate.message}</span>
          )}

          <input
            type="number"
        placeholder={isArabic ? "مساحة الأرض بالفدان*" : "land area in feddan*"}
            {...register("land_area", {           required: isArabic ? "مساحة الأرض مطلوبة" : "Land area is required", })}
          />
          {errors.land_area && (
            <span className={styles.error}>{errors.land_area.message}</span>
          )}

          <textarea
        placeholder={isArabic ? "الرسالة*" : "message*"}
        {...register("message", { required: isArabic ? "الرسالة مطلوبة" : "Message is required" })}
          />
          {errors.message && (
            <span className={styles.error}>{errors.message.message}</span>
          )}

          {errorMessage && <p className={styles.error}>{errorMessage}</p>}

          <button type="submit" className={styles.sendBtn} disabled={loading}>
            {loading ? <div className={styles.spinner}></div> :           isArabic ? "إرسال" : "Send"}
          </button>
        </form>
      </div>
    </section>
  );
}
