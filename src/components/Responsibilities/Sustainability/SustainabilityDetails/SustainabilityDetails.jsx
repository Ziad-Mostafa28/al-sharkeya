import React from 'react'
import styles from "./SustainabilityDetails.module.css";
import { useSelector } from 'react-redux';

export default function SustainabilityDetails() {
     const { data, loading } = useSelector((state) => state.sustainability); 
        if (loading || !data?.data.sustainability_lists) return null;
        const  SustainabilityDetails = data?.data?.sustainability_lists;

    // const SustainabilityDetails = [
    //     {
    //         img: "/img/responsibilities/logo1.png",
    //         title: "Our Triple P Performance: Profitability, Planet, & People",
    //         paragraphs: [
    //             "Sustainability is integrated into our core business strategy, enhancing profitability, safeguarding the planet, and empowering people. Our 'Triple P' approach: Profitability, Planet, and People; ensures that our growth is not only financially rewarding but also socially responsible and environmentally sustainable. By embedding sustainability into every aspect of our operations, we create long-term value for stakeholders, employees, and the communities we serve",
    //         ],
    //     },
    //     {
    //         img: "/img/responsibilities/logo2.png",
    //         title: "Profitability Through Purpose:",
    //         paragraphs: [
    //             "We delivered exceptional financial performance with EGP 11.53 billion in revenue, marking a remarkable 63.8% annual growth. This success stems from our strategic sustainability investments that enhance operational efficiency, mitigate risks, and strengthen our competitive position in the market. By embedding responsible practices into every business decision, we create lasting value for shareholders while building a resilient foundation for future growth.",
    //         ],
    //     },
    //     {
    //         img: "/img/responsibilities/logo3.png",
    //         title: "Planet-Focused Environmental Excellence:",
    //         paragraphs: [
    //             "Our environmental stewardship demonstrates measurable impact across all operations. We've achieved a 6.2% reduction in Scope 1 GHG emissions over two years, while managing 3.3 million GJ of total energy consumption with 92.6% from natural gas sources. Our circular economy leadership shines through recycling 259,477 metric tons of by-products—transforming beet pulp into premium livestock feed, molasses into industrial applications, and beet mud into soil enhancement solutions. Through advanced wastewater treatment systems and precision irrigation, we responsibly manage 1.32 million cubic meters of water annually, supporting both industrial operations and agricultural sustainability.",
    //         ],
    //     },
    //     {
    //         img: "/img/responsibilities/logo4.png",
    //         title: "People-Centered Social Impact:",
    //         paragraphs: [
    //             "We believe sustainable success is rooted in empowering our workforce and communities. With zero work-related fatalities maintained for three consecutive years and comprehensive safety training for 457 employees, we've established workplace excellence through ISO 45001/2018 and ISO 14001/2015 certifications. Our social impact extends beyond our 753-person workforce to support over 30,000 farmers through technical assistance,                   sustainable farming education, and resilient seed programs. We've created direct employment opportunities while strengthening local agricultural communities through financial support, transportation assistance, and food security initiatives aligned with ISO 22000 standards.",
    //         ],
    //     },
    // ];

    return (
<section className={`${styles.SustainabilityDetailsSection} pt-5`}>
  <div className={`${styles.container}`}>
    {SustainabilityDetails.map((item, index) => (
 <div
  className={`row mb-5 ${index === 0 ? styles.centeredRow : ""}`}
  key={index}
>

        <div className={`col-12 ${index === 0 ? "col-md-12" : "col-md-12"}`}>
          <div className={`${styles.box}`}>
            <div className={`${index === 0 ? "d-flex flex-column align-items-center" : "row"}`}>
              <div className={`${index === 0 ? "mb-3" : "col-12 col-md-1"}`}>
                <div className={styles.image}>
                  <img src={item.image} alt={item.title} />
                </div>
              </div>
              <div className={`${index === 0 ? "" : "col-12 col-md-11"}`}>
                <h2>{item.title}</h2>
                <div
                  dangerouslySetInnerHTML={{ __html: item.desc }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
</section>

    );
}
