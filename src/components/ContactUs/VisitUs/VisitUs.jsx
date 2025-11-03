// import React, { useState, useEffect } from 'react';
// import styles from './VisitUs.module.css';
// import { useDispatch, useSelector } from 'react-redux';
// import { submitVisitForm, resetVisitState } from '../../../../store/slices/visitSlice';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { useForm } from 'react-hook-form';

// export default function VisitUs() {
//   const dispatch = useDispatch();
//   const { loading, successMessage, errorMessage, submitted } = useSelector((state) => state.visit);
//   const currentLang = useSelector((state) => state.lang.lang);

//   const [selectedDate, setSelectedDate] = useState(null);
//   const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
//   const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

//   const { register, handleSubmit, formState: { errors },reset  } = useForm();

//   const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
//   const daysOfWeek = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

//   const getDaysInMonth = (m, y) => new Date(y, m + 1, 0).getDate();
//   const getFirstDayOfMonth = (m, y) => new Date(y, m, 1).getDay();

//   const onSubmit = (data) => {
//     if (!selectedDate) return toast.error('Please select a date');

//     const payload = {
//       ...data,
//       visit_date: `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(selectedDate).padStart(2, '0')}`
//     };

//     dispatch(submitVisitForm({ formData: payload, lang: currentLang }));
//   };

// useEffect(() => {
//   if (successMessage) {
//     toast.success(successMessage);
//     reset();              
//     setSelectedDate(null); 
//     dispatch(resetVisitState());
//   }
//   if (errorMessage) toast.error(errorMessage);
// }, [successMessage, errorMessage, dispatch, reset]);


//   const days = (() => {
//     const count = getDaysInMonth(currentMonth, currentYear);
//     const first = getFirstDayOfMonth(currentMonth, currentYear);
//     return [...Array(first).fill(null), ...Array.from({ length: count }, (_, i) => i + 1)];
//   })();

//   const handlePrevMonth = () => {
//     if (currentMonth === 0) {
//       setCurrentMonth(11);
//       setCurrentYear(y => y - 1);
//     } else setCurrentMonth(m => m - 1);
//   };
//   const handleNextMonth = () => {
//     if (currentMonth === 11) {
//       setCurrentMonth(0);
//       setCurrentYear(y => y + 1);
//     } else setCurrentMonth(m => m + 1);
//   };

//   return (
//     <section className={styles.visitSection}>
//       <div className="container">
//         <div className="text-center mb-4">
//           <h2 className={styles.sectionTitle}>Request a Factory Visit</h2>
//           <p className={styles.sectionSubtitle}>School and college can visit our factory</p>
//         </div>

//         <div className="row mt-5">
//           <div className="col-md-6">
//             <h4 className={styles.formTitle}>Institution Information</h4>

//             <form onSubmit={handleSubmit(onSubmit)}>
//               <div className={styles.inputGroup}>
//                 <input
//                   type="text"
//                   placeholder="name"
//                   className={styles.inputField}
//                   {...register("name", { required: "Name is required" })}
//                 />
//                 {errors.name && <p className={styles.errorMsg}>{errors.name.message}</p>}
//               </div>

//               <div className={styles.inputGroup}>
//                 <input
//                   type="text"
//                   placeholder="company"
//                   className={styles.inputField}
//                   {...register("company", { required: "Company is required" })}
//                 />
//                 {errors.company && <p className={styles.errorMsg}>{errors.company.message}</p>}
//               </div>

//               <div className={styles.inputGroup}>
//                 <input
//                   type="tel"
//                   placeholder="phone"
//                   className={styles.inputField}
//                   {...register("phone", { required: "Phone is required" })}
//                 />
//                 {errors.phone && <p className={styles.errorMsg}>{errors.phone.message}</p>}
//               </div>

//               <div className={styles.inputGroup}>
//                 <input
//                   type="email"
//                   placeholder="email"
//                   className={styles.inputField}
//                   {...register("email", { required: "Email is required" })}
//                 />
//                 {errors.email && <p className={styles.errorMsg}>{errors.email.message}</p>}
//               </div>

//               <button type="submit" className={styles.sendBtn} disabled={loading || submitted}>
//                 {loading ? <div className={styles.spinner}></div> : "Send"}
//               </button>
//             </form>
//           </div>

//           <div className="col-md-6 d-flex justify-content-center">
//             <div className={styles.calendarWrapper}>
//               <div className={styles.calendarNav}>
//                 <div>{months[currentMonth].slice(0, 3)}, {currentYear}</div>
//                 <div>
//                   <button type="button" onClick={handlePrevMonth} className={styles.navBtn}>‹</button>
//                   <button type="button" onClick={handleNextMonth} className={styles.navBtn}>›</button>
//                 </div>
//               </div>

//               <div className={styles.daysOfWeek}>
//                 {daysOfWeek.map((d, i) => <div key={i}>{d}</div>)}
//               </div>

//               <div className={styles.calendarGrid}>
//                 {days.map((day, idx) => (
//                   <button
//                     key={idx}
//                     type="button"
//                     disabled={!day || submitted}
//                     onClick={() => day && setSelectedDate(day)}
//                     className={[
//                       styles.calendarDayBtn,
//                       !day && styles.invisibleCell,
//                       day === selectedDate && styles.selected
//                     ].join(' ')}
//                   >
//                     {day || ''}
//                   </button>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>

//         <ToastContainer position="top-right" />
//       </div>
//     </section>
//   );
// }





