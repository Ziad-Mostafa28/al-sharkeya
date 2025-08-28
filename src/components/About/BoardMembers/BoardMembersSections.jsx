import React, { useState } from "react";
import styles from "./BoardMembersSections.module.css";

export default function BoardMembersSections() {
    const boardMembers = [
        {
            img: "/img/aboutus/person1.png",
            name: "Dr. Shehab Marzaban",
            role: "Chairman",
            shortDesc: `Dr. Shehab Marzaban is the Chairman of Al Sharkeya Sugar Manufacturing since 2024, and was a Board Member since 2020. In addition, he is also the CEO and Founder of Digital Finance Holding as well as Managing Partner at Camel Ventures, the first Venture Debt Investment Vehicle in Egypt. Before that he has been the Founding Chairman and Initiator of Egypt Ventures, a pioneering government-backed tech-focused venture capital firm and has been Chief Advisor to the Minister of Investment and International Cooperation. Within his capacity, he worked on various polices and laws with policy makers and international institutions targeting to enhance the business environment and founded a nation-wide entrepreneurship initiative Fekretak Sherketak and established EFG-EV Fintech accelerators Prior to that, Shehab was Deputy Minister at the Egyptian Ministry of International Cooperation. He was also co-managing and Chairman of a US$ 200 million development impact driven MSME debt and equity financing fund. Until 2015, he was Senior Consultant at the World Bank.`,
            extraDesc: `Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Id excepturi quam repellendus libero,
            sint corporis minima inventore culpa ex molestias iste animi repudiandae, quaerat molestiae nobis error repellat perspiciatis? Tenetur.`,
        },
        {
            img: "/img/aboutus/demo.png",
            name: "Dr. Mohamed Farahat",
            role: "BOD Member",
            shortDesc: `Dr. Mohamed Farahat is a Member of the Board of Directors of Al Sharkeya Sugar Manufacturing representing The Arab Fund for Economic and Social Development. He owns a vast experience as a prominent industrial figure in Egypt and the region. Since joining the Arab Fund, in 1996, Dr. Farahat oversaw the execution of over 60 projects financed by the Arab Fund in 14 Arab countries. These projects had a cumulative cost of around 15 billion dollars, and spanned the electricity, communications, and natural gas sectors. Dr. Farahat published several papers on Arab Electrical Interconnection and Renewable Energy Generation.Before joining the Arab Fund, he held the positions of Manager, Power System Studies and Manager, Technical Training Services in Westinghouse Electric Corporation, in the U.S.A.He has remarkable contributions which are widely recognized at regional and global arenas. Dr. Farahat holds a Ph.D. degree from the University of Pittsburgh, Pennsylvania, in the U.S.A.`,
            extraDesc: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id excepturi quam repellendus libero, sint corporis minima inventore culpa ex molestias iste animi repudiandae, quaerat molestiae nobis error repellat perspiciatis? Tenetur.`,
        },
        {
            img: "/img/aboutus/demo2.png",
            name: "Dr. Abeer Elkholy",
            role: "BOD Member",
            shortDesc: `Dr. Abeer Elkholy has been a Member of the Board of Directors at Al Sharkeya Sugar Manufacturing since 2021. She possesses extensive experience in the field of investment and has previously held several key positions, including Investment Minister Advisor for Arab Affairs, and Regional Director of the Council of Saudi Chambers & Business for managing Saudi investment portfolios in Egypt, exceeding 50 billion dollars. She also held the position of Arab Affairs Advisor at the Investment Authority. Currently Dr. El Khouly is the Regional Director of the Islamic Corporation for Development of the Private Sector at the Islamic Development Bank. She has made significant contributions in the development of Gulf investments in general and Saudi investments in particular in Egypt during the period 2004-2020. Dr. Elkholy holds a Bachelor’s degree in Economic & Political Sciences from Cairo University and a Ph.D. in Business Management from Helwan University.`,
            extraDesc: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id excepturi quam repellendus libero, sint corporis minima inventore culpa ex molestias iste animi repudiandae, quaerat molestiae nobis error repellat perspiciatis? Tenetur.`,
        },
        {
            img: "/img/aboutus/demo.png",
            name: "Eng. Abdulaziz Albabtain",
            role: "BOD Member",
            shortDesc: `Eng. Abdulaziz Mohammed Albabtain is a Board Member of Al Sharkeya Sugar Manufacturing since 2021 representing the Islamic Corporation for the Development of the Private Sector.`,
            shortDesc2:`He is a prominent entrepreneur with proven success in delivering sustainable profits for high-growth organizations and an accomplished leader with more than 35 years of experience and a proven track record and contribution in the food processing, dairy farming, food & beverages production, and agriculture. In 1984, Eng. Albabtain started his career as an Agriculture Engineer at National Agricultural Development Company (NADEC), the leading innovators in agriculture and nutrition in the Saudi Kingdom for over 30 years. Moving forward and progressing in his career, Eng. Albabtain became NADEC’s CEO in 2018. Beside acting as Board Member in Al Sharkeya Sugar Manufacturing, Eng. Albabtain is also a Board member of many leading Companies such as`,
            extraDesc: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id excepturi quam repellendus libero, sint corporis minima inventore culpa ex molestias iste animi repudiandae, quaerat molestiae nobis error repellat perspiciatis? Tenetur.`,
        },
        {
            img: "/img/aboutus/demo.png",
            name: "Representative of Al Nouran Sugar",
            role: "BOD Member",
            shortDesc: `Mr. Ashraf Mahmoud is the Founder and one of the Shareholders and a Board Member in AISharkeya Sugar Manufacturing (Al Nouran) S.A.E. representing Al Nouran Sugar Company. Mr. Mahmoud is also the Chairman and CEO of Al Nouran Sugar and its subsidiary, Al Nouran Mutlitrading. Mr. Mahmoud served as the CEO and Chairman of Al Sharkeya Sugar Manufacturing ( Al Nouran) from 2012 till 2018.`,
            shortDesc2:`Mr. Mahmoud has 42 years of experience in international trade, structured trade finance, barter deals, risk management, and export/ import. He is a member of various associations, including the American Chamber of Commerce, the Egyptian Businessmen’s Association, and others. He holds a Bachelor of Arts degree in Accounting from Ain Sham University in Cairo, and has attended advanced business courses in the American University in Cairo in addition to coursework in Strategic Negotiation at`,
            extraDesc: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id excepturi quam repellendus libero, sint corporis minima inventore culpa ex molestias iste animi repudiandae, quaerat molestiae nobis error repellat perspiciatis? Tenetur.`,
        },
        {
            img: "/img/aboutus/demo.png",
            name: "Mr. Mohamed Abdel Rahim",
            role: "Independent BOD Member",
            shortDesc: `Mr. Mohamed Abdel Rahim has a significant impact on the development of the sugar industry. He spent most of his career in the Egyptian Sugar and Integrated Industries Company where he served as the Chairman of the Board of Directors and Managing Director of (2012-2020) and Financial and Administrative Managing Director (2004-2012). He is an independent board member and Chairman of the Audit Committee of the AlSharkeya Sugar Manufacturing since 2021. Mr. Abdel Rahim is also a board member of major industrial companies in Egypt, such as Delta Sugar (2012-2021), Al-Nubaria Sugar since 2004, White Nile Sugar (Sudan) (2013-2020), Nag Hammadi Fiberboard (2005-2006), and Greater Cairo Bakeries (2003-2004). Mr. Mohamed Abdel Rahim is also a member of the General Assembly of Al-Nasr Company for Import and Export and the Misr Company for Import and Export since 2018.He was born in 1951 and he holds a Bachelor of Commerce in 1976.`,
            extraDesc: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id excepturi quam repellendus libero, sint corporis minima inventore culpa ex molestias iste animi repudiandae, quaerat molestiae nobis error repellat perspiciatis? Tenetur.`,
        },
    ];

    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className={`${styles.BoardMembersSections} py-5`}>
            <div className={`${styles.container}`}>
                {boardMembers.map((member, index) => (
                    <div className={`${styles.bigcard}`} key={index}>
                        <div className={`${styles.image_box}`}>
                            <img src={member.img} alt={member.name} />
                        </div>

                        <div className={`${styles.data_box}`}>
                            <h3 className={`${styles.title}`}>{member.name}</h3>
                            <span className={`${styles.Subtitle}`}>{member.role}</span>

                            <p className={`${styles.desc}`}>{member.shortDesc}</p>
                            <p className={`${styles.desc}`}>{member.shortDesc2}</p>

                            <div
                                className={`${styles.extra} ${openIndex === index ? styles.open : ""
                                    }`}
                            >
                                <p className={`${styles.desc}`}>{member.extraDesc}</p>
                            </div>

                            <button
                                className={styles.readmore}
                                onClick={() => toggleAccordion(index)}
                            >
                                {openIndex === index ? "Read less" : "Read more"}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
