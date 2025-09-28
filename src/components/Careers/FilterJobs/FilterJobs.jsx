import React from 'react'
import styles from './FilterJobs.module.css'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function FilterJobs() {
    const jobsData = [
        {
            id: 1,
            title: "Job Title ",
            date: "22/2/2005",
            area: "Lorem ipsum dolor sit amet",
            location: "Headquarters",
            experience: "2-3 years",
        },
        {
            id: 2,
            title: "Job Title ",
            date: "12/5/2008",
            area: "Lorem ipsum dolor sit amet",
            location: "Cairo Office",
            experience: "3-5 years",
        },
        {
            id: 3,
            title: "Job Title ",
            date: "15/9/2010",
            area: "Lorem ipsum dolor sit amet",
            location: "Alexandria Office",
            experience: "5+ years",
        },
        {
            id: 4,
            title: "Job Title ",
            date: "7/1/2012",
            area: "Lorem ipsum dolor sit amet",
            location: "Headquarters",
            experience: "2 years",
        },
        {
            id: 5,
            title: "Job Title ",
            date: "18/3/2015",
            area: "Lorem ipsum dolor sit amet",
            location: "Cairo Office",
            experience: "2-4 years",
        },
        {
            id: 6,
            title: "Job Title ",
            date: "5/11/2018",
            area: "Lorem ipsum dolor sit amet",
            location: "Headquarters",
            experience: "1-2 years",
        },
    ];
      const lang = useSelector((state) => state.lang.lang);

    return (
        <section className={`${styles.jobsSection}`}>
            <div className="container">

                {/* Filter Box */}
                <div className={`${styles.filterBox} d-flex align-items-center justify-content-center gap-3 mb-5`}>
                    <select className="form-select">
                        <option>All Locations</option>
                        <option>Cairo</option>
                        <option>Alexandria</option>
                    </select>

                    <select className="form-select">
                        <option>All Areas</option>
                        <option>IT</option>
                        <option>HR</option>
                        <option>Marketing</option>
                    </select>

                    <button className={styles.searchBtn}>Search</button>
                </div>

                {/* Jobs Grid */}
                <div className="row g-4">
                    {jobsData.map((job) => (
                        <div className="col-md-4" key={job.id}>
                            <div className={`${styles.jobCard} p-4 h-100`}>
                                <h5 className={styles.jobTitle}>{job.title}</h5>

                                <div className={styles.jobItem}>
                                    <span>Date:</span> <strong>{job.date}</strong>
                                </div>
                                <div className={styles.jobItem}>
                                    <span>Area:</span> <strong>{job.area}</strong>
                                </div>
                                <div className={styles.jobItem}>
                                    <span>Location:</span> <strong>{job.location}</strong>
                                </div>
                                <div className={styles.jobItem}>
                                    <span>Experience:</span> <strong>{job.experience}</strong>
                                </div>

                                <div className="mt-4">
                                    <Link to={`/${lang}/careers/job-details`}>
                                        <button className={styles.viewBtn}>View more</button>

                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}