import React, { useState, useEffect } from 'react';
import styles from './VisitUs.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { submitVisitForm, resetVisitState } from '../../../../store/slices/visitSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useForm } from 'react-hook-form';
import axiosInstance from '../../../../utils/axiosInstance';

export default function VisitUs() {
  const dispatch = useDispatch();
  const { loading, successMessage, errorMessage, submitted } = useSelector((state) => state.visit);
  const currentLang = useSelector((state) => state.lang.lang);

  const [selectedDate, setSelectedDate] = useState(null);
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [availableDates, setAvailableDates] = useState([]); 

  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const daysOfWeek = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

  const getDaysInMonth = (m, y) => new Date(y, m + 1, 0).getDate();
  const getFirstDayOfMonth = (m, y) => new Date(y, m, 1).getDay();

  useEffect(() => {
    const fetchAvailableDates = async () => {
      try {
        const res = await axiosInstance.get('visits/dates');
        if (res.data?.data) {
          setAvailableDates(res.data.data);
        }
      } catch (err) {
        console.error('Error fetching visit dates:', err);
        toast.error('Failed to load available dates');
      }
    };
    fetchAvailableDates();
  }, []);

  useEffect(() => {
    if (successMessage) {
      toast.success(successMessage);
      reset();
      setSelectedDate(null);
      dispatch(resetVisitState());
    }
    if (errorMessage) toast.error(errorMessage);
  }, [successMessage, errorMessage, dispatch, reset]);

  const onSubmit = (data) => {
    if (!selectedDate) return toast.error('Please select a date');
    const payload = {
      ...data,
      visit_date: `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(selectedDate).padStart(2, '0')}`,
    };
    dispatch(submitVisitForm({ formData: payload, lang: currentLang }));
  };

  const days = (() => {
    const count = getDaysInMonth(currentMonth, currentYear);
    const first = getFirstDayOfMonth(currentMonth, currentYear);
    return [...Array(first).fill(null), ...Array.from({ length: count }, (_, i) => i + 1)];
  })();

  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(y => y - 1);
    } else setCurrentMonth(m => m - 1);
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(y => y + 1);
    } else setCurrentMonth(m => m + 1);
  };

  const isDayAvailable = (day) => {
    const dateStr = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    return availableDates.includes(dateStr);
  };

  return (
    <section className={styles.visitSection}>
      <div className="container">
        <div className="text-center mb-4">
          <h2 className={styles.sectionTitle}>Request a Factory Visit</h2>
          <p className={styles.sectionSubtitle}>Schools and colleges can visit our factory based on availability.</p>
        </div>

        <div className="row mt-5">
          {/* ✅ FORM */}
          <div className="col-md-6">
            <h4 className={styles.formTitle}>Institution Information</h4>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className={styles.inputGroup}>
                <input
                  type="text"
                  placeholder="name*"
                  className={styles.inputField}
                  {...register("name", { required: "Name is required" })}
                />
                {errors.name && <p className={styles.errorMsg}>{errors.name.message}</p>}
              </div>

              <div className={styles.inputGroup}>
                <input
                  type="text"
                  placeholder="institution name*"
                  className={styles.inputField}
                  {...register("company", { required: "Company is required" })}
                />
                {errors.company && <p className={styles.errorMsg}>{errors.company.message}</p>}
              </div>

              <div className={styles.inputGroup}>
                <input
                  type="tel"
                  placeholder="mobile number*"
                  className={styles.inputField}
                  {...register("phone", { 
                    required: "Phone is required",
                    pattern: {
                      value: /^\+?\d{10,15}$/,
                      message: "Please enter a valid phone number",
                    },
                   })}
                />
                {errors.phone && <p className={styles.errorMsg}>{errors.phone.message}</p>}
              </div>

              <div className={styles.inputGroup}>
                <input
                  type="email"
                  placeholder="email*"
                  className={styles.inputField}
                  {...register("email", { required: "Email is required" })}
                />
                {errors.email && <p className={styles.errorMsg}>{errors.email.message}</p>}
              </div>

              <button type="submit" className={styles.sendBtn} disabled={loading || submitted}>
                {loading ? <div className={styles.spinner}></div> : "Send"}
              </button>
            </form>
          </div>

          {/* ✅ CALENDAR */}
          <div className="col-md-6 d-flex justify-content-center">
            <div className={styles.calendarWrapper}>
              <div className={styles.calendarNav}>
                <div>{months[currentMonth].slice(0, 3)}, {currentYear}</div>
                <div>
                  <button type="button" onClick={handlePrevMonth} className={styles.navBtn}>‹</button>
                  <button type="button" onClick={handleNextMonth} className={styles.navBtn}>›</button>
                </div>
              </div>

              <div className={styles.daysOfWeek}>
                {daysOfWeek.map((d, i) => <div key={i}>{d}</div>)}
              </div>

              <div className={styles.calendarGrid}>
                {days.map((day, idx) => {
                  const available = day && isDayAvailable(day);
                  return (
                    <button
                      key={idx}
                      type="button"
                      disabled={!day || !available || submitted} // ❌ غير المتاحة = Disabled
                      onClick={() => available && setSelectedDate(day)}
                      className={[
                        styles.calendarDayBtn,
                        !day && styles.invisibleCell,
                        available ? styles.availableDay : styles.disabledDay,
                        day === selectedDate && styles.selected
                      ].join(' ')}
                    >
                      {day || ''}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <ToastContainer position="top-right" />
      </div>
    </section>
  );
}
