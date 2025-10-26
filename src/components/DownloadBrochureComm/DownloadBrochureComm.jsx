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
   const { data, loading } = useSelector((state) => state.downloadBrochure);
   
  if (loading || !data?.data?.brochures) return null;
  return (
    <>
     <section className={styles.pdfSection}>
<div className={styles.grid}>
  {data?.data?.brochures.map((file, index) => (
    <a
      key={index}
      href={file.pdf} 
      download 
      className={styles.card}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src="/img/downloadbrochure/Rectangle1.png"
        alt="PDF"
        className={styles.icon}
      />
      <p className={styles.title}>{file.name}</p>
    </a>
  ))}
</div>

    </section>
    </>
  )
}
