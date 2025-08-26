import React from 'react';
import styles from './OurCustomers.module.css';

const customers = [
  { id: 1, img: '/img/homepage/coca.png', alt: 'Coca Cola' },
  { id: 2, img: '/img/homepage/pepsi.png', alt: 'Pepsi' },
  { id: 3, img: '/img/homepage/juhayna.png', alt: 'Juhayna' },
  { id: 4, img: '/img/homepage/edita.png', alt: 'Edita' },
];

export default function OurCustomers() {
  return (
    <section className={`${styles.ourCustomers}`}>
      <div className="">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h3 className="fw-bold m-0">Our Customers</h3>
          <a href="#" className={styles.viewAll}>View all</a>
        </div>

        <div className={`d-flex flex-wrap ${styles.logosWrapper}`}>
          {customers.map(customer => (
            <div key={customer.id} className={styles.logoBox}>
              <img src={customer.img} alt={customer.alt} className={styles.logoImg} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
