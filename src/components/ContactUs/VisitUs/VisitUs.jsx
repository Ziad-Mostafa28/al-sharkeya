// import React, { useState } from 'react';

// export default function VisitUs() {
//   const [selectedDate, setSelectedDate] = useState(17);
//   const [currentMonth, setCurrentMonth] = useState(7); // August (0-indexed)
//   const [currentYear, setCurrentYear] = useState(2025);

//   const months = [
//     'January', 'February', 'March', 'April', 'May', 'June',
//     'July', 'August', 'September', 'October', 'November', 'December'
//   ];

//   const daysOfWeek = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

//   const getDaysInMonth = (month, year) => {
//     return new Date(year, month + 1, 0).getDate();
//   };

//   const getFirstDayOfMonth = (month, year) => {
//     return new Date(year, month, 1).getDay();
//   };

//   const generateCalendarDays = () => {
//     const daysInMonth = getDaysInMonth(currentMonth, currentYear);
//     const firstDay = getFirstDayOfMonth(currentMonth, currentYear);
//     const days = [];

//     // Empty cells for days before the first day of the month
//     for (let i = 0; i < firstDay; i++) {
//       days.push(null);
//     }

//     // Days of the month
//     for (let day = 1; day <= daysInMonth; day++) {
//       days.push(day);
//     }

//     return days;
//   };

//   const handlePrevMonth = () => {
//     if (currentMonth === 0) {
//       setCurrentMonth(11);
//       setCurrentYear(currentYear - 1);
//     } else {
//       setCurrentMonth(currentMonth - 1);
//     }
//   };

//   const handleNextMonth = () => {
//     if (currentMonth === 11) {
//       setCurrentMonth(0);
//       setCurrentYear(currentYear + 1);
//     } else {
//       setCurrentMonth(currentMonth + 1);
//     }
//   };

//   const handleSubmit = () => {
//     console.log({
//       selectedDate: new Date(currentYear, currentMonth, selectedDate),
//     });
//   };

//   const calendarDays = generateCalendarDays();

//   return (
//     <section className="py-5" style={{ background: '#fff' }}>
//       <div className="container">
//         <div className="text-center mb-4">
//           <h2 style={{ fontWeight: 600, fontSize: '24px' }}>Visit us</h2>
//           <p style={{ color: '#555' }}>
//             School and college can visit our factory.
//           </p>
//         </div>

//         <div className="row">
//           {/* Left Column - Form */}
//           <div className="col-md-6">
//             <h4 style={{ 
//               marginBottom: '20px', 
//               fontWeight: 600, 
//               fontSize: '18px' 
//             }}>
//               Institution information
//             </h4>
//             <div>
//               <div style={{ marginBottom: '20px' }}>
//                 <input
//                   type="text"
//                   style={{
//                     width: '100%',
//                     border: 'none',
//                     borderBottom: '1px solid #ccc',
//                     borderRadius: 0,
//                     padding: '8px 0',
//                     outline: 'none',
//                     fontSize: '14px',
//                     background: 'transparent'
//                   }}
//                   placeholder="Your name"
//                 />
//               </div>
//               <div style={{ marginBottom: '20px' }}>
//                 <input
//                   type="text"
//                   style={{
//                     width: '100%',
//                     border: 'none',
//                     borderBottom: '1px solid #ccc',
//                     borderRadius: 0,
//                     padding: '8px 0',
//                     outline: 'none',
//                     fontSize: '14px',
//                     background: 'transparent'
//                   }}
//                   placeholder="Your company name"
//                 />
//               </div>
//               <div style={{ marginBottom: '20px' }}>
//                 <input
//                   type="tel"
//                   style={{
//                     width: '100%',
//                     border: 'none',
//                     borderBottom: '1px solid #ccc',
//                     borderRadius: 0,
//                     padding: '8px 0',
//                     outline: 'none',
//                     fontSize: '14px',
//                     background: 'transparent'
//                   }}
//                   placeholder="Your phone number"
//                 />
//               </div>
//               <div style={{ marginBottom: '30px' }}>
//                 <input
//                   type="email"
//                   style={{
//                     width: '100%',
//                     border: 'none',
//                     borderBottom: '1px solid #ccc',
//                     borderRadius: 0,
//                     padding: '8px 0',
//                     outline: 'none',
//                     fontSize: '14px',
//                     background: 'transparent'
//                   }}
//                   placeholder="Your email"
//                 />
//               </div>
//               <button 
//                 onClick={handleSubmit}
//                 style={{
//                   background: '#D4A574',
//                   color: '#fff',
//                   border: 'none',
//                   padding: '10px 35px',
//                   borderRadius: '25px',
//                   fontSize: '14px',
//                   fontWeight: '500',
//                   cursor: 'pointer',
//                   transition: '0.3s'
//                 }}
//                 onMouseOver={(e) => e.target.style.background = '#B8956A'}
//                 onMouseOut={(e) => e.target.style.background = '#D4A574'}
//               >
//                 Send
//               </button>
//             </div>
//           </div>

