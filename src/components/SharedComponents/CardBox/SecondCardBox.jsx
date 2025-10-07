import React from "react";
import styles from "./SecondCardBox.module.css";
import { useSelector } from "react-redux";

export default function SecondCardBox() {

    const { data,loading} = useSelector((state) => state.aboutStrategy);
    if (loading || !data) return null;

  const desc = data?.data?.strategy_section?.strategy_desc|| [];
    const image = data?.data?.strategy_section?.strategy_image|| [];
    return (
        <section className={styles.SecondCardBox}>
            <div className={styles.container}>
                <div className="row">
                    <div className="col-12 col-md-8">
                        <div
                        dangerouslySetInnerHTML={{__html: desc}}
                        
                        ></div>
                      
                    </div>
                    <div className="col-12 col-md-4">
                        <img src={image} alt="SecondCardBox" />
                    </div>
                </div>
            </div>
        </section>
    );
}
