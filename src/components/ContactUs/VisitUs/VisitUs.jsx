import React, { useState } from 'react'
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import styles from './VisitUs.module.css'

export default function VisitUs() {
     const [date, setDate] = useState(new Date());

/*
    getDay() بيرجع رقم من 0 لـ 6:

    0 = Sunday (الأحد)
    1 = Monday (الإثنين)
    2 = Tuesday (الثلاثاء)
    3 = Wednesday (الأربعاء)
    4 = Thursday (الخميس)
    5 = Friday (الجمعة)
    6 = Saturday (السبت)
  */
   // مثال: هنمنع أيام السبت والأحد

  const tileDisabled = ({ date }) => {
    return date.getDay() === 0 || date.getDay() === 6;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // هنا لاحقًا تبعت الداتا للباك اند
    console.log({
      name: e.target.name.value,
      company: e.target.company.value,
      phone: e.target.phone.value,
      email: e.target.email.value,
      visitDate: date,
    });
  };

  return (
    <>
 <section className={`py-5 ${styles.visitSection}`}>
      <div className="container">
        <div className="text-center mb-4">
          <h2 className={styles.title}>Visit us</h2>
          <p className={styles.subtitle}>
            School and college can visit our factory.
          </p>
        </div>

        <div className="row">
          {/* Left Column - Form */}
          <div className="col-md-6">
            <h4 className={`mb-4 ${styles.formTitle}`}>
              Institution information
            </h4>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <input
                  type="text"
                  name="name"
                  className={`form-control ${styles.input}`}
                  placeholder="Your name"
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  name="company"
                  className={`form-control ${styles.input}`}
                  placeholder="Your company name"
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="tel"
                  name="phone"
                  className={`form-control ${styles.input}`}
                  placeholder="Your phone number"
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  name="email"
                  className={`form-control ${styles.input}`}
                  placeholder="Your email"
                  required
                />
              </div>
              <button type="submit" className={styles.sendBtn}>
                Send
              </button>
            </form>
          </div>

          {/* Right Column - Calendar */}
          <div className="col-md-6 d-flex justify-content-center">
            <div className={styles.calendarCard}>
              <h6 className={styles.calendarHeader}>Select date</h6>
              <Calendar
                onChange={setDate}
                value={date}
                tileDisabled={tileDisabled}
              />
              <p className="mt-3 text-center">
                Selected date:{" "}
                <strong>{date.toDateString()}</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    
    </>
  )
}