//           {/* Right Column - Custom Calendar */}
//           <div className="col-md-6 d-flex justify-content-center">
//             <div style={{
//               width: '320px',
//               borderRadius: '12px',
//               background: '#E8E8E8',
//               padding: '20px',
//               boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
//             }}>
//               {/* Calendar Header */}
//               <div style={{
//                 display: 'flex',
//                 justifyContent: 'space-between',
//                 alignItems: 'center',
//                 marginBottom: '8px'
//               }}>
//                 <span style={{
//                   fontSize: '12px',
//                   color: '#888',
//                   fontWeight: '500'
//                 }}>
//                   Select date
//                 </span>
//               </div>

//               {/* Month/Year and Navigation */}
//               <div style={{
//                 display: 'flex',
//                 justifyContent: 'space-between',
//                 alignItems: 'center',
//                 marginBottom: '20px'
//               }}>
//                 <div style={{
//                   fontSize: '18px',
//                   fontWeight: '600',
//                   color: '#333'
//                 }}>
//                   {months[currentMonth].slice(0, 3)}, {currentYear}
//                 </div>
//                 <div style={{ display: 'flex', gap: '10px' }}>
//                   <button
//                     onClick={handlePrevMonth}
//                     style={{
//                       background: 'none',
//                       border: 'none',
//                       fontSize: '18px',
//                       color: '#666',
//                       cursor: 'pointer',
//                       padding: '5px'
//                     }}
//                   >
//                     ‹
//                   </button>
//                   <button
//                     onClick={handleNextMonth}
//                     style={{
//                       background: 'none',
//                       border: 'none',
//                       fontSize: '18px',
//                       color: '#666',
//                       cursor: 'pointer',
//                       padding: '5px'
//                     }}
//                   >
//                     ›
//                   </button>
//                 </div>
//               </div>

//               {/* Days of week headers */}
//               <div style={{
//                 display: 'grid',
//                 gridTemplateColumns: 'repeat(7, 1fr)',
//                 gap: '4px',
//                 marginBottom: '10px'
//               }}>
//                 {daysOfWeek.map((day, index) => (
//                   <div
//                     key={index}
//                     style={{
//                       textAlign: 'center',
//                       fontSize: '12px',
//                       fontWeight: '500',
//                       color: '#888',
//                       padding: '8px 0'
//                     }}
//                   >
//                     {day}
//                   </div>
//                 ))}
//               </div>

//               {/* Calendar Grid */}
//               <div style={{
//                 display: 'grid',
//                 gridTemplateColumns: 'repeat(7, 1fr)',
//                 gap: '4px'
//               }}>
//                 {calendarDays.map((day, index) => (
//                   <div
//                     key={index}
//                     onClick={() => day && setSelectedDate(day)}
//                     style={{
//                       width: '36px',
//                       height: '36px',
//                       display: 'flex',
//                       alignItems: 'center',
//                       justifyContent: 'center',
//                       borderRadius: '50%',
//                       fontSize: '14px',
//                       fontWeight: day === selectedDate ? '600' : '400',
//                       cursor: day ? 'pointer' : 'default',
//                       background: day === selectedDate ? '#D4A574' : 'transparent',
//                       color: day === selectedDate ? '#fff' : day ? '#333' : 'transparent',
//                       transition: 'all 0.2s ease',
//                       margin: '0 auto'
//                     }}
//                     onMouseOver={(e) => {
//                       if (day && day !== selectedDate) {
//                         e.target.style.background = '#D0D0D0';
//                       }
//                     }}
//                     onMouseOut={(e) => {
//                       if (day && day !== selectedDate) {
//                         e.target.style.background = 'transparent';
//                       }
//                     }}
//                   >
//                     {day}
//                   </div>
//                 ))}
//               </div>

