import React, { useState } from "react";
import styles from "./BoardMembersSections.module.css";

export default function BoardMembersSections() {
    const boardMembers = [
        {
            img: "/img/aboutus/person1.png",
            name: "Dr. Shehab Marzaban",
            role: "Chairman",
            shortDesc: `Dr. Shehab Marzaban is the Chairman of Al Sharkeya Sugar Manufacturing since 2024, and was a Board Member since 2020. In addition, he is also the CEO and Founder of Digital Finance Holding as well as Managing Partner at Camel Ventures, the first Venture Debt Investment Vehicle in Egypt. Before that he has been the Founding Chairman and Initiator of Egypt Ventures, a pioneering government-backed tech-focused venture capital firm and has been Chief Advisor to the Minister of Investment and International Cooperation. Within his capacity, he worked on various polices and laws with policy makers and international institutions targeting to enhance the business environment and founded a nation-wide entrepreneurship initiative Fekretak Sherketak and established EFG-EV Fintech accelerators Prior to that, Shehab was Deputy Minister at the Egyptian Ministry of International Cooperation. He was also co-managing and Chairman of a US$ 200 million development impact driven MSME debt and equity financing fund. Until 2015, he was Senior Consultant at the World Bank.
Dr. Shehab was also co-founder of Shekra Crowdfunding, receiving the Islamic Economy Award for Best SME Development in 2013. His areas of specialization include: Fintech, Islamic Fintech, venture capital and entrepreneurship; MSME and startups development; crowdfunding; as well as computer-based financial services. He joined Silicon Valley-based FinTech Ideal Ratings as Product Development Director and Head of Research in August 2008 developing the first rule-based SaaS engine and platform for Shariah and Ethical screening, purification and Islamic Fund Management. Shehab was assistant professor at QFIS in Qatar Foundation and a visiting professor at IMD Business School, Zayed University, and Durham University among others. Dr. Shehab has a BSc and MSc in computer science from Cairo University and received his PhD from the School of Economics at the University of Cologne in Germany, resulting in various publications in several international journals and conferences. Dr. Shehab is a MIT Foundry Fellow and is a Fellow of the sixth class of the Middle East Leadership Initiative and a member of the Aspen Global Leadership Network.`
            // shortDesc: `Dr. Shehab Marzaban is the Chairman of Al Sharkeya Sugar Manufacturing since 2024, and was a Board Member since 2020. In addition, he is also the CEO and Founder of Digital Finance Holding as well as Managing Partner at Camel Ventures, the first Venture Debt Investment Vehicle in Egypt. Before that he has been the Founding Chairman and Initiator of Egypt Ventures, a pioneering government-backed tech-focused venture capital firm and has been Chief Advisor to the Minister of Investment and International Cooperation. Within his capacity, he worked on various polices and laws with policy makers and international institutions targeting to enhance the business environment and founded a nation-wide entrepreneurship initiative Fekretak Sherketak and established EFG-EV Fintech accelerators Prior to that, Shehab was Deputy Minister at the Egyptian Ministry of International Cooperation. He was also co-managing and Chairman of a US$ 200 million development impact driven MSME debt and equity financing fund. Until 2015, he was Senior Consultant at the World Bank.`,
            // extraDesc: `Dr. Shehab was also co-founder of Shekra Crowdfunding, receiving the Islamic Economy Award for Best SME Development in 2013. His areas of specialization include: Fintech, Islamic Fintech, venture capital and entrepreneurship; MSME and startups development; crowdfunding; as well as computer-based financial services. He joined Silicon Valley-based FinTech Ideal Ratings as Product Development Director and Head of Research in August 2008 developing the first rule-based SaaS engine and platform for Shariah and Ethical screening, purification and Islamic Fund Management. Shehab was assistant professor at QFIS in Qatar Foundation and a visiting professor at IMD Business School, Zayed University, and Durham University among others. Dr. Shehab has a BSc and MSc in computer science from Cairo University and received his PhD from the School of Economics at the University of Cologne in Germany, resulting in various publications in several international journals and conferences. Dr. Shehab is a MIT Foundry Fellow and is a Fellow of the sixth class of the Middle East Leadership Initiative and a member of the Aspen Global Leadership Network.`,
        },
        {
            img: "/img/aboutus/demo.png",
            name: "Dr. Mohamed Farahat",
            role: "BOD Member",
            shortDesc: `Dr. Mohamed Farahat is a Member of the Board of Directors of Al Sharkeya Sugar Manufacturing representing The Arab Fund for Economic and Social Development. He owns a vast experience as a prominent industrial figure in Egypt and the region. Since joining the Arab Fund, in 1996, Dr. Farahat oversaw the execution of over 60 projects financed by the Arab Fund in 14 Arab countries. These projects had a cumulative cost of around 15 billion dollars, and spanned the electricity, communications, and natural gas sectors. Dr. Farahat published several papers on Arab Electrical Interconnection and Renewable Energy Generation. Before joining the Arab Fund, he held the positions of Manager, Power System Studies and Manager, Technical Training Services in Westinghouse Electric Corporation, in the U.S.A. He has remarkable contributions which are widely recognized at regional and global arenas. Dr. Farahat holds a Ph.D. degree from the University of Pittsburgh, Pennsylvania, in the U.S.A. `
        },
        {
            img: "/img/aboutus/demo2.png",
            name: "Dr. Abeer Elkholy",
            role: "BOD Member",
            shortDesc: `Dr. Abeer Elkholy has been a Member of the Board of Directors at Al Sharkeya Sugar Manufacturing since 2021. She possesses extensive experience in the field of investment and has previously held several key positions, including Investment Minister Advisor for Arab Affairs, and Regional Director of the Council of Saudi Chambers & Business for managing Saudi investment portfolios in Egypt, exceeding 50 billion dollars. She also held the position of Arab Affairs Advisor at the Investment Authority. Currently Dr. El Khouly is the Regional Director of the Islamic Corporation for Development of the Private Sector at the Islamic Development Bank. She has made significant contributions in the development of Gulf investments in general and Saudi investments in particular in Egypt during the period 2004-2020. Dr. Elkholy holds  a Bachelor’s degree in Economic & Political Sciences from Cairo University and a Ph.D. in Business Management from Helwan University.`
        },
        {
            img: "/img/aboutus/demo.png",
            name: "Eng. Abdulaziz Albabtain",
            role: "BOD Member",
            shortDesc: `Eng. Abdulaziz Mohammed Albabtain is a Board Member of Al Sharkeya Sugar Manufacturing since 2021 representing the Islamic Corporation for the Development of the Private Sector.
He is a prominent entrepreneur with proven success in delivering sustainable profits for high-growth organizations and an accomplished leader with more than 35 years of experience and a proven track record and contribution in the food processing, dairy farming, food & beverages production, and agriculture. In 1984, Eng. Albabtain started his career as an Agriculture Engineer at National Agricultural Development Company (NADEC), the leading innovators in agriculture and nutrition in the Saudi Kingdom for over 30 years. Moving forward and progressing in his career, Eng. Albabtain became NADEC’s CEO in 2018. Beside acting as Board Member in Al Sharkeya Sugar Manufacturing, Eng. Albabtain is also a Board member of many leading Companies such as Kenana Sugar Company, White Nile sugar Company, National Biscuits & Confectionery CO. LTD. Eng. Albabtain holds his Bachelor degree in Agricultural Engineering from King Saud University and gained the Top CEOs in the Middle East Awards from Forbes in 2016`
        },
        {
            img: "/img/aboutus/demo.png",
            name: "Representative of Al Nouran Sugar",
            role: "BOD Member",
            shortDesc: `Need to Update) Mr. Ashraf Mahmoud is the Founder and one of the Shareholders and a Board Member in AISharkeya Sugar Manufacturing (Al Nouran) S.A.E.  representing Al Nouran Sugar Company. Mr. Mahmoud is also the Chairman and CEO of Al Nouran Sugar and its subsidiary, Al Nouran Mutlitrading. Mr. Mahmoud served as the CEO and Chairman of Al Sharkeya Sugar Manufacturing ( Al Nouran)  from 2012 till 2018.
                        Mr. Mahmoud has 42 years of experience in international trade, structured trade finance, barter deals, risk management, and export/ import. He is a member of various associations, including the American Chamber of Commerce, the Egyptian Businessmen’s Association, and others. He holds a Bachelor of Arts degree in Accounting from Ain Sham University in Cairo, and has attended advanced business courses in the American University in Cairo in addition to coursework in Strategic Negotiation at Stanford University in San Francisco, California, USA, advanced business courses in Harvard business school and London business school. Mr. Mahmoud has an extensive network of relationships as result of his business activities as well as his high-profile involvement with promoting Egypt to host the World Formula One Championship. He lobbied on behalf of the Egyptian government to host the 2004 championship. Mr. Mahmoud cultivated relationships with various prominent international figures including the King of Spain, the King of Sweden, the Prime Minister of Italy.`
        },
        {
            img: "/img/aboutus/demo.png",
            name: "Mr. Salah Fathy Mohamed Ali",
            role: "BOD Member",
            shortDesc: `Chemist Salah Fathy Mohamed is a distinguished leader in the sugar industry, currently serving as the Executive Managing Director of the Egyptian Sugar & Integrated Industries Company (ESIIC) and a Board Member of El Sharkia Sugar Manufacturing Company since October 2024. He earned his Bachelor of Science from Assiut University in 1982 and has since built an extensive career in sugar production and manufacturing.
                        With decades of experience, he has held several key positions at ESIIC, including Head of Industrial Production (2012-2015), Head of Refinery Factory (2015-2018), and Managing Director for Technical Affairs (2018-2022). He later served as Chairman and Managing Director of El Fayoum Sugar Industries (2022-2024) before assuming his current role.
                        Mr. Fathy has played a pivotal role in installing, operating, and developing sugar factories in Egypt, including Girga, Belqas, and Fayoum Sugar Factories. Internationally, he contributed to projects such as operating the fourth factory out of seven factories that have been installed and operated in the Islamic Republic of Iran; and resolving issues at Sudanese sugar plants, and evaluating the Maysan Sugar Factory in Iraq.
                        Committed to professional development, he has completed specialized training in sugar technology, industrial safety, and waste management. His international training includes programs with Japan’s JICA and industry-specific courses in India.`
        },
        {
            img: "/img/aboutus/demo.png",
            name: "Mr. Mohamed Abdel Rahim",
            role: "Independent BOD Member",
            shortDesc: `Mr. Mohamed Abdel Rahim has a significant impact on the development of the sugar industry. He spent most of his career in the Egyptian Sugar and Integrated Industries Company where he served as the Chairman of the Board of Directors and Managing Director of (2012-2020) and Financial and Administrative Managing Director (2004-2012). He is an independent board member and Chairman of the Audit Committee of the AlSharkeya Sugar Manufacturing since 2021. Mr. Abdel Rahim is also a board member of major industrial companies in Egypt, such as Delta Sugar (2012-2021), Al-Nubaria Sugar since 2004, White Nile Sugar (Sudan) (2013-2020), Nag Hammadi Fiberboard (2005-2006), and Greater Cairo Bakeries (2003-2004). Mr. Mohamed Abdel Rahim is also a member of the General Assembly of Al-Nasr Company for Import and Export and the Misr Company for Import and Export since 2018.He was born in 1951 and he holds a Bachelor of Commerce in 1976.`
        },
        {
            img: "/img/aboutus/demo.png",
            name: "Mr. Montaser Hussein Al-Heney",
            role: "Independent BOD Member",
            shortDesc: `Mr. Montaser Hussein Al-Heney has 38 years of experience with tangible contributions in industry. He joined the Board of Directors of AlSharkeya Sugar Manufacturing as a representative of the Egyptian Sugar and Integrated Industries Company from 04/2018 until 05/2020. He joined the Board of Directors as a member of expertise (independent) from 05/2020 until today. Mr. Al-Heney’s areas of expertise cover a wide spectrum of fields including technology of sugar extraction from sugar cane and sugar beet, technology of raw sugar refining, technology for producing organic materials such as: (ethyl alcohol / glacial acetic acid / fresh and dry baking yeast / adhesives / slovents), technology of manufacturing perfumes and cosmetics, in addition to supervising the implementation of quality management, quality assurance, and the application of various quality systems and the health and food safety program. Mr. Al-Heney’s held several previous positions including General Manager of Sugar Production from Cane and Beets and Raw Sugar Refining in the period from 2000/2008, Head of the Raw Sugar Refining Factories Sectors in the period from 2008/2015, Head of the Organic Chemical and Perfumes Industries Sectors in the period from 2015/2020, Board Member Management of Misr Edfu Paper Production Company in the period from 2017/2018, Member of the Board of Directors of the Multi-Trade Company in the period from 2012/2014, Member of the Board of Directors of the Advanced Housing and Installations Company in the period from 2014/2021, Member of the Supreme Advisory Committee for Community Development at South Valley University in The period from 2002/2003, and Member of the Supreme Advisory Committee for Community Development at the Faculty of Science, Cairo University in the period from 2012/2019. Mr. Al-Heney is a Bachelor of Science in General Chemistry with a very good grade in 1982.`
        },
        {
            img: "/img/aboutus/demo.png",
            name: "Mr. Ahmed Saad Eldeen Abo Hendya",
            role: "BOD Member",
            shortDesc: `(Need to Update) Mr. Sadiq Ahmed El Sewedy is one of the Shareholders and a Board Member in AISharkeya Sugar Manufacturing (Al Nouran) S.A.E.  Mr. El Sewedy is a prominent figure in the energy and industrial sectors. He graduated from Cairo University in 1982 and has since built a distinguished career leading major industrial companies.
He currently serves as the Chairman of El Sewedy Electric, a global company specializing in energy and electrical industries, with factories in Europe, Africa, and Asia. The company is also a leader in power plant construction. Additionally, he is the Chairman and Managing Director of El Sewedy Industries, which operates in the cement and building materials sector.
His influence extends to other fields, as he is an investor in higher education and the healthcare sector, alongside his contributions to community development initiatives. He is also a Board of Trustees member at Nile University (NU), El Sewedy University of Technology (SUT), and Knowledge Hub University.
With his leadership and strategic vision, Mr. Sadiq El Sewedy continues to play a vital role in advancing the industry, energy, and education sectors, making him one of the most influential figures in these fields.
`
        },
    ];

    const [expandedIndex, setExpandedIndex] = useState(null);

    const toggleExpand = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <section className={`${styles.BoardMembersSections} py-5`}>
            <div className={`${styles.container}`}>
                {boardMembers.map((member, index) => {
                    const fullText = `${member.shortDesc} ${member.shortDesc2 || ""} ${member.extraDesc || ""}`.trim();

                    return (
                        <div className={`${styles.bigcard}`} key={index}>
                            <div className={`${styles.image_box}`}>
                                <img src={member.img} alt={member.name} />
                            </div>

                            <div className={`${styles.data_box}`}>
                                <h3 className={`${styles.title}`}>{member.name}</h3>
                                <span className={`${styles.Subtitle}`}>{member.role}</span>

                                <p
                                    className={`${styles.desc} ${expandedIndex === index ? styles.expanded : styles.clamped
                                        }`}
                                >
                                    {fullText}
                                </p>

                                {/* الزرار يظهر فقط لو النص طويل */}
                                {fullText.length > 300 && (
                                    <button
                                        className={styles.readmore}
                                        onClick={() => toggleExpand(index)}
                                    >
                                        {expandedIndex === index ? "Read less" : "Read more"}
                                    </button>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
