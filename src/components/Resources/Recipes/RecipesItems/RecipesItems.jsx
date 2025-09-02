import React, { useState } from 'react'
import styles from './RecipesItems.module.css'
import { Link } from 'react-router-dom';

export default function RecipesItems() {

    const NewsData = [
        {
            id: 1,
            img: "/img/recipes/recipes1.png",
            name: "Kunafa with Cream",
            role: "30 min",
            shortDesc: `Kunafa with Cream is a luscious Middle Eastern dessert made of fine, crispy shredded phyllo dough (kataifi) layered with a smooth, velvety cream filling. Baked to golden perfection and soaked in fragrant sugar syrup, it’s a heavenly blend of crunchy and creamy textures, often topped with pistachios for an extra touch of indulgence.`,
        },
        {
            id: 2,
            img: "/img/recipes/recipes2.png",
            name: "Om Ali",
            role: "30 min",
            shortDesc: `Om Ali is a classic Egyptian dessert made from layers of flaky pastry or puff pastry, soaked in sweetened milk and baked with a rich mix of nuts, raisins, and coconut. Served warm and golden, it’s creamy, crunchy, and comforting—like a Middle Eastern bread pudding with a royal twist.`,
        },
        {
            id: 3,
            img: "/img/recipes/recipes3.png",
            name: "Qatayef",
            role: "30 min",
            shortDesc: `Qatayef is a traditional Middle Eastern dessert, especially popular during Ramadan. These stuffed pancakes are filled with sweet cream or nuts, folded and fried or baked to golden perfection, then drizzled with sugar syrup. Crispy on the outside and soft on the inside, Qatayef offers a delightful bite-sized indulgence in every piece.`,
        },
        {
            id: 4,
            img: "/img/recipes/recipes4.png",
            name: "Rice Pudding (Roz Bel Laban)",
            role: "30 min",
            shortDesc: `Roz Bel Laban is a creamy Egyptian rice pudding made with slow-cooked rice, milk, and sugar, delicately flavored with vanilla or rose water. Often topped with cinnamon or nuts, it’s a comforting, smooth dessert that brings nostalgic warmth in every spoonful.`,
        },
        {
            id: 5,
            img: "/img/recipes/recipes1.png",
            name: "Rice Pudding (Roz Bel Laban)",
            role: "30 min",
            shortDesc: `Roz Bel Laban is a creamy Egyptian rice pudding made with slow-cooked rice, milk, and sugar, delicately flavored with vanilla or rose water. Often topped with cinnamon or nuts, it’s a comforting, smooth dessert that brings nostalgic warmth in every spoonful.`,
        },
        {
            id: 6,
            img: "/img/recipes/recipes2.png",
            name: "Rice Pudding (Roz Bel Laban)",
            role: "30 min",
            shortDesc: `Roz Bel Laban is a creamy Egyptian rice pudding made with slow-cooked rice, milk, and sugar, delicately flavored with vanilla or rose water. Often topped with cinnamon or nuts, it’s a comforting, smooth dessert that brings nostalgic warmth in every spoonful.`,
        },
        {
            id: 7,
            img: "/img/recipes/recipes3.png",
            name: "Rice Pudding (Roz Bel Laban)",
            role: "30 min",
            shortDesc: `Roz Bel Laban is a creamy Egyptian rice pudding made with slow-cooked rice, milk, and sugar, delicately flavored with vanilla or rose water. Often topped with cinnamon or nuts, it’s a comforting, smooth dessert that brings nostalgic warmth in every spoonful.`,
        },
        {
            id: 8,
            img: "/img/recipes/recipes4.png",
            name: "Rice Pudding (Roz Bel Laban)",
            role: "30 min",
            shortDesc: `Roz Bel Laban is a creamy Egyptian rice pudding made with slow-cooked rice, milk, and sugar, delicately flavored with vanilla or rose water. Often topped with cinnamon or nuts, it’s a comforting, smooth dessert that brings nostalgic warmth in every spoonful.`,
        },
        {
            id: 9,
            img: "/img/recipes/recipes4.png",
            name: "Rice Pudding (Roz Bel Laban)",
            role: "30 min",
            shortDesc: `Roz Bel Laban is a creamy Egyptian rice pudding made with slow-cooked rice, milk, and sugar, delicately flavored with vanilla or rose water. Often topped with cinnamon or nuts, it’s a comforting, smooth dessert that brings nostalgic warmth in every spoonful.`,
        },

    ];


    // === Pagination Logic ===
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 4;

    const totalPages = Math.ceil(NewsData.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentItems = NewsData.slice(startIndex, startIndex + itemsPerPage);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };
    return (
        <section className={`${styles.NewsDataSections}`}>
            <div className={`${styles.container}`}>
                <h3 className={`${styles.title} mt-5 mb-3`}>Recipes</h3>

                {currentItems.map((member) => (
                    <div className={`${styles.bigcard}`} key={member.id}>
                        <div className={`${styles.image_box}`}>
                            <img src={member.img} alt={member.name} />
                        </div>

                        <div className={`${styles.data_box}`}>
                            <h3 className={`${styles.title}`}>{member.name}</h3>
                            <span className={`${styles.Subtitle}`}>{member.role}</span>

                            <p className={`${styles.desc}`}>{member.shortDesc}</p>

                            <button
                                className={styles.readmore}

                            >
                                <Link to={'/recipe-details'} className={styles.readmoreLink}>
                                   Read more

                                </Link>
                            </button>
                        </div>
                    </div>
                ))}

                {/* === Pagination === */}
                {totalPages > 1 && (
                    <div className={styles.pagination}>
                        <button
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                            className={styles.arrow}
                        >
                            ‹
                        </button>

                        {Array.from({ length: totalPages }, (_, i) => (
                            <button
                                key={i + 1}
                                onClick={() => handlePageChange(i + 1)}
                                className={`${styles.pageNumber} ${currentPage === i + 1 ? styles.activePage : ""}`}
                            >
                                {i + 1}
                            </button>
                        ))}

                        <button
                            onClick={() => handlePageChange(currentPage + 1)}
                            disabled={currentPage === totalPages}
                            className={styles.arrow}
                        >
                            ›
                        </button>
                    </div>

                )}
            </div>
        </section>
    )
}
