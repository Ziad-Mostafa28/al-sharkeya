import React from "react";
import styles from "./OurShareholdersSection.module.css";
import { useSelector } from "react-redux";

export default function OurShareholdersSection() {
  const { data, loading } = useSelector((state) => state.aboutShareholders);
  const shareholders = data?.data?.shareholders || [];

  if (loading || !shareholders.length) return null;

  return (
    <section className={`${styles.OurShareholdersSection} py-5`}>
      <div className={`${styles.container}`}>
        {shareholders.map((item) => (
          <div className="row mb-5" key={item.id}>
            <div className="col-12 col-md-2">
              <img src={item.image} alt={item.title} />
            </div>
            <div className="col-12 col-md-10">
              <div className={`${styles.box}`}>
                <h2>{item.title}</h2>
                <div
                  dangerouslySetInnerHTML={{ __html: item.desc }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