//               {/* Bottom buttons */}
//               <div style={{
//                 display: 'flex',
//                 justifyContent: 'flex-end',
//                 gap: '10px',
//                 marginTop: '20px'
//               }}>
//                 <button
//                   style={{
//                     background: 'none',
//                     border: 'none',
//                     color: '#888',
//                     fontSize: '14px',
//                     cursor: 'pointer',
//                     padding: '8px 16px'
//                   }}
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   style={{
//                     background: '#D4A574',
//                     color: '#fff',
//                     border: 'none',
//                     borderRadius: '6px',
//                     fontSize: '14px',
//                     fontWeight: '500',
//                     cursor: 'pointer',
//                     padding: '8px 16px',
//                     transition: '0.2s'
//                   }}
//                   onMouseOver={(e) => e.target.style.background = '#B8956A'}
//                   onMouseOut={(e) => e.target.style.background = '#D4A574'}
//                 >
//                   OK
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }



/////////////////////////////////   Elshami code  /////////////////////////////////////////////////////////
// import React, { useState, useEffect } from 'react';
// import styles from './VisitUs.module.css';

// export default function VisitUs() {
//   // اليوم الحالي (ثابت حسب طلبك)
//   const today = new Date(2025, 8, 2); // September 2, 2025

//   // الحالة
//   const [selectedDate, setSelectedDate] = useState(null); // خليه null لحد ما المستخدم يختار
//   const [currentMonth, setCurrentMonth] = useState(8); // سبتمبر (0-indexed)
//   const [currentYear, setCurrentYear] = useState(2025);
//   const [formData, setFormData] = useState({
//     name: '',
//     company: '',
//     phone: '',
//     email: ''
//   });
//   const [availableDates, setAvailableDates] = useState([]);

//   // الأيام المتاحة - mock
//   useEffect(() => {
//     const mockAvailableDates = [
//       '2025-09-02', '2025-09-05', '2025-09-07', '2025-09-09', 
//       '2025-09-12', '2025-09-14', '2025-09-16', '2025-09-19',
//       '2025-09-21', '2025-09-23', '2025-09-26', '2025-09-28'
//     ];
//     setAvailableDates(mockAvailableDates);
//   }, []);

//   // ثابتات
//   const months = [
//     'January','February','March','April','May','June',
//     'July','August','September','October','November','December'
//   ];
//   const daysOfWeek = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

//   // Utilities
//   const getDaysInMonth = (month, year) => new Date(year, month + 1, 0).getDate();
//   const getFirstDayOfMonth = (month, year) => new Date(year, month, 1).getDay();

//   const isToday = (day) =>
//     day === today.getDate() &&
//     currentMonth === today.getMonth() &&
//     currentYear === today.getFullYear();

//   const isDateAvailable = (day) => {
//     if (!day) return false;
//     const dateString = `${currentYear}-${String(currentMonth + 1).padStart(2,'0')}-${String(day).padStart(2,'0')}`;
//     return availableDates.includes(dateString);
//   };

//   const handleInputChange = (field, value) => {
//     setFormData(prev => ({ ...prev, [field]: value }));
//   };

//   const generateCalendarDays = () => {
//     const daysInMonth = getDaysInMonth(currentMonth, currentYear);
//     const firstDay = getFirstDayOfMonth(currentMonth, currentYear);
//     const days = [];
//     for (let i = 0; i < firstDay; i++) days.push(null);
//     for (let day = 1; day <= daysInMonth; day++) days.push(day);
//     return days;
//   };

//   const handlePrevMonth = () => {
//     if (currentMonth === 0) {
//       setCurrentMonth(11);
//       setCurrentYear(y => y - 1);
//     } else {
//       setCurrentMonth(m => m - 1);
//     }
//   };

//   const handleNextMonth = () => {
//     if (currentMonth === 11) {
//       setCurrentMonth(0);
//       setCurrentYear(y => y + 1);
//     } else {
//       setCurrentMonth(m => m + 1);
//     }
//   };

//   const handleSubmit = () => {
//     // if (!selectedDate) {
//     //   alert('من فضلك اختر تاريخ الزيارة');
//     //   return;
//     // }
//     // if (!formData.name || !formData.company || !formData.phone || !formData.email) {
//     //   alert('من فضلك املأ جميع الحقول');
//     //   return;
//     // }

//     const visitData = {
//       ...formData,
//       visitDate: `${currentYear}-${String(currentMonth + 1).padStart(2,'0')}-${String(selectedDate).padStart(2,'0')}`,
//       visitDateFormatted: new Date(currentYear, currentMonth, selectedDate).toLocaleDateString('ar-EG')
//     };

//     // console.log('بيانات الزيارة:', visitData);
//     // alert('تم إرسال طلب الزيارة بنجاح! (للتجربة فقط)');
//     // reset (اختياري)
//     // setFormData({ name: '', company: '', phone: '', email: '' });
//     // setSelectedDate(null);
//   };

//   const calendarDays = generateCalendarDays();

//   return (
//     <section className={styles.visitSection}>
//       <div className="container">
//         <div className="text-center mb-4">
//           <h2 className={styles.sectionTitle}>Visit us</h2>
//           <p className={styles.sectionSubtitle}>
//             School and college can visit our factory.
//           </p>
//         </div>

//         <div className="row mt-5">
//           {/* Left: Form */}
//           <div className="col-md-6">
//             <h4 className={styles.formTitle}>Institution information</h4>

//             <div className={styles.inputGroup}>
//               <input
//                 type="text"
//                 value={formData.name}
//                 onChange={(e) => handleInputChange('name', e.target.value)}
//                 className={styles.inputField}
//                 placeholder="Your name"
//               />
//             </div>

//             <div className={styles.inputGroup}>
//               <input
//                 type="text"
//                 value={formData.company}
//                 onChange={(e) => handleInputChange('company', e.target.value)}
//                 className={styles.inputField}
//                 placeholder="Your company name"
//               />
//             </div>

//             <div className={styles.inputGroup}>
//               <input
//                 type="tel"
//                 value={formData.phone}
//                 onChange={(e) => handleInputChange('phone', e.target.value)}
//                 className={styles.inputField}
//                 placeholder="Your phone number"
//               />
//             </div>

//             <div className={styles.inputGroup}>
//               <input
//                 type="email"
//                 value={formData.email}
//                 onChange={(e) => handleInputChange('email', e.target.value)}
//                 className={styles.inputField}
//                 placeholder="Your email"
//               />
//             </div>

//             <button onClick={handleSubmit} className={styles.sendBtn}>
//               Send
//             </button>
//           </div>

//           {/* Right: Calendar */}
//           <div className="col-md-6 d-flex justify-content-center">
//             <div className={styles.calendarWrapper} aria-label="Calendar">
//               <div className={styles.calendarHeader}>
//                 <span className={styles.calendarHint}>Select date</span>
//               </div>

//               <div className={styles.calendarNav}>
//                 <div className={styles.calendarMonth}>
//                   {months[currentMonth].slice(0, 3)}, {currentYear}
//                 </div>
//                 <div className={styles.navBtns}>
//                   <button type="button" onClick={handlePrevMonth} className={styles.navBtn} aria-label="Previous month">‹</button>
//                   <button type="button" onClick={handleNextMonth} className={styles.navBtn} aria-label="Next month">›</button>
//                 </div>
//               </div>

//               <div className={styles.daysOfWeek}>
//                 {daysOfWeek.map((d, i) => (
//                   <div key={i} className={styles.dayOfWeek}>{d}</div>
//                 ))}
//               </div>

//               <div className={styles.calendarGrid}>
//                 {calendarDays.map((day, idx) => {
//                   const available = isDateAvailable(day);
//                   const isSelected = day === selectedDate;
//                   const todayActive = isToday(day);

//                   return (
//                     <button
//                       key={idx}
//                       type="button"
//                       disabled={!day || !available}
//                       onClick={() => day && available && setSelectedDate(day)}
//                       className={[
//                         styles.calendarDayBtn,
//                         day ? '' : styles.invisibleCell,
//                         available ? styles.available : styles.unavailable,
//                         isSelected ? styles.selected : '',
//                         todayActive ? styles.today : ''
//                       ].join(' ')}
//                       aria-pressed={isSelected}
//                       aria-label={day ? `Day ${day}` : 'Empty'}
//                     >
//                       {day || ''}
//                     </button>
//                   );
//                 })}
//               </div>

//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }









/////////////////////////////  ziad code /////////////////////////////////
import React, { useState, useEffect } from 'react';
import styles from './VisitUs.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { submitVisitForm, resetVisitState } from '../../../../store/slices/visitSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useForm } from 'react-hook-form';

