import React from 'react'
import styles from './DownloadBrochureComm.module.css';
import { useSelector } from 'react-redux';



// const pdfFiles = [
//   { title: "Al Sharkeya Sugar Manufacturing PDF" },
//   { title: "Company History PDF" },
//   { title: "Sugar PDF" },
//   { title: "Molasses PDF" },
//   { title: "Pellets PDF" },
//   { title: "Sugar History PDF" },
//   { title: "Al Sharkeya Sugar Manufacturing PDF" },
//   { title: "Al Sharkeya Sugar Manufacturing PDF" },
// ];



export default function DownloadBrochureComm() {
   const { data, loading } = useSelector((state) => state.branches);
   
  if (loading || !data?.data?.branches) return null;
  return (
    <>
     <section className={styles.pdfSection}>
      <div className={styles.grid}>
        {data?.data?.branches.map((file, index) => (
          <div key={index} className={styles.card}>
            <img src="/img/downloadbrochure/Rectangle1.png" alt="PDF" className={styles.icon} />
            <p className={styles.title}>{file.name}</p>
          </div>
        ))}
      </div>
    </section>
    </>
  )
}
