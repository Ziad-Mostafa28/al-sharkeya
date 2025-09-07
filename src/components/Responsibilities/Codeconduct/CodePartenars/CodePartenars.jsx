import React from 'react'
import styles from "./CodePartenars.module.css";

export default function CodePartenars() {
  const data = [
    {
      id: 1,
      image: "/img/responsibilities/1.png",
      title: "Legal Compliance:",
      items: [
        "We comply with all relevant laws in agriculture, food, labor, environment, and trade.",
        "All employees are expected to uphold the same standards.",
        "Suppliers and partners must also fully comply."
      ]
    },
    {
      id: 2,
      image: "/img/responsibilities/2.png",
      title: "Ethical Business Practices::",
      items: [
        "We conduct our business with honesty, fairness, and transparency.",
        "Bribery, corruption, fraud, or any form of unethical conduct is strictly prohibited",
        "We maintain accurate records and uphold the highest standards in reporting and documentation."
      ]
    },
    {
      id: 3,
      image: "/img/responsibilities/3.png",
      title: "Respect for People:",
      items: [
        "We treat all employees, farmers, and partners with dignity and fairness, regardless of gender, ethnicity, religion, or background",
        "We promote a safe, inclusive, and respectful working environment free from harassment, discrimination, or forced labor.",
        "We support fair contract practices and timely, transparent payment to allfarmers and service providers."
      ]
    },
    {
      id: 4,
      image: "/img/responsibilities/4.png",
      title: "Health, Safety & Quality:",
      items: [
        "The health and safety of our employees, contractors, and the communities we serve are non-negotiable.",
        "We comply with all QHSE (Quality, Health, Safety, Environment) standards and continuously improve our systems to prevent incidents and injuries.",
        "We are committed to producing safe, high-quality sugar products that meet or exceed regulatory and customer standards."
      ]
    },
    {
      id: 5,
      image: "/img/responsibilities/5.png",
      title: "Environmental Responsibility:",
      items: [
        "We strive to reduce our environmental footprint through efficient water use,responsible energy consumption, waste reduction, and sustainable sourcing.",
        "We work toward minimizing emissions and protecting soil health during beet cultivation and processing.",
        "Environmental stewardship is a shared responsibility at all levels of our operations"
      ]
    },
    {
      id: 6,
      image: "/img/responsibilities/6.png",
      title: "Sustainability & Community Engagement:",
      items: [
        "We are committed to long-term, sustainable agriculture by supporting farmers with knowledge, fair practices, and responsible input use.",
        "We invest in our surrounding communities through education, job creation, and social responsibility initiatives",
        "We promote ethical sourcing and traceability throughout our supply chain."
      ]
    },
    {
      id: 7,
      image: "/img/responsibilities/7.png",
      title: "Confidentiality & Data Protection:",
      items: [
        "We protect the confidentiality of sensitive company, employee, farmer, and customer information.",
        "Personal data is handled responsibly and in compliance with privacy laws.",
      ]
    },
    {
      id: 8,
      image: "/img/responsibilities/8.png",
      title: "Reporting Concerns:",
      items: [
        "All stakeholders are encouraged to report any violations of this Code of Conduct.",
        "Reports can be made confidentially and without fear of retaliation.",
        "We investigate all concerns seriously and take appropriate corrective actions.",
      ]
    },
  ];

  return (
    <section className={`${styles.CodePartenarsDetailsSection} py-5`}>
      <div className={`${styles.container}`}>
        {data.map((item) => (
          <div className="row mb-4" key={item.id}>
            <div className="col-12 col-md-1">
              <div className={styles.image}>
                <img src={item.image} alt={item.title} />
              </div>
            </div>
            <div className="col-12 col-md-11">
              <div className={styles.box}>
                <h2>{item.title}</h2>
                <ul>
                  {item.items.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