export default function VisitUs() {
  const dispatch = useDispatch();
  const { loading, successMessage, errorMessage, submitted } = useSelector((state) => state.visit);
  const currentLang = useSelector((state) => state.lang.lang);

  const [selectedDate, setSelectedDate] = useState(null);
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  const { register, handleSubmit, formState: { errors },reset  } = useForm();

  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const daysOfWeek = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

  const getDaysInMonth = (m, y) => new Date(y, m + 1, 0).getDate();
  const getFirstDayOfMonth = (m, y) => new Date(y, m, 1).getDay();

  const onSubmit = (data) => {
    if (!selectedDate) return toast.error('Please select a date');

    const payload = {
      ...data,
      visit_date: `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(selectedDate).padStart(2, '0')}`
    };

    dispatch(submitVisitForm({ formData: payload, lang: currentLang }));
  };

useEffect(() => {
  if (successMessage) {
    toast.success(successMessage);
    reset();              // 🧼 مسح البيانات من الحقول
    setSelectedDate(null); // 🧼 مسح اليوم المختار
    dispatch(resetVisitState());
  }
  if (errorMessage) toast.error(errorMessage);
}, [successMessage, errorMessage, dispatch, reset]);


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

  return (
    <section className={styles.visitSection}>
      <div className="container">
        <div className="text-center mb-4">
          <h2 className={styles.sectionTitle}>Request a factory visit</h2>
          <p className={styles.sectionSubtitle}>School and college can visit our factory</p>
        </div>

        <div className="row mt-5">
          <div className="col-md-6">
            <h4 className={styles.formTitle}>Institution information</h4>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className={styles.inputGroup}>
                <input
                  type="text"
                  placeholder="Your name"
                  className={styles.inputField}
                  {...register("name", { required: "Name is required" })}
                />
                {errors.name && <p className={styles.errorMsg}>{errors.name.message}</p>}
              </div>

              <div className={styles.inputGroup}>
                <input
                  type="text"
                  placeholder="Your company"
                  className={styles.inputField}
                  {...register("company", { required: "Company is required" })}
                />
                {errors.company && <p className={styles.errorMsg}>{errors.company.message}</p>}
              </div>

              <div className={styles.inputGroup}>
                <input
                  type="tel"
                  placeholder="Your phone"
                  className={styles.inputField}
                  {...register("phone", { required: "Phone is required" })}
                />
                {errors.phone && <p className={styles.errorMsg}>{errors.phone.message}</p>}
              </div>

              <div className={styles.inputGroup}>
                <input
                  type="email"
                  placeholder="Your email"
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
                {days.map((day, idx) => (
                  <button
                    key={idx}
                    type="button"
                    disabled={!day || submitted}
                    onClick={() => day && setSelectedDate(day)}
                    className={[
                      styles.calendarDayBtn,
                      !day && styles.invisibleCell,
                      day === selectedDate && styles.selected
                    ].join(' ')}
                  >
                    {day || ''}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <ToastContainer position="top-right" />
      </div>
    </section>
  );
}
